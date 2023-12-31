import React,{useState} from 'react'
import data from './data'

const App = () => {
  const [count, setCount] = useState(0);
  const [para, setPara] = useState([]);
  const getPara=(e)=>{
     e.preventDefault();
     let amount=parseInt(count);
     if(amount<=0){amount=1}if(amount>=data.length){amount= data.length}
     setPara(data.slice(0,amount));
  }
  return (<section className='section-center'>
  <h3>tired of boring lorem ipsum??</h3>
   <form className='lorem-form' onSubmit={getPara}>
   <label htmlFor='amount' >Paragraph:</label>
   <input type='number' name='amount' id='amount' value={count} onChange={(e)=>{setCount(e.target.value)}}></input>
   <button type='submit' className='btn'>Generate</button>

   </form>
   <article className='lorem-text'>
     {para.map((item,index)=>{
         return <p key={index}>{item}</p>
     })}
   </article>
   </section>
  )
}

export default App
