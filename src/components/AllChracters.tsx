'use client'

import React, { useEffect, useState } from 'react'
import Card from './Card'
import SearchBar from './SerchBar'
import { Character } from './interface'
import Filter from './Filter/Filter'
import { arrayDeObjetos } from '@/app/Services/object.service'
import Link from 'next/link'
// import { usePathname } from "next/navigation"
import ReactPaginate from 'react-paginate'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import { getPageCharacters } from '@/app/Services/getData.service'

const AllChracters = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [pagesFromApi, setPagesFromApi] = useState(42)
  const [numberPage, setNumberPage] = useState(1)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState({
    name: '',
    status: '',
    species: '',
    gender: '',
  })
  // const path = usePathname()

  const handlePageClick = async ({ selected }: Record<string, number>) => {
    console.log('esto es seelcted ==>', selected)
    setNumberPage(selected + 1)
    setCharacters([])
    const chracters = await getPageCharacters(
      selected + 1,
      filter.name,
      filter.status,
      filter.species,
      filter.gender
    )
    setCharacters(chracters.results)
  }

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <section className='flex flex-col items-center'>
      <SearchBar
        setCharacters={setCharacters}
        setPagesFromApi={setPagesFromApi}
        setFilter={setFilter}
        filter={filter}
        setNumberPage={setNumberPage}
        setError={setError}
      />
      <div className='flex justify-center gap-5'>
        <Filter
          setCharacters={setCharacters}
          setFilter={setFilter}
          filter={filter}
          setError={setError}
          setPagesFromApi={setPagesFromApi}
        />
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
      </div>
      <ReactPaginate
        breakLabel={
          <BsThreeDots className='w-full h-full text-blue-500' size={35} />
        }
        nextLabel={
          <FaArrowCircleRight
            className='w-full h-full text-blue-500 hover:text-gray-800'
            size={35}
          />
        }
        onPageChange={handlePageClick}
        marginPagesDisplayed={3}
        pageCount={pagesFromApi}
        previousLabel={
          <FaArrowCircleLeft
            className='w-full h-full text-blue-500 hover:text-gray-800'
            size={35}
          />
        }
        activeLinkClassName='bg-gray-400 rounded-[8px]'
        containerClassName='flex gap-3 mb-12 mt-8'
        forcePage={numberPage - 1}
        pageLinkClassName='bg-blue-500 p-2 px-4 flex justify-center items-center rounded-[8px] hover:bg-gray-800'
        // pageRangeDisplayed={3}
        // pageLabelBuilder={(event) => console.log(event)}
        // renderOnZeroPageCount={(event) => console.log(event)}
        // activeClassName="bg-gray-400 rounded-[8px]"
        // className="m-2"
        // pageLinkClassName="page-link"
      />
    </section>
  )
}

export default AllChracters
