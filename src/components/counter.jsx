import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,        
    };

    styles = {
        fontWeight: "bold"
    };

    render() { 
        return (
            <React.Fragment>                
                <span style={this.styles, {fontSize: 15}} className="badge badge-primary m-3">{this.formatCount()}</span>                
                <button style={this.styles} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero': count;
    }
}
 
export default Counter;