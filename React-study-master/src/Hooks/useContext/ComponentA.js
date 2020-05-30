import React from 'react';
import {valueContext} from '../../App'
function ComponentA(){
    return(
        <div>
            <valueContext.Consumer>
                {
                    data=>{
                    return <h4>{data}</h4>
                    }
                }
            </valueContext.Consumer>
        </div>
    )
}
export default ComponentA