import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        fontWeight: "bold"
    };

    render() { 
        return (
            <React.Fragment>                  
                {this.props.children}              
                <span style={this.styles, {fontSize: 15}} className={this.getBadgeClasses()}>{this.formatCount()}</span>                
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    style={this.styles} 
                    className="btn btn-primary btn-sm m-1">
                        +
                </button>
                <button 
                    onClick={() => this.props.onDecrement(this.props.counter)} 
                    style={this.styles} 
                    className="btn btn-secondary btn-sm m-1">
                        -
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    style={this.styles}
                    className="btn btn-danger btn-sm m-2">
                        X
                </button>
                <br/>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter;
        return count;        
    }
}
 
export default Counter;