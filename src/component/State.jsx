import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var [val,setVal]=useState();
    const inputHandler = (e)=>{
        console.log(e.target.value);
        setVal(e.target.value);
    }

        var[data,setdata]=useState();
        const submitHandler = () => {
            setdata (val);
        };

    
  return (
    <div>
        <Typography variant='h3'>hello {data}</Typography>
      <TextField onChange={inputHandler} label="Enter your name" variant='outlined'/>
      <Button variant='outlined' onClick ={submitHandler}>LOGIN</Button>
    </div>
  )
}

export default State
