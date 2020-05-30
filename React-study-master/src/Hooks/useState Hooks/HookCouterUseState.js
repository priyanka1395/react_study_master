import React, {useState} from 'react'

function HookCounter() {

  const [count, setCount] = useState(0);
  const [disabled,setDisableStatus] = useState(false);

  const toggleDisable =()=> setDisableStatus(disabled)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
  <button onClick={toggleDisable}>{disabled?'enable':'disable'}</button>
    </div>
  )
}

export default HookCounter