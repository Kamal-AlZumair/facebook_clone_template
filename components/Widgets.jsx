import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {EllipsisHorizontalIcon, VideoCameraIcon} from '@heroicons/react/24/solid'
import profile1 from '../assets/profile_1.jpg'  
import profile2 from '../assets/profile_2.jpg'  
import profile3 from '../assets/profile_3.jpg'  
import profile4 from '../assets/profile_4.jpg'  
import profile5 from '../assets/profile_5.jpg'  
import Contact from './Contact'


const Widgets = () => {
  return (
    <div className=' hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className=' flex justify-between items-center text-gray-500 mb-5'>
        <h2 className=' text-xl'>Contacts</h2>
        <div className=' flex space-x-2'>
          <VideoCameraIcon className='h-6'/>
          <MagnifyingGlassIcon className='h-6'/>
          <EllipsisHorizontalIcon className='h-6'/>
        </div>
      </div>
      <Contact image={profile1} name='Person'/>
      <Contact image={profile2} name='Person'/>
      <Contact image={profile3} name='Person'/>
      <Contact image={profile4} name='Person'/>
      <Contact image={profile5} name='Person'/>
    </div>
  )
}

export default Widgets
