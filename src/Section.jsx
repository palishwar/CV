import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import First from './Page/First'
import About from './Page/About'
import Resume from './Page/Resume'
import Travel from './Page/Portfolio/Project'
import Traveldet from './Page/Portfolio/Projectdtls'
function Section() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/first' element={<First/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/resume' element={<Resume/>}/>
    <Route path='/travel' element={<Travel/>}/>
    <Route path='/travel/:tra_id' element={<Traveldet/>}/>

   </Routes>
   </>
  )
}
export default Section