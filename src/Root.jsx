import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';
import './App.css' ;

const Root = ({ search, setSearch }) => { 

    return (
        <>
            <Header title="React JS Blog"/>
            <Nav search={search}
                 setSearch={setSearch}/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
};

export default Root;