import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setCount]=useState(0);
    const incCount = ()=>{
        setCount(++count)};
        const decCount = ()=>{
            setCount(--count)};
  return (
    <div>
      <Typography variant='h1'>Counter</Typography>
      <Typography variant='h3'>{count}</Typography>
      <Button variant='contained' onClick={incCount}>+</Button>&nbsp;&nbsp;
      <Button variant='contained' onClick={decCount}>-</Button>
    </div>
  )
}

export default Counter
