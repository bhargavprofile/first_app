// import Counter from './Counter';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div> 
      <div className='navLinks' style={{textAlign:'right', marginRight:'20px'}}>
         <Link to='/'>Home</Link>&nbsp;&nbsp;
         <Link to='/counter'>Counter</Link>&nbsp;&nbsp;
         <Link to='/todolist'>TodoList</Link>
    </div>
         
         <h1 style={{textAlign: 'center'}}>Home page</h1>

        </div>
  );
}

export default App;
