import React, {useState,useEffect} from 'react';

//Remember that we can use the useEffect Hook for the functionality same as componentDidMount,componentWillMount,etc for data fetchning changing the title of the document we can use useEffect in the functional component.

//useEffect called every single rendered.

function HookCounter(){
    const [count, setCount] = useState(0);
    const[name,setName] = useState('');
    useEffect(()=>{
        console.log('updating with useEffect')
        document.title =`You Clicked ${count} times`
    },[count])
    return(
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count +1)}>Click {count} times</button>
        </div>
    )
}
export default HookCounter
