import React from 'react';

function foodItem({item}){
    if(item==='Other'){
        throw new Error('Item Not Found!!')
    }
    return(
        <div>
            {item}
        </div>
        )
}
export default foodItem