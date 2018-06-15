"""This module does run the server."""
import os

from flask import Flask, jsonify, send_from_directory

from calculation_for_ui import get_counts_farmers_clients
from connector_database import (I, R, E)
import main

APP = Flask(__name__, static_folder='../client/build')

# Serve React App

@APP.route('/', defaults={'path': ''})
@APP.route('/<path:path>')
def serve(path):
    """
    catch all routes, test if the path is a file => send file => else send
    the index.html
    """
    if path != "" and os.path.exists("../client/build/" + path):
        return send_from_directory('../client/build', path)
    return send_from_directory('../client/build', 'index.html')


@APP.route("/api/solve", methods=["GET"])
def calculate():
    try:
        binder = main.solve_problem()
        return jsonify(binder)
    except:
        raise Exception('There has been an error in back-end calculation')


@APP.route("/api/counts", methods=["GET"])
def get_counts():
    try:
        binder = get_counts_farmers_clients(I, R, E)
        return jsonify(binder)
    except:
        raise Exception('There has been an error with DB in back-end exec')


if __name__ == '__main__':
    APP.run(use_reloader=True, port=5000, threaded=True)
