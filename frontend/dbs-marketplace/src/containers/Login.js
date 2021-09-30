import React, {useState} from "react";

const Login = props => {
  const initialUserState = {
    username:"",
    password:"",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { username, value } = event.target; // get the name and value of the target and update with new name/id
    setUser({ ...user, [username]: value });
  };

  const login = () => {
    props.login(user) //function passed in from app.js async login
    props.history.push('/'); // go back to home
  }

  return (
    <div className="submit-form">
      <div>
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={user.username}
            onChange={handleInputChange}
            name="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            password="password"
            required
            value={user.password}
            onChange={handleInputChange}
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
