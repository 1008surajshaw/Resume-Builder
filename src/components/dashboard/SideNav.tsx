import React from 'react'
import SideNavButtomSection from './SideNavButtomSection'
import SideNavTopSection from './SideNavTopSection'

const SideNav = () => {
  return (
    <div className=' h-screen fixed w-72 border border-[1px] p-6 flex flex-col'>
        <div className='flex-1'>
      <SideNavTopSection />
      </div>
    
     <div>
      <SideNavButtomSection/>
     </div>
    </div>
  )
}

export default SideNav