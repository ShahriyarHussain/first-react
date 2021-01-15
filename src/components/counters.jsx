import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    styles = {
        fontWeight: "bold"
    };

    render() { 
        return (                    
            <div> 
                <button onClick={this.props.onReset} style= {this.styles} className="btn btn-warning btn-sm m-2">
                    Reset All
                </button>
                {this.props.counters.map(counter => (                     
                <Counter key={counter.id} 
                onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}
                counter={counter}>
                    <h5><strong>Item {counter.id}</strong></h5>
                </Counter>))}
                
            </div>
        );
    }
}
 
export default Counters;