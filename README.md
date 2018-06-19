# Web-based application for supply network optimization

Application for solving optimization problems in the web-based supply network management system for big enterprises of production fruit products.

## Getting Started

#### For Development use :

###### Run server:

```
export FLASK_APP=server.py;
export FLASK_ENV=development;
flask run;

```

###### For hot reloading:
```
nodemon --watch ../client/build --exec python server.py
cd client/ && yarn watch
```

##### For Production use :

Run server:
```

python server.py

```
#### Running the tests

Tests was created using:

* PyTest
* Jest

At folder application/ run:

```
pytest
```

At folder client run
```
yarn test
```


## Built With

* create-react-app
* Python
* Flask
* Material-UI
* Redux
* Redux Saga

## Authors

* **Volodymyr Kovalchuk**

