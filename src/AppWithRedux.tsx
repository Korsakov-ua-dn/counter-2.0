import './App.css'
import PrevSettings from './Components/PrevSettings'
import Counter from './Components/Counter'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setError } from './store/counter-reducer'

function AppWithRedux() {
  console.log("Rerender AppWithRedux")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setError('press set'))
  }, [dispatch])

  return (
    <div className="App">
      <PrevSettings />
      <Counter />
    </div>
  );
}

export default AppWithRedux;
