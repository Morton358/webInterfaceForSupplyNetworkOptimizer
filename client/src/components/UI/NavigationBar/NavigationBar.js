import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationBar.module.css';

class NavigationBar extends Component {
    state = {
        showMenu: false
    };

    handleOpenNavBar = () => {
        this.setState(prevState => {
            return { showMenu: !prevState.showMenu };
        });
    };

    render() {
        return (
            <nav className={styles.main}>
                <span className={styles.toggle} onClick={this.handleOpenNavBar}>
                    <i className="fas fa-bars" />
                </span>
                <a href="/" className={styles.logo}>
                    Safe Your Money
                </a>
                <ul
                    className={
                        this.state.showMenu ? styles.items : styles.itemsHidden
                    }
                >
                    <li>
                        <NavLink
                            to="/entepreneur"
                            exact
                            className={styles.links}
                            activeStyle={{
                                borderBottom: '1px solid #fff',
                                padding: '6px'
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/entepreneur/add_plant"
                            exact
                            className={styles.links}
                            activeStyle={{
                                borderBottom: '1px solid #fff',
                                padding: '6px'
                            }}
                        >
                            New Plant
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/entepreneur/solve_problem"
                            exact
                            className={styles.links}
                            activeStyle={{
                                borderBottom: '1px solid #fff',
                                padding: '6px'
                            }}
                        >
                            Solve Problem
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/entepreneur/logout"
                            exact
                            className={styles.links}
                        >
                            Log out
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavigationBar;
