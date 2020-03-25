import Head from '../../component/Head'
import React from 'react'

export default class index extends React.Component {

    constructor() {
        super()
        this.state = {
            tab: 'input'
        }
    }
    FormConsumen() {
        return (
            <div hidden={this.state.tab == 'list'} className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="heading-card-admin">Masukan Info Umum Produk</h3>
                    </div>
                </div>
                <div style={{ marginBottom: '40px' }}>
                    <div className="row" style={{ marginBottom: '20px' }}>

                    <div className="col-6">
                            <div className="form-input">
                                <div className="col-12">
                                    <label className="label-card-admin">Upload Foto Produk (opsional)</label>
                                </div>
                                <div className="col-12">
                                    <div className="img-background">
                                    </div>
                                </div>
                            </div>
                            <button className="btn-product">Unggah Foto</button>
                        </div>
                        <div className="col-6">
                            <div className="form-input">
                                <div className="col-12">
                                    <label className="label-card-admin">Katagori Produk</label>
                                </div>
                                <div className="col-12">
                                    <select className="form-card-second">
                                        <option>Pilih Katagori </option>
                                        <option>Rumah</option>
                                        <option>Restoran Besar</option>
                                        <option>Restoran Kaki Lima</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-input">
                                <div className="col-12">
                                    <label className="label-card-admin">SKU(Stock Keeping Unit)</label>
                                </div>
                                <div className="col-12">
                                    <input className="form-card" style={{ background: '#DBD4D4' }} placeholder="SKU" disabled />
                                </div>
                            </div>
                            <div className="form-input">
                                <div className="col-12">
                                    <label className="label-card-admin">No Telp</label>
                                </div>
                                <div className="col-12">
                                    <input className="form-card" placeholder="Tuliskan No Telp" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-4">
                            <div className="col-12">
                                <label className="label-card-admin">Pilih Satuan</label>
                            </div>
                            <div className="col-12">
                                <select className="form-card-second">
                                    <option>Katagori Satuan</option>
                                    <option>Rumah</option>
                                    <option>Restoran Besar</option>
                                    <option>Restoran Kaki Lima</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-input-second">
                                <div className="col-12">
                                    <label className="label-card-admin">Harga Beli/Satuan</label>
                                </div>
                                <div className="col-12">
                                    <input className="form-card" placeholder="Tuliskan Harga" />
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-input-second">
                                <div className="col-12">
                                    <label className="label-card-admin">Ketersediaan Stok</label>
                                </div>
                                <div className="row">
                                    <label>Stok Tersedia</label>
                                    <input type='checkbox' className="form-card" placeholder="Tuliskan Harga" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginBottom: '20px',marginTop:'10px'}}>
                        <div className="col-12">
                            <div className="col-12">
                                <label className="label-card-admin">Deskripsi</label>
                            </div>
                            <div className="col-12">
                                <textarea style={{ height: '100px' }} className="form-card" placeholder="Tuliskan Deskripsi" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="col-12">
                            <h3 className="heading-card-admin">Informasi Harga Jual</h3>
                        </div>

                        <div className="row">
                            <div className="col-2">
                                <div className="col-12">
                                    <input className="form-card" placeholder="Min Qty" />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="col-12">
                                    <input className="form-card" placeholder="Max Qty" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="col-12">
                                    <input className="form-card" placeholder="Total Margin (Rp)" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="col-12">
                                    <input className="form-card" style={{background:'#DBD4D4'}} placeholder="Rp." />
                                </div>
                            </div>
                        </div>

                        <div className="container" style={{marginTop:'10px'}}>
                            <div className="row">
                                <div className="col-12">
                                <img style={{marginRight:'10px'}} src="/static/Icon/add.svg"/>
                                <label className="label-add-admin">Tambah Harga Jual</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <button className="btn-input-customer">Masukan Data</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    ListConsumen() {
        return (
            <div hidden={this.state.tab == 'input'} className="container">
                <div className="row">
                    <div className="col-12">
                        <div style={{ marginBottom: '40px' }}>
                            <div className="col-12">
                                <h3 className="heading-card-admin">Masukan Info Umum Produk</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <table className="table-consumen">
                            <thead>
                                <tr>
                                    <td style={{ width: '30%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '5px' }}>
                                        <div className="row">
                                            <label className="label-tabel">Nama Konsumen</label>
                                        </div>

                                    </td>
                                    <td style={{ width: '20%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '20px' }}>
                                        <div>
                                            <label className="label-tabel">No Telp</label>
                                        </div>
                                    </td>
                                    <td style={{ width: '40%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '20px' }}>
                                        <div>
                                            <label className="label-tabel">Alamat</label>
                                        </div>
                                    </td>
                                    <td style={{ width: '10%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '20px' }}>

                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '30%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '5px' }}>
                                        <div className="row">
                                            <label className="list-tabel">Muhammad Bredx  wkwkwkkwkwkwkwkwkkwkw</label>
                                        </div>

                                    </td>
                                    <td style={{ width: '20%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '20px' }}>

                                        <label className="list-tabel">0819935775322</label>
                                    </td>
                                    <td style={{ width: '40%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '20px' }}>

                                        <label className="list-tabel">Jalan Kampung Melayu Besar Mesjid , Kebon Baru, 12090</label>
                                    </td>
                                    <td style={{ width: '10%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '20px' }}>
                                        <div>
                                            <button className="edit-btn-table">
                                                Ubah
                                            </button>
                                        </div>
                                        <div>
                                            <button className="delete-btn-table">
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className="table-consumen">
                            <thead>
                                <tr>
                                    <td style={{ width: '30%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '5px' }}>
                                        <div className="row">
                                            <label className="label-tabel">Nama Konsumen</label>
                                        </div>

                                    </td>
                                    <td style={{ width: '20%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '20px' }}>
                                        <div>
                                            <label className="label-tabel">No Telp</label>
                                        </div>
                                    </td>
                                    <td style={{ width: '40%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '20px' }}>
                                        <div>
                                            <label className="label-tabel">Alamat</label>
                                        </div>
                                    </td>
                                    <td style={{ width: '10%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '20px' }}>

                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '30%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '5px' }}>
                                        <div className="row">
                                            <label className="list-tabel">Muhammad Bredx  wkwkwkkwkwkwkwkwkkwkw</label>
                                        </div>

                                    </td>
                                    <td style={{ width: '20%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '20px' }}>

                                        <label className="list-tabel">0819935775322</label>
                                    </td>
                                    <td style={{ width: '40%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '20px' }}>

                                        <label className="list-tabel">Jalan Kampung Melayu Besar Mesjid , Kebon Baru, 12090</label>
                                    </td>
                                    <td style={{ width: '10%', borderRight: '1px solid #BEB1AF', paddingLeft: '20px', paddingRight: '20px' }}>
                                        <div>
                                            <button className="edit-btn-table">
                                                Ubah
                                            </button>
                                        </div>
                                        <div>
                                            <button className="delete-btn-table">
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (

            <div>
                <div className="card-form-second">
                    <div className="container">
                        <div className="row" style={{ paddingTop: '30px', borderBottom: '1px solid #BEB1AF' }}>
                            <label style={{ display: 'block', marginLeft: '4%', marginRight: '5%' }}
                                className={`${this.state.tab == 'input' ? 'active-tab-dashboard-card' : 'no-active-tab-dashboard-card'}`} onClick={() => {
                                    this.setState({
                                        tab: 'input'
                                    })
                                }}>Input Produk</label>
                            <label style={{ display: 'block' }}
                                className={`${this.state.tab == 'list' ? 'active-tab-dashboard-card' : 'no-active-tab-dashboard-card'}`} onClick={() => {
                                    this.setState({
                                        tab: 'list'
                                    })
                                }}>List Produk</label>
                        </div>
                    </div>
                    {this.FormConsumen()}
                    {this.ListConsumen()}
                </div>
                <style>
                    {`
                            .active-tab-dashboard-card{
                                border-bottom : 2px solid #97C93D;
                                padding-bottom: 20px;
                                cursor:pointer;
                            }
                            .no-active-tab-dashboard-card{
                                color: #BEB1AF;
                                cursor:pointer;
                            }
                        `}
                </style>
            </div>
        )
    }

}