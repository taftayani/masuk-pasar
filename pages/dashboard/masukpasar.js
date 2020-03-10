import Head from '../../component/Head'
import React from 'react'

export default class index extends React.Component {

    render() {
        return (
            <div>
                <Head />
                <nav class="navbar navbar-expand-lg navbar-light bg-light"
                    style={{ paddingTop: '20px', paddingBottom: '20px', boxShadow: '4px 4px 10px #DBD4D4' }}>
                    <div className="container">
                        <a class="navbar-brand" href="#"><img src="/static/Icon/icon.svg" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Data Pasar <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Input Pesanan</a>
                                </li>
                            </ul>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav" style={{display:'block',marginLeft:'auto'}}>
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Keluar <span class="sr-only">(current)</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

               
                    <div className="container">
                        <div className="row">
                           <div className="col-3">
                           <div className="card-form-second" style={{height:'40%'}}>
                               
                            </div>
                           </div>
                           <div className="col-9">
                           <div className="card-form-second">
                               
                            </div>
                           </div>
                        </div>

        
                </div>
            </div>
        )
    }

}
