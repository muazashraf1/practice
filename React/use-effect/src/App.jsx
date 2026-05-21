// import React, { useEffect, useState } from 'react'

// function App() {

//   const [users, setUsers] = useState([]);
//   useEffect(() => {

//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setUsers(data));

//   }, []);


//   return (
//     <div>
//       {users.map(user => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'

// function App() {

//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log("This will run on every cycle");
//   })


//   useEffect(() => {
//     console.log("This will on just mount");
//   }, [])

//   useEffect(() => {
//     console.log("This will run on mount and updation");
//   }, [count])
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Changing!!!</button>
//       <p>{count}</p>
//     </div>
//   )
// }

// export default App




import React, { useEffect, useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    console.log("This will run on every lifecycle");
  })

  useEffect(() => {
    console.log("This effect will run on mount");
  }, [])


  useEffect(() => {
    console.log("Fetching.....");

    const fetchProducts = () => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setData(json))
    }

    fetchProducts()
  }, [])



  useEffect(() => {
    console.log("This effect will be run on mount and updation cycle");
  }, [count], [toggle])
  return (
    <div>
      
    </div>
  )
}

export default App