from backend import create_app, socketio
from flask import session
from flask_cors import CORS
from flask_socketio import SocketIO
import backend.config as config

# from application import create_app
# from application.database import DataBase


# SETUP
app = create_app()
CORS(app, resources={r"/*": {"origins": "*"}})  # Explicitly allow all origins
socketio = SocketIO(app)  # used for user communication

if __name__ == '__main__':
    socketio.run(app, debug=True)
