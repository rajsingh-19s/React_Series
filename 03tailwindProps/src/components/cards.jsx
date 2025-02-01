import React from 'react'

function cards({userName, btnText="Vist Me"}) {
    console.log(userName)
  return (
    
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-5">
        <div className="md:flex">
            <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.pexels.com/photos/16395463/pexels-photo-16395463/free-photo-of-the-big-buddha-in-phuket-in-thailand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Background Image"
                
                
                />
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{userName}</div>
                <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?</p>
                <button className="mt-4 text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5">{btnText} ➡️ </button>
            </div>
        </div>
    </div>
  )
}

export default cards