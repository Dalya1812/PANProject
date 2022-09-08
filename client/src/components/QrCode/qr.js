import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import "./qr.css";

function qr() {
  return (
    <div className="App">
      <h1>QR Code component</h1>
      <h2>Transforme un string en QR code</h2>
      <QRCode value="54655464889" />
    </div>
  );
}

export default qr;
