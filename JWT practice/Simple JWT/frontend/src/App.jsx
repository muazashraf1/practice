import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() {

  const [page, setPage] = useState("register")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState(localStorage.getItem("token") || "")
  const [profile, setProfile] = useState("");


  const handleRegister = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register/", {
        username,
        password,
      })

      alert("Registered! Now login.");
      setPage('login')
    } catch (err) {
      alert("Register failed")
    }
  }


  const handleLogin = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/api/token/', {
        username,
        password,
      });

      localStorage.setItem("token", res.data.access)
      setToken(res.data.access)
      alert("login success")
      setPage("profile")
    } catch (err) {
      alert("Failed to login!")
    }
  }


  const getProfile = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/protected/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setProfile(res.data.message)
    } catch (err) {
      alert("Unauthorized!")
    }
  }


  useEffect(() => {
    const storedToken = localStorage.getItem("token")

    if(storedToken) {
      setToken(storedToken)
      setPage("profile")
    }
  }, [])


  return (
    <div style={{ padding: "50px" }}>
      <h2>JWT AUTH APP</h2>

      {/* Register page */}
      {page === "register" && (
        <>
          <h3>Register</h3>
          <input placeholder='username' onChange={(e) => setUsername(e.target.value)} type="text" />
          <input placeholder='password' onChange={(e) => setPassword(e.target.value)} type="password" />

          <br />
          <button onClick={handleRegister}>Register</button>
          <p onClick={() => setPage('login')}>Login</p>
        </>
      )}

      {/* Login  */}

      {page === "login" && (
        <>
          <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
          <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />

          <button onClick={handleLogin}>Login</button>
          <p onClick={() => setPage("register")}>Go to Register</p>
        </>
      )}

      {/* profile */}

      {page === "profile" && (
        <>
          <h3>Profile page</h3>
          <button onClick={getProfile}>Load Profile</button>
          <p>{profile}</p>
        </>
      )}

    </div>
  )
}

export default App