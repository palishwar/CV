import React from 'react'
import Data from './Datat'
import { Link } from 'react-router-dom'

function Travel() {
  return (
    <>
      <div className="main">
        <h1>Portfolio</h1>  
        <div className="container">
          <div className="row">
            {Data.map((tra)=>
              <div className="col-4">
                <div className="card text-center">
                  <Link to={`/travel/${tra.id}`}><img src={tra.image} alt="" height={220} width={350}/></Link>
                  <Link to={`/travel/${tra.id}`} className='nam bg-primary-subtle'>{tra.type}</Link>
                </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Travel