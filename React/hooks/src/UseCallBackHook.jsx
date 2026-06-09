import React, { useState } from 'react'

function UseCallBackHook() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log("Clicked");
    };
    return (
        <>
            <button onClick={handleClick}>
                Click
            </button>
        </>
    )
}

export default UseCallBackHook