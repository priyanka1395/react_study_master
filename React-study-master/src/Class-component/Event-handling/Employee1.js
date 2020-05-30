import React from 'react';

class emp1 extends React.Component{
    handleClick = ()=>{
        console.log('Hiiiiii')
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Click Me!!</button>
            </div>
        )
    }
}
export default emp1