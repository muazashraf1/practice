import React, { useCallback, useState } from 'react'
import UseEffectHook from './UseEffectHook'
import UseRefHook from './UseRefHook'
import UseMemoHook from './UseMemoHook'
import UseCallBackHook from './UseCallBackHook'

function App() {
  const [adjective, setAdjective] = useState("good")

  const [count, setCount] = useState(0)

  const getAdjective = useCallback(() => {
    return "Another"
  }, [])
  return (
    <div>
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}


      <UseCallBackHook adjective={"good"} getAdjective={getAdjective} />

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h1>Count : {count}</h1>
    </div>
  )
}

export default App