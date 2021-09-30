import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Login = props => { 
  const history = useHistory();  
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  async function handleLogin(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(data => data.json())
  };

  const login = async e => {
    e.preventDefault();
    const token = await handleLogin({
        username,
        password
    });

    history.push("/home");
  }

  return (
    <div className="submit-form">
      <div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            required
            value={username}
            onChange={e => setUserName(e.target.value)}
            name="username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            password="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
          />
        </div>

        <button onClick={login} className="btn btn-success">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
