import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

import styles from './NewPlant.module.css';

const materialStyle = {
    input: {
        width: '85%'
    }
}

class NewPlant extends Component {
    state = {
        country: '',
        city: ''
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className={styles.container}>
                <Typography variant="display2"> Add New Plant: </Typography>
                <form>
                    <Paper className={styles.fieldset}>
                        <Typography variant="headline">Address:</Typography>
                        <FormControl>
                            <InputLabel htmlFor="country_select">
                                Country:
                            </InputLabel>
                            <Select
                                style={materialStyle.input}
                                value={this.state.country}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'country',
                                    id: 'country_select'
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="Poland">Poland</MenuItem>
                                <MenuItem value="Ukraine">Ukraine</MenuItem>
                                <MenuItem value="England">England</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="city_select">
                                City/Village:
                            </InputLabel>
                            <Select
                                style={materialStyle.input}
                                value={this.state.city}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'city',
                                    id: 'city_select'
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="Wroclaw">Wroclaw</MenuItem>
                                <MenuItem value="Lviv">Lviv</MenuItem>
                                <MenuItem value="London">London</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            style={materialStyle.input}
                            required
                            id="postal_code"
                            label="Postal Code:"
                            placeholder="53-117"
                            margin="normal"
                            type="number"
                        />
                        <TextField
                            style={materialStyle.input}
                            required
                            id="street"
                            label="Street:"
                            placeholder="Jerzego Bajana"
                            margin="normal"
                            type="text"
                        />
                        <TextField
                            style={materialStyle.input}
                            required
                            id="building_number"
                            label="Building Number:"
                            placeholder="67"
                            margin="normal"
                            type="number"
                        />
                        <TextField
                            style={materialStyle.input}
                            required
                            id="phone"
                            label="Phone:"
                            placeholder="733-342-092"
                            margin="normal"
                            type="tel"
                        />
                    </Paper>
                </form>
            </div>
        );
    }
}

export default NewPlant;
