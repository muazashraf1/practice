// import React, { useCallback, useState } from 'react'

// function UseCallBackHook() {

//     const [count, setCount] = useState(0);

//     // const handleClick = useCallback(() => {
//     //     console.log("Hello MUaz");

//     // }, [])
//     const handleClick =() => {
//         console.log("Hello MUaz");

//     }

//     console.log("Component Rendered");
//     return (
//         <>
//             <h1>{count}</h1>

//             <button onClick={handleClick}>
//                 Say Hello
//             </button>

//             <button
//                 onClick={() => setCount(count + 1)}
//             >
//                 Increment
//             </button>
//         </>
//     )
// }

// export default UseCallBackHook

import React from 'react'
import { memo } from 'react';

function UseCallBackHook({ adjective, getAdjective }) {
    console.log("Nav bar is rendered!");

    return (
        <div>
            I am {adjective} Navbar.

            <button onClick={() => getAdjective()}>Change me</button>
        </div>
    )
}

export default memo(UseCallBackHook)