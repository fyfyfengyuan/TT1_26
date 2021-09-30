import React, {useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = ({setLoginUser}) => {
  const history = useHistory();
  const[user,setUser] = useState({
    name:"",
    password: "",
  });
  const handleChange = event => {
    const {name,value} = event.target.value;
    setUser({...user, [name]:value});
  };
  const login =()=>{
    axios.post("http://localhost:8000/Login",user)
      .then(res=> {alert(res.data.message)
        setLoginUser(res.data.user)
        history.push("/")
      })
  }
  // const [username, setUserName] = useState();
  // const [password, setPassword] = useState();

  // async function handleLogin(credentials) {
  //   return fetch('http://localhost:8080/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(credentials)
  //     })
  //       .then(data => data.json())
  // };

  // const login = () => {
  //   e.preventDefault();
  //   const token = await handleLogin({
  //       username,
  //       password
  //   });

  //   history.push("/");
  // }

  return (
    <div className="container">
      <div className="d-flex p-2">
        <div className="self-center mb-6 text-xl font-light text-gray-600">
            Login To Your Account
        </div>

        <div className= "col s12" style={{padding:"20px"}}>
          <div className="submit-form">
            <div>
              <div className="form-group row" >
                <label htmlFor="username">Username  </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  required
                  value={user.username}
                  onChange={handleChange}
                  name="username"
                />
              </div>

              <div className="form-group row">
                <label htmlFor="password">Password  </label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  required
                  value={user.password}
                  onChange={handleChange}
                  name="password"
                />
              </div>

              <button onClick={login} className="btn btn-success">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


};

export default Login;
