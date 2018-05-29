import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import styles from './App.module.css';
import headerImage from '../../assets/images/header.png';
import footerImage from '../../assets/images/footer.png';
import NavigationBar from '../../components/UI/NavigationBar/NavigationBar';
import Authentication from '../Authentication/Authentication';
import Entepreneur from '../Enterpreneur/Entepreneur';

// import Authentication from './Authentication/Authentication.js';
// import Entepreneur from './Entepreneur/Entepreneur';

class App extends Component {
    // handleSubmit = event => {// eslint-disable-line
    //     this.setState({ content: 'entepreneur' });
    // };
    render() {
        // let content = null;
        // if (this.state.content === 'authentication') {
        //     content = <Authentication submit={this.handleSubmit} />;
        // }
        // if (this.state.content === 'entepreneur') {
        //     content = <Entepreneur />;
        // }
        let routes = (
            <Switch>
                <Route path="/" exact component={Authentication} />
                <Route path="/entepreneur" component={Entepreneur} />
                <Redirect to="/" />
            </Switch>
        );

        return (
            <div className={styles.App}>
                <header className={styles.headerContainer}>
                    <img
                        src={headerImage}
                        className={styles.headerImage}
                        alt="header"
                    />
                </header>
                <NavigationBar />
                <div className={styles.content}>
                    {routes}
                </div>
                <footer className={styles.footerContainer}>
                    <img
                        src={footerImage}
                        className={styles.footerImage}
                        alt="footer"
                    />
                </footer>
            </div>
        );
    }
}

export default withRouter(App);
