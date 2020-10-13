import React, { Component } from 'react';
import * as Const from '../../Constants';

class MainViewComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }

    }

    render() {
        return (
        <div className = "col">
            <div className = "row">
                <div className = "top-main bg-medi">
                    <br/>
                    <h1 className = "text-center" style = {{color: "#fff"}}>Welcome!!<br/>St. Anne's Medical Centre Management System</h1>
                </div>
            </div>
            <div className = "row">
                <div className = "bottom-main">
                    <div className = "text-center">
                        <div className = "form-signin">
                            <br/> <br/>
                            <a href = "/login" className = {Const.mainButton}>Dashboard</a>
                            <br/> <br/>
                            <a href = "/website" className = {Const.mainButton}>Online Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default MainViewComponent;