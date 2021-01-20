import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    styles = {
        fontWeight: "bold"
    };

    render() { 

        const {onDelete, onReset, onIncrement, onDecrement, counters} = this.props;

        return (                    
            <div> 
                <button onClick={onReset} style= {this.styles} className="btn btn-warning btn-sm m-2">
                    Reset All
                </button>
                {counters.map(counter => (                      
                <Counter key={counter.id} 
                onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement}
                counter={counter}>
                    <h5><strong>Item {counter.id}</strong></h5>
                </Counter>))}
                
            </div>
        );
    }
}
 
export default Counters;