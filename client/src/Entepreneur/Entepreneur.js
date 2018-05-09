import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Entepreneur extends Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title="Results"
                    subtitle="Total cost: "
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardActions>
                    <FlatButton label="OK" />
                    <FlatButton label="CANCEL" />
                </CardActions>
                <CardText expandable={true}>
                    lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
        );
    }
}

export default Entepreneur;
