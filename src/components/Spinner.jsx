import React from 'react'


const Spinner = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-[70vh]'>
      <div className='loader'></div>
      <p>Loading...</p>
    </div>
    </div>
  )
}

export default Spinner
