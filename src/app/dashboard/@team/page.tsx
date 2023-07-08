"use client"

// import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react';

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ title: 'page' })
    }, 5000)
  })
}

function page() {
  // const [state, setState] = useState({});
  const data = getData();


  return (
    <div className='text-white text-5xl'>
    {data.then((d) => {return d.title})}
    </div>
  )
}

export default page