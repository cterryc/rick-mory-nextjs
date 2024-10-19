import { ImSpinner3 } from 'react-icons/im'

const ChargingCard = () => {
  return (
    <button className='animate-pulse flex space-x-4' disabled>
      <main className='m-2 p-1  flex flex-col items-center rounded-lg relative max-w-[200px] hover:bottom-0.5 hover:shadow-2xl hover:bg-gray-700 cursor-wait h-[300px]'>
        <div className='w-[200px] h-[200px] bg-slate-500 rounded-t-lg flex items-center justify-center'>
          <ImSpinner3 className='animate-spin h-8 w-8' />
        </div>
        <div className='w-[200px] flex gap-3 flex-col'>
          <div className='h-[24px] py-[4px] flex justify-start'>
            <h1 className='bg-slate-400 text-sm w-36 rounded-full'></h1>
          </div>
          <h2></h2>
        </div>
        <div className='flex gap-1 flex-col justify-start w-[200px]'>
          <div className='bg-slate-400 h-4 w-32 rounded-full'></div>
          <div className='bg-slate-400 h-4 w-44 rounded-full'></div>
        </div>
      </main>
    </button>
  )
}

export default ChargingCard
