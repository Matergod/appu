import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx= {{ flexGrow:1}}>
        <AppBar position='static' style={{backgroundColor:"purple"}}>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{flexGrow:1}}>My APP</Typography>
<Button><Link to ={'/r'} style={{color:'white'}}>ApiGet</Link></Button>
 <Button><Link to ={'/v'} style={{color:'white'}}>Counter</Link></Button>
 <Button><Link to ={'/b'} style={{color:'white'}}>State</Link></Button>
 <Button><Link to ={'/n'} style={{color:'white'}}>Product</Link></Button>
 
</Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar
