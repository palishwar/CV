import React from 'react'
import Data from './Datat'
import { Link, useParams } from 'react-router-dom'

function Traveldet() {
    let {tra_id}=useParams()
    let ktha = Data.find((e)=>e.id==tra_id)
  return (
    <>
        <div className="tour container-fluid text-center">
            <div className="heading m-0 p-0">Name of the Project : {ktha.name}</div>
            <div className='phot'><img src={ktha.image}/></div>
            <div className='blah m-3'><h2>Project Type : {ktha.type}</h2></div>
            <div className='blah'><h2>Script Used : {ktha.script}</h2></div>
            <Link class="btn btn-primary"to={`${ktha.link}`} target='_blank' role="button">Link to Website</Link> 
        </div>
    </>
  )
}

export default Traveldet