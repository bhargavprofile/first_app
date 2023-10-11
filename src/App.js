import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
   <Provider store={store}>
   <div>
       {/* <h1 style={{margin: '0px'}}>App</h1> */}
       <div className='nav'>
         <Link to='/products'>Products</Link>&nbsp;&nbsp;
         <Link to='/products/addproducts'>AddProducts</Link>
       </div>
    <Outlet/>
    </div>

    </Provider>
  );
}

export default App;
