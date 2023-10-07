import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';
import Todolist from './components/Todolist';
import Count100 from './components/count100';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1 style={{textDecoration:'underline'}}>APPS</h1>
      <div className='component'>
        <Counter/>{<br/>}
        <Count100/>{<br/>}
        <Todolist/>
      </div>
    </div>
  </Provider>
  );
}

export default App;
