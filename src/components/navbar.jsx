import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Items Chosen: 
                    <span className="badge badge-pill badge-secondary m-1">{totalCounters}</span>
                </a>
            </div>
        </nav>
    )
};
 
export default NavBar;