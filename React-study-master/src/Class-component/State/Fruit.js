import React from 'react';

class fruit extends React.Component {
    constructor() {
        super();
        this.state = {
            fruit_name: 'Apple',
            fruit_cost: 300,
            fruit_color:'Red'
        }
    }
    myStateChange = ()=>{
        this.setState({
            fruit_name: 'Orange',
            fruit_cost: 550,
            fruit_color:'orange'
        })
    }
    render() {
        return (
            <div>
                <p>FRUIT NAME:{this.state.fruit_name}</p>
                <p>FRUIT COLOR:{this.state.fruit_color}</p>
                <p>FRUIT COST:{this.state.fruit_cost}</p>
                <button onClick={this.myStateChange}>Click Me!</button>
            </div>
        )
    }
}
export default fruit