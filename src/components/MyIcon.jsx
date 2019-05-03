import React from 'react';

export const MyIcon = ({type, url}) => {
  console.log(type)
  return (
    <a href={url}><span className={` mr-4 ${type} my-icon`}></span></a>
  )
}