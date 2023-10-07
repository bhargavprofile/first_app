import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';

function App() {
  return (
    <div style={{padding:'10px',border:'2px solid #000'}}>
       <h1 style={{marginBottom: '20px', textAlign: 'center'}}>welcome to redux-toolkit</h1>
     <div className='apps'>
       <Counter/>
       <Todolist/>
      </div>
    </div>
  );
}

export default App;
