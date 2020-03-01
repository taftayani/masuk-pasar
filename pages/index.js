import Head from '../component/Head'
import React from 'react'

export default class index extends React.Component {

  render() {
    return (
      <div>
        <Head />
        <nav class="navbar navbar-expand-lg navbar-light bg-light"
          style={{ paddingTop: '20px', paddingBottom: '20px', boxShadow: '4px 4px 10px #DBD4D4' }}>
          <div className="container">
            <a class="navbar-brand" style={{ marginLeft: 'auto', marginRight: 'auto' }} href="#"><img src="/static/Icon/icon.svg" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="container bg-login">
            <div className="row">
              <div className="card-form">
                <div className="container">
                  <h1 className="heading-login">Silakan Masuk</h1>
                </div>
                <div className="container" style={{ paddingLeft: '30px',paddingTop:'20px'}}>
                  <div>
                    <div className="row">
                      <label className="login-label">Username</label>
                    </div>
                    <div className="row">
                      <input className="input-login" placeholder="Masukan Username" />
                    </div>

                    <div style={{marginTop:'30px'}}>
                      <div className="row">
                        <label className="login-label">Password</label>
                      </div>
                      <div className="row">
                        <input className="input-login" placeholder="Password Anda" />
                      </div>
                    </div>

                  </div>
                </div>

                <div className="container">
                   <div className="row">
                   <button className="btn-login" onClick={()=>window.location = "/dashboard/masukpasar"}>Masuk</button>
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