import React from  'react';
const shop = (props)=>{
    console.log(props);
    return(
        <div>
            Our Shop name is {props.name} and loction is {props.location} <br/>
            <b>{props.children}</b>
        </div>
    )
}
export default shop