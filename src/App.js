import { useState } from 'react';
import './App.css';
import reviews from './data';

function App() {
  var [r, setR] = useState(reviews);
  var [i, setI] = useState(0);
  

// const prev = () => {

// }  
const next = () =>{
   if(i<r.length-1){
     setI(i+1)
     console.log(i)
    }else{
      
      setI(0)
    }
}
const prev = () =>{
  if(i<r.length-1){
    setI(0)
    console.log(i)
   }else{
    setI(i-1)
   }
}

  return (
    <div>
       <h1 style={{textAlign: 'center', letterSpacing: '1px', borderBottom: '4px solid #49a6e9', width: 'max-content', margin: '0 auto', marginBottom: '50px'}}>Edupoly Reviews</h1>
       <div style={{display: 'flex', justifyContent:'center'}}>
                    <div className='card'>
                       <img src={r[i].image} alt='img'/>
                       <h5>{r[i].name}</h5>
                       <h4>{r[i].job}</h4>
                       <p>{r[i].text}</p>
                       <div style={{margin:'20px'}}><button onClick={()=>{prev()}} style={{border:'none', fontSize:'30px',color: '#46a7e6'}}>&lt;</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{next()}} style={{border:'none', fontSize:'30px',color: '#46a7e6'}}>&gt;</button></div>
                       <button style={{color:'#46a7e6', border:'none', fontSize:'20px'}}>Surprise</button>
                    </div>
               </div>
    </div>
  );
}

export default App;
