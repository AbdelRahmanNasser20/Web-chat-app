from flask import Blueprint

bp = Blueprint('history', __name__)

@bp.route('/history', methods=['POST'])
def history():
    # Handle login logic
    pass