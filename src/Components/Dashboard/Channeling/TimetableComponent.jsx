import React, { Component } from 'react';

class TimetableComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }

        this.gotoEmpTimetables = this.gotoEmpTimetables.bind(this);
        this.gotoDocTimetables = this.gotoDocTimetables.bind(this);
    }

    gotoEmpTimetables(){
        this.props.history.push('/usertimetables');
    }

    gotoDocTimetables(){
        this.props.history.push('/doctortimetables');
    }


    render() {
        return (
            <div>
                <center><h2>Welcome to Timetables Section</h2></center>
                
                <br></br>
                <br></br>
                <table align = "center" cellPadding = "20px">
                    <td>
                        <button className="btn btn-primary" onClick={this.gotoEmpTimetables}> Employee TimeTables </button>
                    </td>
                    <td>
                        <button className="btn btn-primary" onClick={this.gotoDocTimetables}> Doctor TimeTables </button>
                    </td>
                </table>

            </div>
        );
    }
}

export default TimetableComponent;