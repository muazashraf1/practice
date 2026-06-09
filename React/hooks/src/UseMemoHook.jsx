import React, { useEffect, useMemo, useState } from 'react'

function UseMemoHook() {

    // const [count, setCount] = useState(0)

    // const [name, setName] = useState("")

    // const doubleCount = count * 2;

    // const expensiveCalculation = () => {
    //     console.log("Calculating...");
    //     let total = 0;
    //     for (let i = 0; i < 1000000000; i++) {
    //         total += i;
    //     }
    //     return total;
    // }
    // const result = expensiveCalculation()
    // console.log(result);

    // problem

    // useMemo Kya Hai?
    // Simple Definition:
    // useMemo kisi expensive calculation ka result memory mein save (memoize) karta hai aur sirf tab dobara calculate karta hai jab dependency change ho.

    //     const value = useMemo(() => {
    //   return calculation;
    // }, [dependencies]);


    const [count, setCount] = useState(0);
    const [name, setName] = useState("");


    const expensiveCalculation = (num) => {
        console.log("Heavy calculation is running....");
        for (let i = 0; i < 10000000; i++) { }

        return num * 2
    }

    const result = useMemo(() => {
        return expensiveCalculation(count)
    }, [count])

    console.log(result);
    



    return (
        <>
            {/* <h1>{doubleCount}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <p>Count : {count}</p>

            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
            /> */}


            <h1>Result : {result}</h1>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>

            <br />

            <input type="text" placeholder='Type Here' onChange={(e) => setName(e.target.value)} />
        </>
    )
}

export default UseMemoHook