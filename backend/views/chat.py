from flask import Blueprint
from flask_socketio import emit, join_room, leave_room
from backend import socketio

bp = Blueprint('chat', __name__)

@socketio.on('message')
def handle_message(data):
    # ... your code to store message in database ...
    emit('message', data, broadcast=True)

@socketio.on('join')
def on_join(data):
    room = data['room']
    join_room(room)
    emit('status', {'msg': f'{data["username"]} has entered the room.'}, room=room)
# Add more events as needed ...