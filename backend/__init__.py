from flask import Flask
from flask_socketio import SocketIO
from .config import Config
from .database import db

socketio = SocketIO()

def create_app():
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object(Config)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    socketio.init_app(app, cors_allowed_origins="*")
    
    # @app.cli.command("init-db")
    # def init_db_command():
    #     """Initialize the database."""
    #     db.create_all()
    #     print("Initialized the database.")
    with app.app_context():
        db.create_all()

    from .views import auth, chat, history
    app.register_blueprint(auth.bp)
    app.register_blueprint(chat.bp)
    app.register_blueprint(history.bp)

    return app


# from flask import Flask
# from flask_socketio import SocketIO
# from .config import Config
# # from flask_sqlalchemy import SQLAlchemy
# from database import db

# socketio = SocketIO()

# def create_app():
#     app = Flask(__name__, instance_relative_config=False)
#     app.config.from_object(Config)
#     app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'  # This will create an SQLite database named site.db.
#     app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # To suppress a warning and improve performance    
#     db.init_app(app)
#     socketio.init_app(app, cors_allowed_origins="*")  # initialize SocketIO with app        
    
#     # Register blueprints
#     from .views import auth, chat, history
#     app.register_blueprint(auth.bp)
#     app.register_blueprint(chat.bp)
#     app.register_blueprint(history.bp)
    
#     return app
