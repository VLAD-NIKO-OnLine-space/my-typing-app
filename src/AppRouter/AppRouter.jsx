import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from '../pages/MainPage/MainPage';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/typingapp' element={<MainPage/>}></Route>
            <Route path="*" element={<Navigate to="/typingapp" replace />}/>
        </Routes>
    );
};

export default AppRouter;