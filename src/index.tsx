import React from "react";
import { render } from "react-dom";
import QRCode from "qrcode.react";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>SCAN ME</h1>
      <div>
        <QRCode
          value="https://p3d.in"
          renderAs="svg"
          style={{
            width: "80vmin",
            height: "80vmin"
          }}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
