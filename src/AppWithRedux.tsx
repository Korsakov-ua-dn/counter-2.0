import './App.css';
import PrevSettings from './Components/PrevSettings'
import CounterDisplay from './Components/CounterDisplay'

function AppWithRedux() {
  console.log("Rerender AppWithRedux");

  return (
    <div className="App">
      <PrevSettings />
      <CounterDisplay />
    </div>
  );
}

export default AppWithRedux;
