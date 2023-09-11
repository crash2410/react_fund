import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
        </Routes>
    );
};

export default AppRouter;