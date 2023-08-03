import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    let colors=new Values(color).all(10);
    console.log(colors);
    setList(colors);
  }
  
    
  return (<>
  <section className='container'>
    <h3>RGB color generator</h3>
    <form onSubmit={handleSubmit}>
       <input type='text'  onChange={(e)=>setColor(e.target.value)} placeholder='#f5f5f5' value={color}></input>
       <button className='btn' type='submit'>Submit</button>
    </form>
  </section>
  <section className='colors'>
  <SingleColor values={list}/>
  </section>
  </>
  );
}

export default App