
import React, { useState } from "react";
import Barcode from "./Barcode";
import './App.css'

function App() {
  const [data, setData] = useState('')

  return (
    <>
     <Barcode/>
      <p>{data}</p>
    </>
  );
}

export default App