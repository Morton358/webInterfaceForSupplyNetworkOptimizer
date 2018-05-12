"""This module does run the server."""
import os
from flask import Flask, send_from_directory, jsonify
import application.main

APP = Flask(__name__, static_folder='client/build')

# Serve React App
@APP.route('/', defaults={'path': ''})
@APP.route('/<path:path>')
def serve(path):
    """
    catch all routes, test if the path is a file => send file => else send
    the index.html
    """
    if path != "" and os.path.exists("client/build/" + path):
        return send_from_directory('client/build', path)
    return send_from_directory('client/build', 'index.html')

@APP.route("/api/solve", methods=["GET"])
def calculate():
    try:
        binder = application.main.solveProblem()
        return jsonify(binder)
    except:
        raise Exception('There has been an error in back-end calculation')

if __name__ == '__main__':
    APP.run(use_reloader=True, port=5000, threaded=True)
