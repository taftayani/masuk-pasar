import React from "react";

const List = ({ consumen }) => (
  <div className="col-12">
    <table className="table-consumen">
      <thead>
        <tr>
          <td
            style={{
              width: "30%",
              borderRight: "1px solid #BEB1AF",
              paddingLeft: "20px",
              paddingRight: "5px"
            }}
          >
            <div className="row">
              <label className="label-tabel">Nama Konsumen</label>
            </div>
          </td>
          <td
            style={{
              width: "20%",
              borderRight: "1px solid #BEB1AF",
              paddingLeft: "20px",
              paddingRight: "20px"
            }}
          >
            <div>
              <label className="label-tabel">No Telp</label>
            </div>
          </td>
          <td
            style={{
              width: "40%",
              borderRight: "1px solid #BEB1AF",
              paddingLeft: "20px",
              paddingRight: "20px"
            }}
          >
            <div>
              <label className="label-tabel">Alamat</label>
            </div>
          </td>
          <td
            style={{
              width: "10%",
              borderRight: "1px solid #BEB1AF",
              paddingLeft: "20px",
              paddingRight: "20px"
            }}
          ></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            style={{
              width: "30%",
              borderRight: "1px solid #BEB1AF",
              paddingLeft: "20px",
              paddingRight: "5px"
            }}
          >
            <div className="row">
              <label className="list-tabel">{consumen.nama}</label>
            </div>
          </td>
          <td
            style={{
              width: "20%",
              borderRight: "1px solid #BEB1AF",
              paddingLeft: "20px",
              paddingRight: "20px"
            }}
          >
            <label className="list-tabel">{consumen.no_hp}</label>
          </td>
          <td
            style={{
              width: "40%",
              borderRight: "1px solid #BEB1AF",
              paddingLeft: "20px",
              paddingRight: "20px"
            }}
          >
            <label className="list-tabel">{consumen.address || "-"}</label>
          </td>
          <td
            style={{
              width: "10%",
              borderRight: "1px solid #BEB1AF",
              paddingLeft: "20px",
              paddingRight: "20px"
            }}
          >
            <div>
              <button className="edit-btn-table">Ubah</button>
            </div>
            <div>
              <button className="delete-btn-table">Hapus</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default List;
