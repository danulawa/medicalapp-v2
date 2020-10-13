import React, { Component } from 'react';
import TimetableServices from "../../../Services/TimetableServices";
class UserShowTimeTables extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timetables: []
        }
    }


    componentDidMount(){
        TimetableServices.getTimetable().then((res) => {
            this.setState({timetables: res.data});
        });
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center"> Employee Timetable</h2>
                <br></br>
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th className="text-center"> Shift ID</th>
                                    <th className="text-center"> Monday</th>
                                    <th className="text-center"> Tuesday</th>
                                    <th className="text-center"> Wednesday</th>
                                    <th className="text-center"> Thursday</th>
                                    <th className="text-center"> Friday</th>
                                    <th className="text-center"> Saturday</th>
                                    <th className="text-center"> Sunday</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.timetables.map(
                                        timetable =>
                                        <tr key = {timetable.shiftID}>
                                             <td> {timetable.shiftID}</td>
                                             <td> {timetable.monday}</td>
                                             <td> {timetable.tuesday}</td>
                                             <td> {timetable.wednesday}</td>
                                             <td> {timetable.thursday}</td>
                                             <td> {timetable.friday}</td>
                                             <td> {timetable.saturday}</td>
                                             <td> {timetable.sunday}</td> 
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <br></br>
                        <br></br>
                        <br></br>
                        <table className = "table">
                            <tr>
                                <td>
                                    <center>
                                    <td>
                                        <b>
                                        Shift ID : 1
                                        </b>
                                    </td>
                                    
                                    <td>
                                        <b>
                                        Morning Shift (8.00 A.M - 12.00 P.M)
                                        </b>
                                    </td>
                                    </center>
                                </td>
                                <td>
                                    <center>
                                    <td>
                                        <b>
                                        Shift ID : 2
                                        </b>
                                    </td>
                                    <td>
                                        <b>
                                        Noon Shift (12.00 P.M - 4.00 P.M)
                                        </b>
                                    </td>
                                    </center>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <center>
                                    <td>
                                        <b>
                                        Shift ID : 3
                                        </b>
                                    </td>
                                    <td>
                                        <b>
                                        Evening Shift  ( 4.00 P.M - 8.00 P.M )
                                        </b>
                                    </td>
                                    </center>
                                </td>
                                <td>
                                    <center>
                                    <td>
                                        <b>
                                        Shift ID : 4
                                        </b>
                                    </td>
                                    <td>
                                        <b>
                                        Night Shift (8.00 P.M - 12.00 A.M)
                                        </b>
                                    </td>
                                    </center>
                                </td>
                            </tr>
                        </table>                   
                </div>
            </div>
        );
    }
}

export default UserShowTimeTables;