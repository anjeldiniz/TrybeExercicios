import logo from './logo.svg';
import './App.css';

const Task = () => {
  const myArray = ['um', 'dois', 'tres'];
  return (
  <ol>{myArray.map((el) => <li>{el}</li>)}</ol>
    
  );
}


function App() {
  return (
    <Task />
  );
}

export default App;
