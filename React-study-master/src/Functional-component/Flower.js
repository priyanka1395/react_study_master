import React from 'react';

const flower =(props)=>{
    console.log(props)
    return(
        <div>
            {props.name}
            {props.children} 
        </div>
    )
}
export default flower