import React from 'react';
class Bird extends React.Component{
    render(props){
        return(
            <div className="myBird">
                <h1>Hello World</h1>
                {this.props.color}
            </div>
        )
    }
}
export default Bird