import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../CSS/SignIn.css';

class OtherLayout extends Component {
    constructor(props){
        super(props)

        this.state = {

        }

    }

    render() {
        return (
        <React.Fragment>
            <Router>
                {this.props.children}
            </Router>
        </React.Fragment>
        );
    }
}

export default OtherLayout;