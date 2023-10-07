import { Provider } from 'react-redux';
import './App.css';
import Products from './features/products/Products';
import { store } from './store';

function App() {
  return (
   <Provider store={store}>
   <div style={{padding:'10px'}}>
       {/* <h1 style={{margin: '0px'}}>App</h1> */}
       <Products/>
    </div>
    </Provider>
  );
}

export default App;
