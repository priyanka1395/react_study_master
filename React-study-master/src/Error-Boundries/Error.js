import React from 'react'


class error extends React.Component{
    constructor(){
        super();
        this.state = {
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }
    render(){
        if(this.state.hasError){
            return <h2>Some Error </h2>
    }
    return this.props.children
}
}
export default error