import Image from 'next/image'
import React from 'react'
import { Props } from './interface'

const OneCharacter = ({ character }: Props) => {
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
    <main className='m-2 p-1 bg-slate-800 flex flex-col items-center rounded-lg relative max-w-[300px]'>
      <Image
        src={character?.image}
        alt={character?.name}
        width={300}
        height={300}
        className='rounded-t-lg'
      />
      <div className='w-full'>
        <h3 className={`${verifyStatus()} flex justify-center rounded-b-lg`}>
          {character?.status}
        </h3>
        <h1 className='font-bold text-xl pb-1'>{character?.name}</h1>
        <div className='flex items-center gap-2'>
          <h3 className='text-sm font-bold'>
            {character.name !== '...' ? 'Location:' : '...'}
          </h3>
          <h2>{character?.location?.name}</h2>
        </div>
        <div className='flex items-center gap-2'>
          <h3 className='text-sm font-bold'>
            {character.name !== '...' ? 'Origin:' : '...'}
          </h3>
          <h2>{character?.origin?.name}</h2>
        </div>
        <div className='flex items-center gap-2'>
          <h3 className='text-sm font-bold'>
            {character.name !== '...' ? 'Species:' : '...'}
          </h3>
          <h2>{character.species}</h2>
        </div>
      </div>
    </main>
  )
}

export default OneCharacter
