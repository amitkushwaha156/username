import React from 'react'

function Details() {
    var get = JSON.parse(localStorage.getItem('user'));
    
  return (
    <div>
        {/* <h3>{JSON.stringify(get[1].email)}</h3> */}
       {
        get.map((item)=><li>{ (item===null) ? 1 :    JSON.stringify(item.email)   }</li>)
       }
        
        </div>
  )
}

export default Details