import { useState, useEffect, } from 'react';
import {useRouter} from "next/router"
import styles from '../styles/Login.module.css';
const Login = () => {
  const navigate =useRouter()
  const [userDetail, setuserDetail] = useState({
    username: '',
    password: '',
  });
  const { username, password } = userDetail;
  const handleLogin = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setuserDetail({ ...userDetail, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    const { username, password } = userDetail;
    fetch(`https://fakestoreapi.com/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
      localStorage.setItem("usertoken", JSON.stringify(res.token))
      navigate.push('/')
      });
  };
  console.log(userDetail);
  return (
    <div className={styles.main}>
      <h1>Login</h1>

      <div className={styles.container}>
        <form>
          <span>
            <h2>User Name</h2>
            <br />
            <input
              type="text"
              required
              value={username}
              onChange={(e) => handleLogin(e)}
              name="username"
              placeholder="Enter User Name"
            />
          </span>
          <br />
          <span>
            <h2>User Password</h2>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => handleLogin(e)}
              name="password"
              required
              maxLength="10"
              placeholder="Enter User Password"
            />
          </span>
          <br />
          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
