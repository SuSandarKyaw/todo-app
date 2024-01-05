import React, { useEffect, useState } from 'react'

const AllAndClearBtn = ({clearCompleted,filterBy}) => {

  const [filter,setFilter] = useState("All");

  useEffect(()=>{
   filterBy(filter)
  },[filter,filterBy])


  return (
    <div className=' flex justify-between'>
     <div className=" flex gap-3">
      <button className={` text-sm  text-gray-700 ${filter === "All" ? 'border border-gray-500 px-2 rounded' : ""}`} onClick={()=>setFilter("All")}>All</button>
     <button className={` text-sm  text-gray-700 ${filter === "Active" ? 'border border-gray-500 px-2 rounded' : ""}`} onClick={()=>setFilter("Active")}>Active</button>
     <button className={` text-sm  text-gray-700 ${filter === "Completed" ? 'border border-gray-500 px-2 rounded' : ""}`} onClick={()=>setFilter("Completed")}>Completed</button>
     </div>
     <button onClick={clearCompleted} className=' text-sm border border-gray-500 px-2 rounded text-gray-700'>Clear Completed</button>
    </div>
  )
}

export default AllAndClearBtn
