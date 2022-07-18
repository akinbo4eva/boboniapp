import './App.css';
import Lottery from './Components/Lottery';


function App() {
  return (
    <div className="App">
     <Lottery/>
     <Lottery title='Mini Lotto' max_num={10} max_balls={4}/>
    </div>
  );
}

export default App;
