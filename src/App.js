import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import Pokemon from './features/pokemon/Pokemon';

function App() {
  return (
    <Provider store={store}>
    <div style={{padding:'10px',border:'2px solid #000'}}>
       {/* <h1 style={{margin: '0px'}}>App</h1> */}
       <Pokemon/>
    </div>
    </Provider>
  );
}

export default App;
