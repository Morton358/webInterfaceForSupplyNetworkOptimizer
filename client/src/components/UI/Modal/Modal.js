import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Modal extends Component {
    shouldComponentUpdate(nextProps) {
        return (
            nextProps.open !== this.props.open ||
            nextProps.children !== this.props.children
        );
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.props.close}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {"Error occured"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {this.props.errorMsg}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.close} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
export default Modal;
