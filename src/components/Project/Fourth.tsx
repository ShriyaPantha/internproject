import React from 'react'
import ProjectDeadlinesChart from './Projectdeadline'

const Fourth = () => {
  return (
    <div className='px-3 py-5 bg-gray-50 border-l-1'>
        <div className='font-semibold text-2xl px-7 py-2'>

      Project deadlines
    </div>
    <div className='text-sm px-7'>
        Status of completion for all tasks
    </div>
      <div className='pt-4'>
        <ProjectDeadlinesChart/>
      </div>
      <div className=" rounded-xl w-full max-w-sm">

  {/* Scrollable container */}
  <div className="h-[300px] overflow-y-auto px-3 py-3 space-y-3">

    {/* Card 1 */}
    <div className="bg-[#edf1f4] rounded-xl p-4 flex gap-3">
      <div className="w-1 bg-green-500 rounded-full" />

      <div className="flex flex-col text-lg font-bold text-[#0B1024]">
        Complete Before
        <span className="font-bold">deadline: 3</span>

        <span className="text-xs text-orange-600 bg-orange-100 w-fit px-2 py-0.5 rounded-full mt-1">
          0%
        </span>

        <p className="text-sm font-normal text-gray-500 mt-1">
          than previous 3 projects
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-[#edf1f4] rounded-xl p-4 flex gap-3">
      <div className="w-1 bg-blue-500 rounded-full" />

      <div className="flex flex-col text-lg font-bold text-[#0B1024]">
        Complete On
        <span className="font-bold">deadline: 14</span>

        <span className="text-xs text-orange-600 bg-orange-100 w-fit px-2 py-0.5 rounded-full mt-1">
          -18%
        </span>

        <p className="text-sm font-normal text-gray-500 mt-1">
          than previous 17 projects
        </p>
      </div>
    </div>
     <div className="bg-[#edf1f4] rounded-xl p-4 flex gap-3">
      <div className="w-1 bg-orange-500 rounded-full" />

      <div className="flex flex-col text-lg font-bold text-[#0B1024]">
        Complete after
        <span className="font-bold">deadline: 6</span>

        <span className="text-xs text-green-600 bg-green-100 w-fit px-2 py-0.5 rounded-full mt-1">
          +20%
        </span>

        <p className="text-sm font-normal text-gray-500 mt-1">
          than previous 5 projects
        </p>
      </div>
    </div>
   

  </div>
</div>

        </div>
  )
}

export default Fourth
