import Head from '../../component/Head'
import React from 'react'
import CardConsumen from '../../component/MainPage/CardConsumen'
import CardProduk from '../../component/MainPage/CardProduk'

export default class index extends React.Component {

    constructor() {
        super()
        this.state = {
            tab: 'product'
        }
    }
    ListCard(){
        if(this.state.tab == 'customer'){
            return <CardConsumen/>
        }
        else{
            return <CardProduk/>
        }
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
                                        <label className={`${this.state.tab == 'customer' ? 'active-tab-dashboard':'no-active-tab-dashboard'}`} 
                                        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto',cursor:'pointer'}}
                                        onClick={()=>{
                                            this.setState({
                                                tab:'customer'
                                            })
                                        }}>
                                        Data Konsumen</label>
                                    </div>
                                    <div className="row" style={{ paddingTop: '30px', paddingBottom: '0px' }}>
                                        <label className={`${this.state.tab == 'product' ? 'active-tab-dashboard':'no-active-tab-dashboard'}`}
                                        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                                        onClick={()=>{
                                            this.setState({
                                                tab:'product'
                                            })
                                        }}>Data Produk</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            {this.ListCard()}
                        </div>
                    </div>
                    <style>
                        {`
                            .active-tab-dashboard{
                                color:#4B3030;
                                cursor:pointer;
                            }
                            .no-active-tab-dashboard{
                                color: #BEB1AF;
                                cursor:pointer;
                            }
                        `}
                    </style>

                </div>
            </div>
        )
    }

}