import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Button from 'material-ui/Button';

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
                    <Button> OK </Button>
                    <Button> CANCEL </Button>
                </CardActions>
                <CardText expandable={true}>
                    lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
        );
    }
}

export default Entepreneur;
