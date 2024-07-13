import React from 'react'
import { ChevronDown, LayoutGrid, LogOut, Settings, Users } from 'lucide-react'


const SideNavTopSection = () => {
    const menu=[
        {
            id:1,
            name:'Create Team',
            path:'/teams/create',
            icon:Users
        },
        {
            id:2,
            name:'Settings',
            path:'',
            icon:Settings
        }
    ];
    const onMenuClick = (item:any) =>{
        console.log("one")
    }
  return (
    <div>
         
         {
                menu.map((item,index)=>(
                    <h2 key={index} className='flex gap-2 items-center
                    p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-sm'
                    onClick={()=>onMenuClick(item)}>
                       <item.icon className='h-4 w-4'/>
                       {item.name}
                    </h2>
                ))
              }
          
    </div>
  )
}

export default SideNavTopSection