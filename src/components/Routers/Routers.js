import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../../Views/Login/Login";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
