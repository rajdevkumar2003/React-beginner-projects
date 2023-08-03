import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ values }) => {


  return (
    <div style={{display:'flex'}}>
      {
        values.map((item) => {
          const { rgb,type, alpha, weight } = item;
        
          return (
            <div key={rgb}>
              <p>{type}</p>
              <p>{rgb}</p>
            </div>
          )
        })
      }
    </div>

  );
}

export default SingleColor