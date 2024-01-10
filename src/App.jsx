import React from 'react'
import Section from './Section'
import Header from './Page/Header'
function App() {
  return (
    <>
    <div class="row m-0 p-0"> 
      <div class='col-md-3 bg-secondary'><Header/></div>
    <div class='col-md-9'><Section/></div>
    </div>
    
    </>
  )
}

export default App