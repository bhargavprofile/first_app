import { useState } from 'react';
import './App.css';
import reviews from './data';

function App() {
  const [reviews, setReviews] = useState(reviews);
 

  return (
    <div>
       <h1 style={{textAlign: 'center', letterSpacing: '1px', borderBottom: '4px solid #49a6e9', width: 'max-content', margin: '0 auto'}}>Edupoly Reviews</h1>
       {
        reviews.map((a,i)=>{
          return <div>
                    <div className='card'>
                       <img src={a.image} alt='img'/>
                       <h5>{a.name}</h5>
                       <h4>{a.job}</h4>
                       <p>{a.text}</p>
                    </div>
               </div>
        })
       }
    </div>
  );
}

export default App;
