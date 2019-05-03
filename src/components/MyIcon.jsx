import React from 'react';

export const MyIcon = ({type, url, myColor}) => {
  console.log(type)
  if (myColor == false) {
    return (
      <a href={url}><span className={` mr-4 ${type} my-icon`}></span></a>
    )
  }
  else {
    return(
      <a href={url}><span className={` mr-4 ${type}`} style={{color: '#A7B0AA', fontSize: 30}}></span></a>
  
    )
  }
  
}