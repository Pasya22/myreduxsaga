import React from "react";
import { Routes, Route, BrowserRouter,Navigate} from "react-router-dom";
// import CalculatorProps from "../Components/CalculatorProps/CalculatorProps";
// import Employee from "../Components/EmployeeComponent/Employee";

import Sidebar from "../Components/Template/Sidebar";
// import UserComponent from "../Components/UserComponent/UserComponent";
import Home from "../Components/Home/Home";
import Header from "../Components/Template/Header";
import UserRedux from "../Redux/Pages/UserRedux";
// import AddUserRedux from "../Components/UserComponent/AddUserRedux";
// import EditUserRedux from "../Components/UserComponent/EditUserRedux";
import ReqLogin from "../Components/Form/ReqLogin";
import LogoutComponent from "../Components/Button/LogoutComponent";

const RoutesPath = () => {
    return(
        <BrowserRouter>
            <Header />
            <Sidebar />
            
            <Routes>
                <Route path="/login" element={<ReqLogin />}  />
                <Route path="/" element={<Home />} />
                <Route path="/userredux" element={<PrivateRoute> <UserRedux /></PrivateRoute>} />
                <Route path="/logout" element={<PrivateRoute> <LogoutComponent /></PrivateRoute>} />
                {/* <Route path="/adduser" element={<PrivateRoute><AddUserRedux /></PrivateRoute>} /> */}
                {/* <Route path="/edit" element={<PrivateRoute><EditUserRedux /></PrivateRoute>} /> */}
                {/* <Route path="/calculator" element={<PrivateRoute><CalculatorProps/></PrivateRoute>} /> */}
                {/* <Route path="/employee" element={<PrivateRoute><Employee /></PrivateRoute>} /> */}
                {/* <Route path="/user" element={<PrivateRoute> <UserComponent /> </PrivateRoute>} /> */}
                {/* <Link to="/logout" onClick={logout}>Logout</Link> */}

            </Routes>
        </BrowserRouter>
    )
}

// untuk membuat private routes
const PrivateRoute = (props) => {
    const token = localStorage.getItem('token');

    // console.log(token)
    if(!token) return <Navigate to="/login" />
    return props.children
}
// const logout = () => {
//     localStorage.removeItem('token');
//     Navigate("/login");
// }

export default RoutesPath