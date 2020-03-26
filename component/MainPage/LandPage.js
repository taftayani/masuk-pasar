import Head from '../component/Head'
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import API from '../component/API/api'
import {reactLocalStorage} from 'reactjs-localstorage'
import Navbar from '../component/Navbar'

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
       <Navbar/>
       <div className="container-fluid bg-land-page">
          <div className="container">
            <div className="row rows-card-land-page">
            <div className="col-xl-6 col-12" style={{paddingTop:'70px',paddingLeft:'30px'}}>
                <label className="head-land-page">Belanja Bahan Makanan Dengan Mudah ?</label>
                <label className="sub-head-land-page">MasukPasar, Semua ada !</label>
              </div>
              <div className="col-xl-6 col-12">
                <img src="/static/background/bg-1.svg" style={{width:'100%',marginTop:'20px'}}/>
              </div>
            
             
            </div>
          </div>
       </div>
{/* 
        <div className="container-fluid">
          <div className="container bg-login">
            <div className="row">
              <div className="card-form">
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
        </div> */}
      </div>
    )
  }
}
