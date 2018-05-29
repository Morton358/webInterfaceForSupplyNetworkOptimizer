import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import style from './Plant.module.css';

const styles = theme => ({
    root: {
        width: '100%',
        height: 'auto',
        maxWidth: '900px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(20)
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(20),
        color: theme.palette.text.secondary
    },
    details: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    column: {
        flexBasis: '33.33%'
    }
});

const plant = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <div className={classes.column}>
                        <Typography className={classes.heading}>
                            Plant № {props.index}
                        </Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>
                            Address: 50-155 Wrocław, Jana Ewangelisty Purkyniego
                            11
                        </Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column}>
                        <Typography variant="title" align="left">
                            Total costs:
                            <input
                                className={style.black}
                                value={
                                    Number(props.totalCostPlant).toFixed(2) +
                                    '  zł.'
                                }
                                disabled
                            />
                        </Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography component="title" align="left">
                            Production costs:
                            <input
                                className={style.black}
                                value={
                                    Number(props.productionCost).toFixed(2) +
                                    '  zł.'
                                }
                                disabled
                            />
                        </Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography component="title" align="left">
                            Transportation costs:
                            <input
                                className={style.black}
                                value={
                                    Number(props.transpCost).toFixed(2) +
                                    '  zł.'
                                }
                                disabled
                            />
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
        </div>
    );
};

plant.propTypes = {
    classes: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    totalCostPlant: PropTypes.number.isRequired,
    productionCost: PropTypes.number.isRequired,
    transpCost: PropTypes.number.isRequired
};

export default withStyles(styles)(plant);
