import React from 'react'

const Searchresults = ({result}) => {
   
  return (
    <div className=' my-1 rounded bg-secondary ' id='allresults'>
      {
        result.map((r)=>{
            return<div className='p-2 rounded' id='result' key={r} >{r}</div>
        })
      }
    </div>
    
  )
}

export default Searchresults

