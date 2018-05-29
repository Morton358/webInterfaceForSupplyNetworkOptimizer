# Web-based application for supply network optimization

Application for solving optimization problems in the web-based supply network management system for big enterprises of production fruit products.

* [Demo]()

## Getting Started

##### For Development use :

Run server:

```
export FLASK_APP=server.py;
export FLASK_ENV=development;
flask run;

```

For hot reloading:
```
nodemon --watch ../client/build --exec python server.py
cd client/ && yarn watch
```

##### For Production use :

Run server:
```

python server.py

```
## Running the tests

Tests was created using:

* PyTest

At folder application/ run:

```
pytest
```

## Deployment

You can prepare and deploy project in Heroku with this commands:

## Built With

* create-react-app
* Python
* Flask
* Material-UI
* Redux
* Redux Saga

## Authors

* **Volodymyr Kovalchuk**

## License

This project is licensed under the MIT License 
