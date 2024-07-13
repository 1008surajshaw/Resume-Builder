import { useUserStore } from '../../../src/store/userStore';
import React from 'react'
import { Search,Send} from 'lucide-react';

const Header = () => {
    const {user}:any = useUserStore();
    const filter = [
        {
            id:1,
            type:"default",
        },
        {
            id:2,
            type:"modern",
        },
        {
            id:3,
            type:"creative",
        },
        {
            id:4,
            type:"simple"
        }
        
    ]

    const handelFilterTemplate = ()=>{
        console.log("One")
    }
  return (
    <div className='w-full flex flex-col '>

        <div className='flex justify-end w-10/12  mt-7 gap-2 items-center '>
        <div className='flex gap-2 items-center border rounded-md p-1'>
           <Search className='h-4 w-4'/>
           <input type='text' placeholder='search'/>
    
        </div>
        <div>
            <img src={user?.photoURL} alt='user'
            width={30}
            height={30}
            className='rounded-full'/>
        </div>
        <button className='gap-2 flex text-sm h-8 hover:bg-blue-700 bg-blue-600 p-5 items-center my-auto rounded-md'>
           <Send className='w-4 h-4'/>Invite 
        </button>
        </div>

        <div className='flex justify-start  mt-7 gap-2 items-center'>
        {filter.map((data) => (
          <div
            key={data.id}
            className="ml-10 m-1 flex items-center rounded-lg bg-blue-400 px-6 py-2 text-sm text-black hover:bg-blue-700 cursor-pointer"
            onClick={() =>handelFilterTemplate}
          >
            {data.type}
            
          </div>
        ))}
        </div>
    </div>
  )
}

export default Header