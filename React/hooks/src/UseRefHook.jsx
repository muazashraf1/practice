import React, { useEffect, useRef, useState } from 'react'

function UseRefHook() {

    // useRef aik mutable container hai jo value ko store karta hai aur value change hone par component ko re-render nahi karta.

    // syntax
    // const myRef = useRef(initialValue);

    // const myRef = useRef(10)

    // // console.log(myRef);

    // const [count, setCount] = useState(0)

    // const handleIncrement = () => {
    //     myRef.current++

    //     console.log("My increasing ref:", myRef.current);
    // }




    // use cases of useRef
    // 1-input ko focus krna
    // const inpRef = useRef()

    // const focusInput = () => {
    //     inpRef.current.focus()
    // }

    // 2-reder the counts 


    // const [count, setCount] = useState(0);

    // const renderCount = useRef(0);

    // useEffect(() => {
    //     renderCount.current += 1;
    // });


    return (
        <>
            {/* 
            <p>Count : {count}</p>

        <button onClick={handleIncrement}>
            Ref Increment
        </button> */}


            {/* usecases of useRef */}
            {/* 1- input focus */}

            {/* <input
                type="text"
                ref={inpRef}
            />

            <button onClick={focusInput}>
                Focus input
            </button> */}

            {/* 2- render the count


            {/* <h1>Count: {count}</h1>

            <h2>Renders: {renderCount.current}</h2>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button> */}

        </>
    )
}

export default UseRefHook