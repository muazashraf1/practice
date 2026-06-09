import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    //     Side Effect kya hota hai ?
    //     React component ka main kaam UI render karna hota hai.Lekin kabhi kabhi hume render ke ilawa bhi kuch kaam karne hote hain, jaise:
    // API se data fetch karna
    // Console log chalana
    // Timer set karna
    // LocalStorage use karna
    // Document title change karna
    // Event listeners add / remove karna

    // Ye sab side effects kehlate hain.


    // useEffect ka Syntax

    // Isme 2 cheezen hoti hain:
    // Callback function → jo effect chalata hai
    // Dependency array → decide karta hai effect kab chalega

    
    const  [count, setCount] = useState(0)
    
    useEffect(() => {
        console.log("Redering!");
    }, [count])


    return (

        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default UseEffectHook