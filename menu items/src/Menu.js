import React from 'react';

const Menu = ({items}) => {
  
  return (
    <div className='section-center'>
    {
      items.map((items)=>{
        const {id,title,category,price,img,desc}=items;
        return(
          <div key={id}>
          <h3>{title}</h3>
          <h2>{category}</h2>
            <img src={img} alt={title}/>
            <h4>${price}</h4>
            <p>{desc}</p>
          </div>
        );

      })
    }
   
    

</div>
  );

};

export default Menu;