import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Home from './Home/Home';
import NewPlant from './NewPlant/NewPlant';
import Results from './Results/Results';
import LogOut from '../../components/Authentication/LogOut/LogOut';



class Entepreneur extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path="/entepreneur" exact component={Home} />
                <Route path="/entepreneur/add_plant" component={NewPlant} />
                <Route path="/entepreneur/solve_problem" component={Results} />
                <Route path="/entepreneur/logout" component={LogOut} />
                <Redirect to="/" />
            </Switch>
        );
        return <div>{routes}</div>;
    }
}

export default withRouter(Entepreneur);
