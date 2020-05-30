//Here we are implementing the functionality of componentWillUnmount(This is invoked immediately once component is unmounted and removed from DOM. Purpose of this method is to destroy & cleanup of values.
//You should not use setState() in this method as component will never be re-rendered.) using useeffect Hooks.
//Remember that when you unmount the your componment make sure cancel subscriptions and listners  
import React,{useffect,useState} from 'react';
import HookMouse from './HookMouse';
function MouseConatiner(){
    const [display,setDisplay] = useState(true);
    return(
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse/>}
        </div>
    )
}
export default MouseConatiner