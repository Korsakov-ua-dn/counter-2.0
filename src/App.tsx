import React, { useState } from 'react';
import './App.css';
import Block_1 from './Components/Block_1'
import Block_2 from './Components/Block_2'

export type DataType = {
  start: any
  max: any
}

function App() {

  let startAsString = localStorage.getItem("start")
  let maxAsString = localStorage.getItem("max")
  let newStart;
  let newMax;

  if (startAsString && maxAsString) {
    newStart = JSON.parse(startAsString)
    newMax = JSON.parse(maxAsString)
  }

  let [data, setData] = useState({start: newStart, max: newMax})

  const changeData = () => {
   setData({...data})
  }


  return (
    <div className="App">
      <Block_1 data={data} changeData={changeData}/>
      <Block_2 />
    </div>
  );
}

export default App;
