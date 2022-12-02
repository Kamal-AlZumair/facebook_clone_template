import Image from 'next/image'
import React from 'react'

const Contact = ({image, name}) => {
  return (
    <div className=' flex space-x-2 items-center mb-4 relative hover:bg-gray-200 cursor-pointer p-2  rounded-xl'>
      <Image src={image}  className=' w-12 h-12 rounded-full object-cover bg-fixed'/>
      <p>{name}</p>
      <div className=' absolute bottom-2 left-9 bg-green-400 h-3 w-3 rounded-full'/>
    </div>
  )
}

export default Contact
