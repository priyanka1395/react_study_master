import React from 'react';

class Bird extends React.Component{
    constructor(){
        super();
        this.state = {
            bird_name :'Cuckoo',
            bird_color:'black',
            bird_legs : 2
        }
    }
    render(){
        return(
            <div>
                <p>Name of the Bird is <b>{this.state.bird_name}</b> it's color is {this.state.bird_color} and has 
                legs {this.state.bird_legs}</p>
            </div>
        )
    }
}
export default Bird