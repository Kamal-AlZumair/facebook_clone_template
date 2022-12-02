import React from 'react'
import Image from 'next/image'

const SidebarRow = ({src, Icon, title}) => {
  return (
    <div className=' flex items-center space-x-2 p-1 md:p-4 
    hover:bg-gray-200 rounded-xl cursor-pointer'>
      {src && (
        <Image priority={'/'} className='w-6 h-6 md:h-8 md:w-8 rounded-full bg-fixed' src={src} width={30} height={30} alt={'/'} />
      )}
      {Icon && (
        <Icon className='h-6 md:h-8 w-6 md:w-8 text-blue-500'/>
      )}
      <p className=' hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow
