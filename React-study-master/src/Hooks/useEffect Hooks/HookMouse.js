import React,{useState,useEffect} from 'react'

//In This example we are doing componentDidMount(This method gets invoked immediately after component has mounted.Initialization that requires DOM nodes should be in here.
//If you need to load data from remote endpoint, you should get data in here.) functionality using useState Hooks


function HookMouse(){
    const [x, setX] = useState(0);
    const [y,setY] = useState(0);
    const loggedPosition = e=>{
        console.log('Mosue log')
        setX(e.clientX);
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('use effect hook called');
        window.addEventListener('mouseover',loggedPosition)
        //Here we are returning the window.removeEventListner for the cleanup process of MouseContainer component.
        return ()=>{
            console.log('Component unmountin code')
            window.removeEventListener('mouseover',loggedPosition)
        }
    },[])
    //Here [] is for the only print console for logPosition
    return(
        <div>
            Hooks x-{x}==y{y}
        </div>
    )
}
export default HookMouse