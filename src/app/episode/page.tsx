'use client'
import AllCards from '@/components/AllCards/AllCards'
import HeadTitle from '@/components/HeadTitle/HeadTitle'
import PickType from '@/components/PickType/PickType'
import React, { useEffect, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import ReactPaginate from 'react-paginate'
import { EpisodeProps } from '@/components/interface'
import { ArrayDeObjetos } from '../Services/object.service'

const Episode = () => {
  const [characters, setCharacters] = useState<ArrayDeObjetos[]>([])
  const [personajes, setPersonajes] = useState<string[]>([])
  const [pages, setPages] = useState<number>(0)
  const [numberPage, setNumberPage] = useState<number>(0)
  const [info, setInfo] = useState({})
  const [results, setResults] = useState<EpisodeProps[]>([])
  const [error, setError] = useState<string>('')
  const [location, setLocation] = useState<EpisodeProps | null>(null)

  useEffect(() => {
    console.log(numberPage)
  }, [numberPage])

  const handlePageClick = async ({ selected }: Record<string, number>) => {
    console.log('esto es ==> handlePageClick', selected)
    // setCharacters([])
    setNumberPage(selected)
    if (personajes.length <= 0) {
      setCharacters([])
    } else {
      // peticion Promise.all para obtener los personajes segun la pagina actual
      const firstCount = selected * 20
      const secondCount = (selected + 1) * 20
      const selectCharacters = await Promise.all(
        personajes.slice(firstCount, secondCount).map((url) => fetch(url)) ?? []
      )
      const data = await Promise.all(selectCharacters.map((res) => res.json()))
      setCharacters(data)
    }
    setError('')
  }

  useEffect(() => {
    if (results.length > 0) {
      const findEpisode = results[0]
      setPersonajes(findEpisode.characters as string[])
      setLocation(findEpisode)
      if (findEpisode.characters?.length) {
        const pages = Math.ceil(findEpisode.characters?.length / 20)
        setPages(pages)
      }
      const fetchCharacters = async () => {
        try {
          // Aseguramos que 'residents' no es undefined usando el operador ?? []
          const responses = await Promise.all(
            findEpisode.characters?.slice(0, 20).map((url) => fetch(url)) ?? []
          )

          Promise.all(responses.map((res) => res.json())).then(
            (response: ArrayDeObjetos[]) => {
              console.log(response)
              setCharacters(response)
            }
          )
        } catch (error) {
          console.error('Error fetching characters:', error)
        }
      }
      fetchCharacters()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results])

  return (
    <section className='flex flex-col items-center'>
      <HeadTitle
        episodeLocationName={location?.name}
        dateDimension={location?.air_date}
        seasonType={location?.episode}
      />
      <div className='flex justify-center gap-5'>
        <PickType
          type='Episode'
          info={info}
          setInfo={setInfo}
          setResults={setResults}
          setNumberPage={setNumberPage}
        />
        <AllCards characters={characters} error={error} />
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
        pageCount={pages}
        previousLabel={
          <FaArrowCircleLeft
            className='w-full h-full text-blue-500 hover:text-gray-800'
            size={35}
          />
        }
        activeLinkClassName='bg-gray-400 rounded-[8px]'
        containerClassName='flex gap-3 mb-12 mt-8'
        forcePage={numberPage}
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

export default Episode
