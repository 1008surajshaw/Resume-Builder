import React from 'react'

const Template10 = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
       <div className='bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full'>
             <div className='flex justify-center mx-auto'>
                   Hello world  
             </div>
            <div className='flex flex-col md:flex-row'>
                {/* left column */}
                <div className='md:w-1/3 border-r border-gray-200 p-4'>
                       hello
                </div>
                {/* Right column */}
                <div className='md:w-2/3 p-4'>
                    world
                </div>
            </div>
       </div>
    </div>
  )
}

export default Template10