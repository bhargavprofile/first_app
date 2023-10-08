import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
    <div style={{padding:'10px',border:'2px solid #000'}}>
       {/* <h1 style={{margin: '0px'}}>App</h1> */}
    </div>
    </Provider>
  );
}

export default App;
