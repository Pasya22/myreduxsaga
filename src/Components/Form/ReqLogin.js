import React, { useState } from 'react'
import apiLogin from '../../Api/ApiLogin'
import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'


const ReqLogin = () => {
  // const MySwal = withReactContent(Swal)
  let nav = useNavigate();

  let [username, setUsername] = useState('')
  let [passwords, setPassword] = useState('')
  let [Message, setMessage] = useState([])

  const formSubmit = async () => {
    const result = await apiLogin.login(username, passwords)

    setMessage(result)
   
    /* 
      jika berhasil maka return result data menjadi result.data
      jika error maka return result data menjadi result.response.data
    */

    if(result.message !== 'Berhasil login'){
      // nav('/employee') // nav diambil dari userNavigate() di atas
      // setMessage("Berhasil login")
      // console.log(setMessage)
      // store token to local storage
      localStorage.setItem('token', result.token);
      // redirect to home
      nav('/')
    }else{
      if (Array.isArray(result.response.data.message)){

        setMessage(`${result.response.data.message.map((data) => {return (data , " \n")})}`)

      }else{
        
        setMessage(`${result.response.data.message}`)
      }
    }

  }

  return (
    <div>
      
      <div class="alert alert-primary" role="alert">{Message}</div>
      <form class="row g-3">
        <div class="col-12">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div class="col-12">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="passwords" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div class="text-center">
          <button type="button" class="btn btn-outline-primary mx-1" onClick={formSubmit}>Submit</button>
          <button type="reset" class="btn btn-outline-secondary mx-1">Reset</button>
        </div>
      </form>
    </div>
  )
}

export default ReqLogin
