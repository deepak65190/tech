import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Home' ;
import Team from './Team';
function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/team' element={<Team/>}/>
        
    </Routes>
  )
}

export default AllRoutes