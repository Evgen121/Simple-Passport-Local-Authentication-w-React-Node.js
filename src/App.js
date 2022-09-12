import React, {useState} from "react";
import './App.css';
import axios from "axios";

function App() {
  const [usernameRegister, setUsernameRegister]= useState('')
  const [passwordeRegister, setPasswordeRegister]= useState('')
  const [usernameLogin, setUsernameLogin]=useState('')
  const [passwordLogin, setPasswordLogin]=useState('')
  const [data,setData]= useState(null)

  const register =()=>{
    axios({
      method:'POST',
      data:{
        username:usernameRegister,
        password:passwordeRegister
      },
      withCredentails: true,
      url: "http://localhost:4000/register"
    }).then((res)=> console.log(res))
   
  }
  const login =()=>{
    axios({
      method:'POST',
      data:{
        username:usernameLogin,
        password:passwordLogin
      },
      withCredentails: true,
      url: "http://localhost:4000/login"
    }).then((res)=> console.log(res))
  }
  const getMe =()=>{
    axios({
      method:'GET',
       withCredentails: true,
      url: "http://localhost:4000/user"
    }).then((res)=> setData(res.data))
  }
  


  return (
    <div className="App">
      <div>
     <h1>Register</h1>
     <input placeholder="username" onChange={e=>setUsernameRegister(e.target.value)}/>
     <input placeholder="password" onChange={e=>setPasswordeRegister(e.target.value)}/>
     <button onClick={register}>Sumbit</button>
    </div>
      <div>
     <h1>login</h1>
     <input placeholder="username"onChange={e=>setUsernameLogin(e.target.value)}/>
     <input placeholder="password"onChange={e=>setPasswordLogin(e.target.value)}/>
     <button onClick={login}>Sumbit</button>
    </div>
      <div>
     <h1>Get user</h1>
     
     <button onClick={getMe}>Sumbit</button>
     { data ? <h1> Welkome {data.username} </h1> : null }
    </div>
    </div>
  );
}

export default App;
