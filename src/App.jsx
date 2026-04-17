import { useState } from "react";
import ganpati from "./assets/ganpati.jpg";
import "./App.css";
import axios from "axios";

function App() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/users", value);
      console.log(res, "Response:", res.data);
    } catch (err) {
      console.log("Error:", err);
    }
    if (!value.email || !value.password) {
      alert("Please fill all fields");
      return;
    }
  };

  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };

  return (
    <>
      <div className="main-box">
        <div className="left-side">
          <img src={ganpati} alt="banner-image" />
        </div>
        <div className="right-side">
          <div className="input-box">
            <h3>Login to Babita's account</h3>
            <input
              className="input"
              type="text"
              onChange={handleChange}
              name="email"
              value={value.email}
              placeholder="   Enter your email"
            />
            <input
              className="input-pwd"
              onChange={handleChange}
              name="password"
              type="password"
              value={value.password}
            />
            <button className="primary-btn" onClick={handleLogin}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
