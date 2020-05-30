import React from 'react';

const updatedComponent = (OriginalComponent,incrementNumber)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }
        hoverText = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }
        render(){
            return <OriginalComponent count ={this.state.count} incrementCount={this.hoverText} {...this.props}/>
        }
    }
    return NewComponent
}
export default updatedComponent