import React, { Component } from 'react';

class NavBar extends Component {

    styles = {
        fontWeight: "bold"
    };
    
    render() { 
        return (
            <nav style={this.styles} className="navbar navbar-light bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Items Chosen: 
                    <span className="badge badge-pill badge-secondary m-1">{this.props.totalCounters}</span>
                </a>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;