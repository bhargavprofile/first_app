import { useEffect, useState } from 'react';
import './App.css';
// import data from './data';
import axios from 'axios';


// url='https://course-api.com/react-tours-project'

function App() {
  const [tour, setTour] = useState([]);
  var [a, setA] = useState([]);
  const [Loading, IsLoading] = useState(true);
  
  useEffect(()=>{
     axios.get('https://course-api.com/react-tours-project')
     .then((res)=>{
        // console.log(res.data)
        setTour(res.data);
        setA(res.data)
        IsLoading(false);
     })
  },[])

  if(Loading){
    return <div><h2 style={{ color: 'darkblue', fontSize:'40px',textAlign:'center'}}>Loading...</h2></div>
  }
  
function del(i){
    tour.splice(i, 1);
    setTour([...tour])
}
 
function refresh(){
  console.log(a)
    setTour([...a])
    console.log(...a)
}

// var name = 'No Tours Left';
// var rename = 'Our Tours';
  return (
    <div className="App">
       {/* <div style={tour.length===0 ? <h1>{name}</h1> : <h1>{rename}</h1>}></div> */}
       <h1>Our Tours</h1>
        
           {tour.map((a,i)=>{
              return(
                <div className='card'>
                      <img src={a.image} alt='img'/>
                 <div style={{display:'flex', justifyContent:'space-between', padding: '0px 20px'}}>
                      <h4>{a.name}</h4>
                      <div><h3 style={{color: '#49a6e9', backgroundColor:'#ebf7ff',padding: '0px 5px'}}>${a.price}</h3></div>
                 </div>
                    <p style={{padding:'0px 20px', textAlign:'left', color:'#777', margin: '0px'}}>{a.info}</p>
                    <button onClick={()=>{del(i)}}>Not Interested</button>
                    </div>
              )

           })}
           <button onClick={()=>{refresh()}} style={tour.length===0 ? {display:'block'} : {display:'none'}} id='refresh'>Refresh</button>

       </div>
  );
} 

export default App;
