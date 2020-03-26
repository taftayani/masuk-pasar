import React from "react";
import ListConsumen from "../Consumen/ListConsumen";
import axios from "axios";
export default class index extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: "input",
      consumens: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.masukpasar.id/konsumens")
      .then(res => this.setState({ consumens: res.data.values }))
      .catch(err => console.log(err));
  }

  FormConsumen() {
    return (
      <div hidden={this.state.tab == "list"} className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="heading-card-admin">Data Diri Konsumen</h3>
          </div>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-6">
              <div className="col-12">
                <label className="label-card-admin">Katagori Pelanggan</label>
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

            <div className="col-6">
              <div className="col-12">
                <label className="label-card-admin">No Telp</label>
              </div>
              <div className="col-12">
                <input className="form-card" placeholder="Tuliskan No Telp" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="col-12">
                <label className="label-card-admin">Nama Lengkap</label>
              </div>
              <div className="col-12">
                <input
                  className="form-card"
                  placeholder="Tuliskan Nama Lengkap"
                />
              </div>
            </div>

            <div className="col-6">
              <div className="col-12">
                <label className="label-card-admin">No Telp</label>
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
            <div style={{ marginBottom: "20px" }}>
              <div className="col-12">
                <label className="label-card-admin">Alamat</label>
              </div>
              <div className="col-12">
                <textarea
                  style={{ height: "100px" }}
                  className="form-card"
                  placeholder="Tuliskan Nama Lengkap"
                />
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

          <div className="container">
            <div className="row">
              <div className="col-12">
                <button className="btn-input-customer">Masukan Data</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  ListConsumen() {
    return (
      <div hidden={this.state.tab == "input"} className="container">
        <div className="row">
          <div className="col-12">
            <div style={{ marginBottom: "40px" }}>
              <div className="col-12">
                <h3 className="heading-card-admin">List Data Konsumen</h3>
              </div>
            </div>
          </div>
          {this.state.consumens.map(consumen => (
            <ListConsumen consumen={consumen} key={consumen.id} />
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="card-form-second">
          <div className="container">
            <div
              className="row"
              style={{ paddingTop: "30px", borderBottom: "1px solid #BEB1AF" }}
            >
              <label
                style={{
                  display: "block",
                  marginLeft: "4%",
                  marginRight: "5%"
                }}
                className={`${
                  this.state.tab == "input"
                    ? "active-tab-dashboard-card"
                    : "no-active-tab-dashboard-card"
                }`}
                onClick={() => {
                  this.setState({
                    tab: "input"
                  });
                }}
              >
                Input Konsumen
              </label>
              <label
                style={{ display: "block" }}
                className={`${
                  this.state.tab == "list"
                    ? "active-tab-dashboard-card"
                    : "no-active-tab-dashboard-card"
                }`}
                onClick={() => {
                  this.setState({
                    tab: "list"
                  });
                }}
              >
                List Konsumen
              </label>
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
    );
  }
}
