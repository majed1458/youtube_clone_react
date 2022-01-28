import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';

export default class SearchBar extends Component {
    state={
        searchterm:"",
    }
    
    HandelChange=(event)=>{
        console.log(event.target.value)
        this.setState({searchterm: event.target.value})
    }
    SubmitHandler=(event)=>{
        const {searchterm}= this.state;
        this.props.onSubmit(searchterm);
        event.preventDefault();
        
    }
    render() {
        return (
            <Paper elevation={3} style={{ padding: '1rem' }}>
                <form onSubmit={this.SubmitHandler} >
                    <TextField fullWidth label="search ..." onChange={this.HandelChange} />
                </form>
            </Paper>
      );
    }
}
