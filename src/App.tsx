import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./components/Root";
import EmployeeInformation from "./components/EmployeeInformation";
import Dashboard from "./components/Dashboard";
import Payroll from "./components/Payroll";
import Attendance from "./components/Attendance";
import Report from "./components/Report";
import Settings from "./components/Settings";



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/dashboard" element={<Dashboard/>} />

      <Route path="/employee_information" element={<EmployeeInformation/>}>

      </Route>

      <Route path="/payroll" element={<Payroll/>}>

      </Route>

      <Route path="/attendance" element={<Attendance/>}>

      </Route>

      <Route path="/report" element={<Report/>}>

      </Route>

      <Route path="/settings" element={<Settings/>}>

      </Route>

    </Route>
  )
);
