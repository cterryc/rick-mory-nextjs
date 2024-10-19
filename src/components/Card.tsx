import Image from 'next/image'
import React from 'react'
import { Props } from './interface'
import ChargingCard from './ChargingCard/ChargingCard'

const Card = ({ character }: Props) => {
  const verifyStatus = () => {
    const { status } = character
    if (status === 'Dead') {
      return 'bg-red-600'
    } else if (status === 'Alive') {
      return 'bg-green-600'
    } else if (status === 'unknown') {
      return 'bg-gray-600'
    } else {
      return 'bg-yellow-600'
    }
  }
  return (
    <div>
      {character.name === '...' ? (
        <ChargingCard />
      ) : (
        <main className='m-2 p-1 bg-slate-800 flex flex-col items-center rounded-lg relative max-w-[200px] hover:bottom-0.5 hover:shadow-2xl hover:bg-gray-700 cursor-pointer h-[300px]'>
          <Image
            src={character?.image}
            alt={character?.name}
            width={200}
            height={200}
            className='rounded-t-lg'
          />
          <div className='w-full'>
            <h1 className='font-bold text-xl pb-1'>{character?.name}</h1>
            <h3 className='text-sm'>
              {character.name !== '...' ? 'Last Location:' : '...'}
            </h3>
            <h2>{character.location.name}</h2>
          </div>
          <h3
            className={`absolute ${verifyStatus()} px-2 rounded-md right-2 top-2`}
          >
            {character?.status}
          </h3>
        </main>
      )}
    </div>
  )
}

export default Card
