import { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [tour, setTour] = useState(data);
    
  
function del(i){
    tour.splice(i, 1);
    setTour(...tour)
}

  return (
    <div className="App">
       <h1>Our Tours</h1>
           {tour.map((a,i)=>{
              return(
                <div className='card'>
                      <img src={a.img} alt='img'/>
                 <div style={{display:'flex', justifyContent:'space-between', padding: '0px 10px'}}>
                      <h4>{a.sub}</h4>
                      <div><h3>{a.price}</h3></div>
                 </div>
                    <p>{a.description}</p>
                    <button onClick={()=>{del(i)}}>Not Interested</button>
                </div>
              )
           })}
       </div>
  );
} 

export default App;
