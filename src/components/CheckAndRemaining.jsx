import React from 'react'

const CheckAndRemaining = ({itemsRemainingCount,checkAll}) => {
  return (
    <div>
      <div className=" flex items-center justify-between">
      <button onClick={checkAll} className='border border-gray-500 text-sm text-gray-800 bg-gray-100 px-3 py-1 rounded'>Check All</button>
      <p className=' text-sm text-gray-700'>{itemsRemainingCount} item{itemsRemainingCount > 1 ? 's' : ""} remaining</p>
      </div>
      <hr className=' my-5 border border-gray-300 '/>
    </div>
  )
}

export default CheckAndRemaining
