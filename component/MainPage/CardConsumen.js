import React from "react";
import ListConsumen from "../Consumen/ListConsumen";
import axios from "axios";
import Select from "react-select";

export default class index extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: "input",
      consumens: [],
      kelurahans: [],
      kelurahan: ""
    };
    this.getKelurahan = this.getKelurahan.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}konsumens`)
      .then(res => this.setState({ consumens: res.data.values }))
      .catch(err => console.log(err));
  }

  getKelurahan = e => {
    let search = e.target.value;
    if (search.length > 4) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}kelurahans/fkel/${search}`)
        .then(res => {
          let filtered = [];
          res.data.values.map(kelurahan =>
            filtered.push({
              value: kelurahan.id+' '+kelurahan.kodepos,
              label: kelurahan.kelurahan+' - '+kelurahan.kabupaten
            })
          );
          this.setState({ kelurahans: filtered });
        })
        .catch(err => console.log(err));
    }
  };

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
                <label className="label-card-admin">Email</label>
              </div>
              <div className="col-12">
                <input className="form-card" placeholder="Tuliskan Email" />
              </div>
            </div>
          </div>

          <div>
            <div className="col-12">
              <h3 className="heading-card-admin">Alamat Konsumen</h3>
            </div>
            <div className="col-12">
              <label className="label-card-admin">Katagori Pelanggan</label>
            </div>
            <div className="col-12" style={{ marginBottom: "20px" }}>
              <select className="form-card-second">
                <option>Pilih Katagori </option>
                <option>Rumah</option>
                <option>Restoran Besar</option>
                <option>Restoran Kaki Lima</option>
              </select>
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
                  <input
                    className="form-card"
                    style={{ background: "#DEDEDE" }}
                    placeholder="Kode Pos"
                    value={this.state.kelurahan && this.state.kelurahan.value.split(' ')[1]}
                    disabled
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="col-12">
                  <label className="label-card-admin">Kelurahan</label>
                </div>
                <div className="col-12">
                  <Select
                    value={this.state.kelurahan}
                    onChange={value => this.setState({ kelurahan: value })}
                    onKeyDown={e => this.getKelurahan(e)}
                    options={this.state.kelurahans}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <button
                  className="btn-input-customer"
                  onClick={() => console.log(this.state)}
                >
                  Masukan Data
                </button>
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
