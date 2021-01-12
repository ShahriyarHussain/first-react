import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        tags: [],
    };

    styles = {
        fontWeight: "bold"
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind.this;
    // }

    // handleIncrement = product => {
    //     console.log(product);
    //     this.setState({count: this.state.count + 1});
    //     // console.log("Increment", this );
    // }

    handleIncrement = () => {
        // console.log(product);
        this.setState({value: this.state.value + 1});
        // console.log("Increment", this );
    }

    handleDecrement = () => {
        console.log("Cannot go below 0");
        if (this.state.value === 0) return null;
        this.setState({value: this.state.value - 1});
        // console.log("Increment", this );
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
                <br></br>
                {/* {this.state.tags.length === 0 && "Please add some tags"}
                {this.renderTags()} */}
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
        // return count === 0 ? 'Zero': count;
    }
}
 
export default Counter;