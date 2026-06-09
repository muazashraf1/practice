import React, { useState } from 'react'

function App() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState({})

  const { email, password } = formData
  console.log("Email:", email);
  console.log("Password:", password);

  const handleValidation = () => {
    let errs = {}

    if (!email) {
      errs.email = "Please email"
    }

    if (!password) {
      errs.password = "Please password"
    }


    setError(errs)

    return Object.keys(errs).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    console.log("Value:", value);


    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    const isValid = handleValidation()

    if (isValid) {
      console.log("Data has submitted");
    } else {
      console.log("Data is note submitted");
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name="email"
          value={email}
          placeholder='Email'
          onChange={handleChange}
        />

        <br />


        {error.email && <span>{error.email}</span>}
      </div>

      <div>
        <input
          type="text"
          name="password"
          value={password}
          placeholder='Password'
          onChange={handleChange}
        />

        <br />
        

        {error.password && <span>{error.password}</span>}
      </div>

      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App