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
    axios.post("http://localhost:8080/Login",user)
      .then(res=> {alert(res.data.message)
        setLoginUser(res.data.user)
        history.push("/")
      })
  }

  return (
    <div className="container">
      <div className="row d-flex p-2" style={{ backgroundColor: "gray" }}>
        <div className="self-center mb-6 text-xl" align="center" style={{padding:"40px","font-size":"20px","font-weight":"bold"}}>
            Login To Your Account
        </div>
      
        <div className= "col s12" style={{padding:"10px"}}>
          <div className="submit-form">
            <div>
              <div className="form-group row" style={{padding:"10px","font-size":"16px","font-weight":"bold"}}>
                <label htmlFor="username">Username </label>
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

              <div className="form-group row" style={{padding:"10px","font-size":"16px","font-weight":"bold"}}>
                <label htmlFor="password">Password </label>
                <input
                  type="text"
                  className="form-control"
                  style={{'margin-left':"5px"}}
                  name="password"
                  required
                  value={user.value}
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
