import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";


function Barcode() {
  const [data, setData] = React.useState("Not Found");

  return (
    <div className="container">
      <h1>QR/Barcode Scanner</h1>
      <div className="barcode-scanner">
        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            if (result) setData(result.text);
            else setData("Not Found");
          }}
        />
      </div>
      <p className="result">
        {data ? `Scanned Data: ${data}` : 'Waiting for scan...'}
      </p>
    </div>
  );
}

export default Barcode;
