from flask import Blueprint, request, jsonify, session, g
from werkzeug.security import check_password_hash, generate_password_hash
from ..database import User
from ..database import db

print("NAME IS " + __name__)
bp = Blueprint('auth', __name__)

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    if not data:
        return jsonify(success=False, message="Empty request"), 400
    
    if "username" not in data:
        return jsonify(success=False, message="Missing username"), 400
    
    if "password" not in data:
        return jsonify(success=False, message="Missing password"), 400

    # query the user
    user = User.query.filter_by(username=data["username"]).first()

    if not user:        
        return jsonify(success=False, message="User does not exist"), 400
    
    if not check_password_hash(user.password, data["password"]):
        return jsonify(success=False, message="Invalid credentials"), 400
    
    session["user_id"] = user.id
    session["username"] = user.id
    return jsonify(success=True, message="Logged in successfully", **{"session": session})

@bp.route('/register', methods=['POST'])
def register():    
    data = request.get_json()
    if not data:
        return jsonify(success=False, message="empty request"), 400
    
    if "username" not in data:
        return jsonify(success=False, message="Missing username"), 400
    
    if "password" not in data:
        return jsonify(success=False, message="Missing password"), 400
    
    user = User.query.filter_by(username=data["username"]).first()        
    if user:        
        return jsonify(success=False, message="User Exist"), 400

    hashed_password = generate_password_hash(data["password"], method='sha256')
    new_user = User(username=data["username"], password=hashed_password)

    # Add to database and commit
    db.session.add(new_user)
    db.session.commit()    

    return jsonify(success=True, message="Registered successfully")

@bp.route('/logout', methods=['POST'])
def logout():
    session.pop("user_id",None)
    session.pop("username", None)
    return jsonify(success=True, message="User logged out sucessfully")