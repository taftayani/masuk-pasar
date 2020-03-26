import Head from '../component/Head'
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import API from '../component/API/api'
import {reactLocalStorage} from 'reactjs-localstorage'

// function Login(){
//     const [login, setlogin] = useState('')

//     useEffect(() => {

//     })




// }
// export default Login

// without hooks
export default class Login extends React.Component {
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ paddingTop: '20px', paddingBottom: '20px', boxShadow: '4px 4px 10px #DBD4D4' }}>
          <div className="container">
            <a className="navbar-brand" style={{ marginLeft: 'auto', marginRight: 'auto' }} href="#"><img src="/static/Logo/logo.svg" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="container bg-login">
            <div className="row">
              <div className="col-12 col-xl-5 card-form">
                <div className="container">
                  <h1 className="heading-login">Silakan Masuk</h1>
                </div>
                <div className="container" style={{ paddingLeft: '30px', paddingTop: '20px' }}>
                  <div>
                    <div className="row">
                      <label className="login-label">Username</label>
                    </div>
                    <div className="row">
                      <input onChange={(e)=>{
                        this.setState({
                          Username:e.target.value
                        })
                      }} 
                      className="input-login" placeholder="Masukan Username" 
                      value={this.state.Username ? this.state.Username :''}/>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                      <div className="row">
                        <label className="login-label">Password</label>
                      </div>
                      <div className="row">
                        <input type="password"
                        onChange={(e)=>{
                          this.setState({
                            Password:e.target.value
                          })
                        }}  className="input-login" placeholder="Password Anda" />
                      </div>
                    </div>

                  </div>
                </div>

                <div className="container">
                  <div className="row">
                    <button className="btn-login" onClick={this.onChangePassword.bind(this)}>Masuk</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
