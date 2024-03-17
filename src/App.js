import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction } from './Redux/actions';

function App() {

  const {count}=useSelector(state=>state)
  const dispatch =useDispatch()

  const handleClick=()=>{

    dispatch(incrementAction())
  }

  const handleDecrement=()=>{
    dispatch(decrementAction())
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {count}
        </p>
        <button onClick={handleClick}>Increament Counter </button>
        <button onClick={handleDecrement}>Decrement Counter </button>
      </header>
    </div>
  );
}

export default App;
