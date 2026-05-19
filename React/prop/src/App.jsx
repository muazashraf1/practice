// import React from 'react'
// import Card from './Card'
// import Navbar from './Navbar'

// function App() {
//   return (
//     <>
//       <Navbar />
//       <h2>Student Data</h2>
//       <Card name="Muaz" age={19} course="web devloper"/>
//       <Card name="Ali" age={29} course="Graphics designing"/>
//     </>


//   )
// }

// export default App


import React from 'react'
import Layout1 from './components/Layout1'
import { LatestNewsData, LeadOfLeagend } from './data/data'

function App() {
  return (
    <div>
      <Layout1 heading="Latest News" data={LatestNewsData} />
      <Layout1 heading="Latest News" data={LeadOfLeagend} />
    </div>
  )
}

export default App