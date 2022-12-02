
import React from 'react'
import story1 from '../assets/story-01.jpg'
import story2 from '../assets/story-02.jpg'
import story3 from '../assets/story-03.jpg'
import story4 from '../assets/story-04.jpg'
import story5 from '../assets/story-05.jpg'
import profile1 from '../assets/profile_1.jpg'
import profile2 from '../assets/profile_2.jpg'
import profile3 from '../assets/profile_3.jpg'
import profile4 from '../assets/profile_4.jpg'
import profile5 from '../assets/profile_5.jpg'
import StoryCard from './StoryCard'


const Stories = () => {

  
  
  return (
    <div className=' flex justify-center space-x-1  md:space-x-3 mx-auto'>
      <StoryCard name='Kamal Al-Zuamir' story={story1} profile={profile1}/>
      <StoryCard name='John Doe' story={story2} profile={profile2}/>
      <StoryCard name='Doe John' story={story3} profile={profile3}/>
      <StoryCard name='Zumair Kamal' story={story4} profile={profile4}/>
      <StoryCard name='Ali Ahmed' story={story5} profile={profile5}/>
    </div>
  )
}

export default Stories
