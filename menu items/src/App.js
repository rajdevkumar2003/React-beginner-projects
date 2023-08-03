import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


function App() {
  const filterItems=(category)=>{
    if(category==='all'){
      return setMenuItems(items);
    }
     const newItems=items.filter((items)=>items.category===category);
     setMenuItems(newItems);
  }
  const [menuItems, setMenuItems] = useState(items);
  //const [category, setCategory] = useState([]);
 
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems}/>
        
        
      </section>
    </main>
  );
}

export default App;