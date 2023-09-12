import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<About/>}/>
            <Route exact path="/posts" element={<Posts/>}/>
            <Route exact path="/posts/:id" element={<PostIdPage/>}/>
        </Routes>
    );
};

export default AppRouter;