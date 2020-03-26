import Head from '../component/Head'
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import API from '../component/API/api'
import {reactLocalStorage} from 'reactjs-localstorage'
import Login from '../component/login';


// function Login(){
//     const [login, setlogin] = useState('')

//     useEffect(() => {

//     })




// }
// export default Login

// without hooks
export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      Username: '',
      Password: ''
    }
  }

  onChangePassword(e) {
    e.preventDefault()
    Axios.post(API.LoginAdmin, {
        user_name: this.state.Username,
        password: this.state.Password
    }).then(response =>{
      console.log(response)
      reactLocalStorage.setObject('Admin_user',response)
    })
    window.location = "/dashboard/masukpasar"
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Head />
        <Login/>
      </div>
    )
  }
}
