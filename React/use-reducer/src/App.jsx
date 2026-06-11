// import React, { useReducer } from 'react'

// const initailState = {
//   count: 0,
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + action.payload
//       }

//     case "DECREMENT":
//       return {
//         count: state.count - action.payload
//       }

//     default:
//       return state
//   }
// }

// function App() {

//   const [state, dispatch] = useReducer(
//     reducer,
//     initailState
//   )

//   return (
//     <div>
//       <h1>Count : {state.count}</h1>

//       <button onClick={() => dispatch({ type: "INCREMENT", payload : 5 })}>INCREMENT</button>
//       <button onClick={() => dispatch({ type: "DECREMENT", payload : 5 })}>DECREMENT</button>
//     </div>
//   )
// }

// export default App




// state → current state
// dispatch → action bhejta hai reducer ko
// reducer → function jo state update karta hai
// initialState → starting value



// Reducer ko hamesha 2 cheezen milti hain.

// 1-
// state
// Current state

// 2-
// action
// Dispatch se aane wala object



// import React, { useEffect, useReducer } from 'react'


// const initailState = {
//   products: [],
//   cart: [],
//   theme: "dark"
// }


// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_PRODUCTS":
//       state.products = action.payload
//     default:
//       return state;
//   }
// }

// function App() {

//   const [state, dispatch] = useReducer(reducer, initailState)

//   const fetchProduct = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch({ type: "FETCH_PRODUCT", payload: data })
//       })
//   }


//   useEffect(() => {
//     fetchProduct()
//   }, [])


//   console.log(state);
  

//   return (
//     <div>
//       <h1>Products</h1>

//       {state?.products.map((prd) => (
//         <li>{prd.title}</li>
//       ))}
//     </div>
//   )
// }

// export default App