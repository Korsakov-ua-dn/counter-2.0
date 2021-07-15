import React, { useEffect, useState } from 'react';
import './App.css';
import Block1 from './Components/Block1'
import Block2 from './Components/Block2'

export type DataType = {
  start: number
  max: number
  current: number | undefined
}

function App() {
  console.log("Rerender App");

  let [error, setError] = useState('Invalid value')
  let [data, setData] = useState<DataType | null>(null)

  const setBasicDataValue = (start: number, max: number) => {
    localStorage.setItem("start", JSON.stringify(start))
    localStorage.setItem("max", JSON.stringify(max))
    setData({ start, max, current: start })
  }
  const changeCurrentDataValue = (current: number) => {
    setData((data) => data ? ({ ...data, current }) : data)
  }

  useEffect(() => {
    let startAsString = localStorage.getItem("start")
    let maxAsString = localStorage.getItem("max")
    
    if (startAsString && maxAsString) {
      const start = JSON.parse(startAsString)
      const max = JSON.parse(maxAsString)
       
      setData({start, max, current: start})
      setError('')
    } else {
      setData({ start: 0, max: 0, current: 0 })
    }
  }, [])

  useEffect(() => console.log(error), [error])
  console.log(error)

  return !data ? null : (
    <div className="App">
      <Block1 data={data} setBasicDataValue={setBasicDataValue} setError={setError} error={error} />
      <Block2 data={data} error={error} setError={setError} changeCurrentDataValue={changeCurrentDataValue} />
    </div>
  );
}

export default App;
