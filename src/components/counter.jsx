import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
        tags: [],
    };

    styles = {
        fontWeight: "bold"
    };

    handleIncrement = () => {        
        this.setState({value: this.state.value + 1});        
    }

    handleDecrement = () => {        
        if (this.state.value === 0) return null;
        this.setState({value: this.state.value - 1});        
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p style={this.styles}>There Are No Tags!</p>;
        return <ul> {this.state.tags.map(tag => <li key = {tag}>{tag}</li>)} </ul>;
    }

    render() { 
        return (
            <React.Fragment>                  
                {this.props.children}              
                <span style={this.styles, {fontSize: 15}} className={this.getBadgeClasses()}>{this.formatCount()}</span>                
                <button onClick={this.handleIncrement} style={this.styles} className="btn btn-secondary btn-sm m-1">Add</button>
                <button onClick={this.handleDecrement} style={this.styles} className="btn btn-primary btn-sm m-1">Remove</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                <br></br>                
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.state;
        return count;        
    }
}
 
export default Counter;