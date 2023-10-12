import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { Link, Outlet } from 'react-router-dom';
// import product from './features/products'
function App() {
  return (
   <Provider store={store}>
   <div>
       {/* <h1 style={{margin: '0px'}}>App</h1> */}
       <div className='nav'>
           <Link to='/'>Home</Link>&nbsp;&nbsp;
        <div>
          <Link className='products-link' to='/products'>Products</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/products/addproducts'>AddProducts</Link>
        </div>
       </div>
    <Outlet/>
    </div>
    {/* <h1 style={{textAlign:'center', padding:'200px 0%'}}>Products</h1> */}

    </Provider>
  );
}

export default App;
