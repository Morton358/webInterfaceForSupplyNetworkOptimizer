import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styles from './Home.module.css';

const home = () => (
    <div className={styles.container}>
        <Typography variant='display2'> Your Plants: </Typography>
        <div className={styles.paper}>
            <Paper elevation={4}>
                <Typography variant="headline">Plant № 0.</Typography>
                <Typography component="p">
                    Address: 50-155 Wrocław, Jana Ewangelisty Purkyniego 11
                </Typography>
            </Paper>
        </div>
    </div>
);

export default home;
