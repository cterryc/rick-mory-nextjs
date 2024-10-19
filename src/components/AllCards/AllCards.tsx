import Link from 'next/link'
import React from 'react'
import Card from '../Card'
import { ArrayDeObjetos, arrayDeObjetos } from '@/app/Services/object.service'

interface PropsAllCards {
  characters: ArrayDeObjetos[]
  error: string
}

const AllCards = ({ characters = [], error = '' }: PropsAllCards) => {
  return (
    <div className='grid grid-cols-3'>
      {error.length !== 0 ? (
        <div className='w-full flex justify-center items-center rounded-lg relative max-w-[600px] h-[400px] col-start-2'>
          <h1 className='w-[216px]'>No results found.</h1>
        </div>
      ) : (
        (characters.length !== 0 ? characters : arrayDeObjetos)?.map(
          (character) => {
            return (
              <Link key={character.id} href={`/characters/${character.id}`}>
                <Card character={character} />
              </Link>
            )
          }
        )
      )}
    </div>
  )
}

export default AllCards
