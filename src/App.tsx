import React, { useState } from 'react';
import './App.css';
import Block_1 from './Components/Block_1'
import Block_2 from './Components/Block_2'

export type DataType = {
  start: number
  max: number
}

function App() {
  console.log("Rerender App");

  let startAsString = localStorage.getItem("start")
  let maxAsString = localStorage.getItem("max")
  let start;
  let max;

  if (startAsString && maxAsString) {
    start = JSON.parse(startAsString)
    max = JSON.parse(maxAsString)
  }
  
  let [error, setError] = useState('press set')

  let [data, setData] = useState<DataType>({start, max})

  const changeData = (start: number, max: number) => {
    localStorage.setItem("start", JSON.stringify(start))
    localStorage.setItem("max", JSON.stringify(max))
    setData({start, max})
  }


  return (
    <div className="App">
      <Block_1 data={data} changeData={changeData} setError={setError} error={error}/>
      <Block_2 error={error} data={data} />
    </div>
  );
}

export default App;
