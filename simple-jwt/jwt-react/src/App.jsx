// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [token, setToken] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/token/", {
//         username,
//         password,
//       });

//       console.log("Response:", response.data);

//       // Token save
//       setToken(response.data.access);
//       localStorage.setItem("token", response.data.access);

//       alert("Login Successful!");
//     } catch (error) {
//       console.error(error);
//       alert("Login Failed!");
//     }
//   };

//   const callProtectedAPI = async () => {
//     const storedToken = localStorage.getItem("token");
//     try {
//       const res = await axios.get("http://127.0.0.1:8000/api/protected/", {
//         headers: {
//           Authorization: `Bearer ${storedToken}`,
//         },
//       });
//       alert("Protected Data: " + JSON.stringify(res.data));
//     } catch (err) {
//       console.error(err);
//       alert("Access Denied!");
//     }
//   };

//   return (
//     <div style={{ padding: "50px" }}>
//       <h2>React JWT Demo</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={callProtectedAPI}>Call Protected API</button>
//       <p>Token: {token}</p>
//     </div>
//   );
// }

// export default App;










// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [page, setPage] = useState("login"); // login | register | profile

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [profile, setProfile] = useState("");


  useEffect(() => {
  const storedToken = localStorage.getItem("token");

  if (storedToken) {
    setToken(storedToken);
    setPage("profile"); // 🔥 auto login
  }
}, []);

  // 🔹 REGISTER
  const handleRegister = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/register/", {
        username,
        password,
      });
      alert("Registered! Now login.");
      setPage("login");
    } catch (err) {
      alert("Register Failed");
    }
  };

  // 🔹 LOGIN
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/token/", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.access);
      setToken(res.data.access);

      alert("Login Success");
      setPage("profile"); // 🔥 redirect to profile
    } catch (err) {
      alert("Login Failed");
    }
  };

  // 🔹 GET PROFILE (Protected)
  const getProfile = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/protected/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProfile(res.data.message);
    } catch (err) {
      alert("Unauthorized!");
    }
  };

  // 🔹 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setPage("login");
  };

  // 🔥 UI SWITCHING
  return (
    <div style={{ padding: "50px" }}>
      <h2>JWT Auth App</h2>

      {/* REGISTER PAGE */}
      {page === "register" && (
        <>
          <h3>Register</h3>
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleRegister}>Register</button>
          <p onClick={() => setPage("login")}>Go to Login</p>
        </>
      )}

      {/* LOGIN PAGE */}
      {page === "login" && (
        <>
          <h3>Login</h3>
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
          <p onClick={() => setPage("register")}>Go to Register</p>
        </>
      )}

      {/* PROFILE PAGE (Protected) */}
      {page === "profile" && token && (
        <>
          <h3>Profile Page 🔒</h3>
          <button onClick={getProfile}>Load Profile</button>
          <p>{profile}</p>
          {/* <p>{token}</p> */}
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;