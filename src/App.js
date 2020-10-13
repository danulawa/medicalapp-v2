import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//CSS Imports
import './App.css';
import './CSS/SignIn.css';
import './CSS/Chamathka.css';

//Constants File
import * as Const from './Constants';

//Layouts Imports
import DashboardLayout from './Layouts/DashboardLayout';
import OtherLayout from './Layouts/OtherLayout';

//Components Imports
import LoginComponent from './Components/Main & Login/LoginComponent';
import DashboardMain from './Components/Dashboard/1Main/DashboardMain';
import AllDrugsComponent from './Components/Dashboard/Pharmacy/AllDrugsComponent';
import ManageDrugComponent from './Components/Dashboard/Pharmacy/ManageDrugComponent';
import ViewDrugComponent from './Components/Dashboard/Pharmacy/ViewDrugComponent';
import ListUtilityComponent from './Components/Dashboard/Finance/ListUtilityComponent';
import AddUtilityComponent from './Components/Dashboard/Finance/AddUtilityComponent';
import UpdateUltilityComponent from './Components/Dashboard/Finance/UpdateUltilityComponent';
import UtilityBillComponent from './Components/Dashboard/Finance/UtilityBillComponent';
import PrintDetailsComponent from './Components/Dashboard/OPD/PrintDetailsComponent';
import UpdateEquipmentComponent from './Components/Dashboard/OPD/UpdateEquipmentComponent';
import CreateEquipmentCompenent from './Components/Dashboard/OPD/CreateEquipmentCompenent';
import ListEquipmentComponent from './Components/Dashboard/OPD/ListEquipmentComponent';
import ListPatientComponent from './Components/Dashboard/ExternalUser/ListPatientComponent';
import CreatePatientComponent from './Components/Dashboard/ExternalUser/CreatePatientComponent';
import UpdatePatientComponent from './Components/Dashboard/ExternalUser/UpdatePatientComponent';

import createLabComponent from './Components/Dashboard/Laboratory/createLabComponent';
import LabReportComponent from './Components/Dashboard/Laboratory/LabReportComponent';
import UpdateLabComponent from './Components/Dashboard/Laboratory/UpdateLabComponent';
import ManagePaymentComponent from './Components/Dashboard/Pharmacy/ManagePaymentComponent';
import AllPaymentsComponent from './Components/Dashboard/Pharmacy/AllPaymentsComponent';

import TimetableComponent from './Components/Dashboard/Channeling/TimetableComponent';
import AdminControlTimeTables from './Components/Dashboard/Channeling/AdminControlTimeTables';
import ShowTimetableComponent from './Components/Dashboard/Channeling/ShowTimetableComponent';
import ShowDoctorTimetableComponent from './Components/Dashboard/Channeling/ShowDoctorTimetableComponent';
import UserShowTimeTables from './Components/Dashboard/Channeling/UserShowTimeTables';
import DoctorShowTimeTables from './Components/Dashboard/Channeling/DoctorShowTimeTables';
import UpdateTimetableComponent from './Components/Dashboard/Channeling/UpdateTimetableComponent';
import UpdateDoctorTimetableComponents from './Components/Dashboard/Channeling/UpdateDoctorTimetableComponents';
import UserListNotificationComponent from './Components/Dashboard/Channeling/UserListNotificationComponent';

import ListNotificationComponent from './Components/Dashboard/Channeling/ListNotificationComponent';
import CreateNotificationComponent from './Components/Dashboard/Channeling/CreateNotificationComponent';
import UpdateNotificationComponent from './Components/Dashboard/Channeling/UpdateNotificationComponent';
import ViewNotificationComponent from './Components/Dashboard/Channeling/ViewNotificationComponent';

import ListEmployeeComponent from './Components/Dashboard/InternalUser/ListEmployeeComponent';
import CreateEmployeeComponent from './Components/Dashboard/InternalUser/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/Dashboard/InternalUser/UpdateEmployeeComponent';
import ViewEmployeeComponent from './Components/Dashboard/InternalUser/ViewEmployeeComponent';

import ListDoctorComponent from './Components/Dashboard/InternalUser/ListDoctorComponent';
import CreateDoctorComponent from './Components/Dashboard/InternalUser/CreateDoctorComponent';
import ViewDoctorComponent from './Components/Dashboard/InternalUser/ViewDoctorComponent';
import UpdateDoctorComponent from './Components/Dashboard/InternalUser/UpdateDoctorComponent';

const AppRoute =  ({component:Component, layout:Layout, ...rest}) => (
  <Route {...rest} render = {props =>(
    <Layout><Component {...props}></Component></Layout>
  )}></Route>
)

function App() {
  return (
    <Router>
      <AppRoute path = "/" exact layout = {OtherLayout} component = {LoginComponent} />
      <AppRoute path = {Const.mainDashboard} layout = {DashboardLayout} component = {DashboardMain} />

      <AppRoute path = "/pharmacy/all-drugs" layout = {DashboardLayout} component = {AllDrugsComponent} />
      <AppRoute path = "/pharmacy/manage-drug/:drugId" layout = {DashboardLayout} component = {ManageDrugComponent} />
      <AppRoute path = "/pharmacy/view-drug/:drugId" layout = {DashboardLayout} component = {ViewDrugComponent} />
      <AppRoute path = "/pharmacy/add-payment" layout = {OtherLayout} component = {ManagePaymentComponent} />
      <AppRoute path = "/pharmacy/all-payments" layout = {DashboardLayout} component = {AllPaymentsComponent} />

      <AppRoute path = "/finance/all-utility" layout = {DashboardLayout} component = {ListUtilityComponent} />
      <AppRoute path = "/finance/add-utility" layout = {DashboardLayout} component = {AddUtilityComponent} />
      <AppRoute path = "/finance/update-utility/:id" layout = {DashboardLayout} component = {UpdateUltilityComponent} />
      <AppRoute path = "/finance/utility-bill" layout = {DashboardLayout} component = {UtilityBillComponent} />

      <AppRoute path = "/opd/equipment" layout = {DashboardLayout} component = {ListEquipmentComponent} />
      <AppRoute path = "/opd/add-equipment" layout = {DashboardLayout} component = {CreateEquipmentCompenent} />
      <AppRoute path = "/opd/update-equipment/:eqId" layout = {DashboardLayout} component = {UpdateEquipmentComponent} />
      <AppRoute path = "/opd/print-details/:eqId" layout = {OtherLayout} component = {PrintDetailsComponent} />

      <AppRoute path = "/extuser/patients" layout = {DashboardLayout} component = {ListPatientComponent} />
      <AppRoute path = "/extuser/add-patient" layout = {DashboardLayout} component = {CreatePatientComponent} />
      <AppRoute path = "/extuser/update-patient/:Id" layout = {DashboardLayout} component = {UpdatePatientComponent} />

      <AppRoute path = "/lab/labDetails" layout = {DashboardLayout} component = {createLabComponent} />
      <AppRoute path = "/lab/add-labDetails" layout = {DashboardLayout} component = {createLabComponent} />
      <AppRoute path = "/lab/lab-report" layout = {DashboardLayout} component = {LabReportComponent} />
      <AppRoute path = "/lab/update-lab/:labId" layout = {DashboardLayout} component = {UpdateLabComponent} />

      <AppRoute path = "/time" layout = {DashboardLayout} component = {TimetableComponent}></AppRoute>
      <AppRoute path = "/admin" layout = {DashboardLayout} component = {AdminControlTimeTables}></AppRoute>
      <AppRoute path = "/timetables" layout = {DashboardLayout} component = {ShowTimetableComponent}></AppRoute>
      <AppRoute path = "/Doctimetables" layout = {DashboardLayout} component = {ShowDoctorTimetableComponent}></AppRoute>
      <AppRoute path = "/usertimetables" layout = {DashboardLayout} component = {UserShowTimeTables}></AppRoute>
      <AppRoute path = "/doctortimetables" layout = {DashboardLayout} component = {DoctorShowTimeTables}></AppRoute>
      <AppRoute path = "/edit-timetables/:shiftID" layout = {DashboardLayout} component = {UpdateTimetableComponent}></AppRoute>
      <AppRoute path = "/edit-Doctimetables/:shiftID" layout = {DashboardLayout} component = {UpdateDoctorTimetableComponents}></AppRoute>
      <AppRoute path = "/user-notifications" layout = {DashboardLayout} component = {UserListNotificationComponent}></AppRoute>
      <AppRoute path = "/notifications" layout = {DashboardLayout} component = {ListNotificationComponent}></AppRoute>
      <AppRoute path = "/add-notification" layout = {DashboardLayout} component = {CreateNotificationComponent}></AppRoute>
      <AppRoute path = "/view-notification/:id" layout = {DashboardLayout} component = {ViewNotificationComponent}></AppRoute>
      <AppRoute path = "/update-notification/:id" layout = {DashboardLayout} component = {UpdateNotificationComponent}></AppRoute>

      <AppRoute path = "/intuser/employees" layout = {DashboardLayout} component = {ListEmployeeComponent} />
      <AppRoute path = "/intuser/add-employee" layout = {DashboardLayout} component = {CreateEmployeeComponent} />
      <AppRoute path = "/intuser/update-employee/:Id" layout = {DashboardLayout} component = {UpdateEmployeeComponent} />
      <AppRoute path = "/intuser/view-employee/:Id" layout = {DashboardLayout} component = {ViewEmployeeComponent} />

      <AppRoute path = "/doctors" layout = {DashboardLayout} component = {ListDoctorComponent}></AppRoute>
      <AppRoute path = "/add-doctor/:id" layout = {DashboardLayout} component = {CreateDoctorComponent}></AppRoute>
      <AppRoute path = "/view-doctor/:id" layout = {DashboardLayout} component = {ViewDoctorComponent}></AppRoute>
      <AppRoute path = "/update-doctor/:id" layout = {DashboardLayout} component = {UpdateDoctorComponent}></AppRoute>

      <AppRoute path = "/employees" layout = {DashboardLayout} component = {ListEmployeeComponent}></AppRoute>
      <AppRoute path = "/add-employee/:id" layout = {DashboardLayout} component = {CreateEmployeeComponent}></AppRoute>
      <AppRoute path = "/view-employee/:id" layout = {DashboardLayout} component = {ViewEmployeeComponent}></AppRoute>
      <AppRoute path = "/update-employee/:id" layout = {DashboardLayout} component = {UpdateEmployeeComponent}></AppRoute>

    </Router>
  );
}

export default App;
