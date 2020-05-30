import React from 'react';

class car extends React.Component{
    constructor(){
        super();
        this.state = {
            car_name:'Balleno',
            car_color:'Red',
            car_price:340000
        }
    }
    handleCar = ()=>{
        this.setState({
            car_name:'Etios',
            car_color:'Blue',
            car_price:'400000'
        })
    }
    render(){
        return(
            <div>
                The Name of car is {this.state.car_name}, color is {this.state.car_color} and price is {this.state.car_price}<br/>
                <button onClick={this.handleCar}>Change Car</button>
            </div>
        )
    }
}
export default car