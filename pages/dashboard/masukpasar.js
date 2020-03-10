import Head from '../../component/Head'
import React from 'react'

export default class index extends React.Component {

    FormConsumen() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div style={{ marginBottom: '40px' }}>
                            <div className="col-12">
                                <h3 className="heading-card-admin">Data Diri Konsumen</h3>
                            </div>
                            <div>
                                <div className="col-12">
                                    <label className="label-card-admin">Nama Lengkap</label>
                                </div>
                                <div className="col-12">
                                    <input className="form-card" placeholder="Tuliskan Nama Lengkap" />
                                </div>
                            </div>

                            <div style={{marginTop:'15px'}}>
                                <div className="col-12">
                                    <label  className="label-card-admin">No Telp</label>
                                </div>
                                <div className="col-12">
                                    <input className="form-card" placeholder="Tuliskan No Telp" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="col-12">
                                <h3 className="heading-card-admin">Alamat Konsumen</h3>
                            </div>
                            <div>
                                <div className="col-12">
                                    <label  className="label-card-admin">Alamat</label>
                                </div>
                                <div className="col-12">
                                    <textarea style={{height:'100px'}} className="form-card"  placeholder="Tuliskan Nama Lengkap" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="col-12">
                                        <label className="label-card-admin">Kode pos</label>
                                    </div>
                                    <div className="col-12">
                                        <input className="form-card" placeholder="Kode Pos" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="col-12">
                                        <label className="label-card-admin">Kelurahan</label>
                                    </div>
                                    <div className="col-12">
                                        <input className="form-card" placeholder="Kelurahan" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6" style={{paddingTop:'70px'}}>
                        <img style={{width:'300px'}} src="/static/background/cart.svg"/>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (

            <div>
                <Head />
                <nav class="navbar navbar-expand-lg navbar-light bg-light"
                    style={{ paddingTop: '20px', paddingBottom: '20px', boxShadow: '4px 4px 10px #DBD4D4' }}>
                    <div className="container-fluid">
                        <a style={{ marginRight: '40px' }} class="navbar-brand" href="#"><img src="/static/Logo/logo.svg" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link active-dashboard" href="#">Data Pasar <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link no-active-dashboard" href="#">Input Pesanan</a>
                                </li>
                            </ul>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav" style={{ display: 'block', marginLeft: 'auto' }}>
                                <li class="nav-item active">
                                    <a class="nav-link logut-dashboard" href="/">Keluar <span class="sr-only">(current)</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div className="container" style={{ paddingBottom: '20px' }}>
                    <div className="row">
                        <div className="col-3">
                            <div className="card-form-second" style={{ height: 'auto' }}>
                                <div className="container">
                                    <div className="row" style={{ paddingTop: '30px', paddingBottom: '30px', borderBottom: '1px solid #BEB1AF' }}>
                                        <a className="active-tab-dashboard" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto',color:'#4B3030'}}>Data Konsumen</a>
                                    </div>
                                    <div className="row" style={{ paddingTop: '30px', paddingBottom: '0px' }}>
                                        <a className="no-active-tab-dashboard" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto',color:'#BEB1AF'}}>Data Produk</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="card-form-second">
                                <div className="container">
                                    <div className="row" style={{ paddingTop: '30px', paddingBottom: '30px', borderBottom: '1px solid #BEB1AF' }}>
                                        <a style={{ display: 'block', marginLeft: '4%', marginRight: '5%' }}>Input Konsumen</a>
                                        <a style={{ display: 'block', }}>List Produk</a>
                                    </div>
                                </div>
                                {this.FormConsumen()}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }

}