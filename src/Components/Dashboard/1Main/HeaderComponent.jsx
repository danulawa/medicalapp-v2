import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }

    }

    render() {
        return (
        <nav style = {{backgroundColor: "#1cbe7b"}} className = "navbar navbar-dark sticky-top flex-md-nowrap p-1">
            <a style = {{fontSize: "16px", paddingLeft:"10px", backgroundColor: "#1cbe7b"}} className = "navbar-brand col-md-31 mr-1" href="/dashboard">St. Anne's Medical Centre</a>
            <ul className ="navbar-nav px-3 w-25" style = {{backgroundColor: "#1cbe7b"}}>
              <li className = "nav-item text-nowrap">
                <a className = "nav-link" href="/" style = {{textAlign:"right"}}>Sign out</a>
              </li>
            </ul>
        </nav>
        );
    }
}

export default HeaderComponent;