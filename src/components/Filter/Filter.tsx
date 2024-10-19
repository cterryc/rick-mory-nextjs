import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ButtonFilter from './Button/Button'
import { Character, Filtering } from '../interface'
import { getPageCharacters } from '@/app/Services/getData.service'

const status = ['Alive', 'Dead', 'Unknown']
const species = ['Human', 'Animal', 'Alien']
const gender = ['Male', 'Female', 'Genderless']

interface FilterProps {
  setCharacters: Dispatch<SetStateAction<Character[]>>
  setFilter: Dispatch<SetStateAction<Filtering>>
  filter: Filtering
  setError: Dispatch<SetStateAction<string>>
  setPagesFromApi: Dispatch<SetStateAction<number>>
}

const Filter = ({
  setCharacters,
  setFilter,
  filter,
  setError,
  setPagesFromApi,
}: // setPagesFromApi
FilterProps) => {
  const [Filters, setFilters] = useState(filter)
  const nameFilter = filter.name || ''

  useEffect(() => {
    setFilters(filter)
  }, [filter])

  const filterNow = async () => {
    // name=${name}&page=${get}&status=${status}&species=${species}&gender=${gender}
    const characters = await getPageCharacters(
      '',
      nameFilter,
      Filters.status.toLowerCase(),
      Filters.species.toLowerCase(),
      Filters.gender.toLowerCase()
    )

    if (characters.error) {
      setError(characters.error)
    } else {
      setError('')
      setFilter({
        ...Filters,
        name: nameFilter,
      })
      setCharacters(characters.results)
      setPagesFromApi(characters.info.pages)
    }
  }

  const clearFilters = async () => {
    setFilters({
      status: '',
      species: '',
      gender: '',
      name: '',
    })
    setFilter({
      ...Filters,
      name: '',
    })
    console.log(nameFilter)
    const characters = await getPageCharacters('', '', '', '', '')
    setError('')
    setCharacters(characters.results)
    setPagesFromApi(characters.info.pages)
  }

  return (
    <section className='flex justify-center m-1 p-2 relative w-[300px]'>
      <main className='flex items-center flex-col fixed border-2 p-3 py-5 rounded-lg'>
        <h1 className='text-2xl font-bold'>Filters</h1>
        <button
          onClick={clearFilters}
          className='bg-red-900 rounded-lg p-1 m-2 px-3'
        >
          Clear Filters
        </button>
        <div>
          <h1 className='px-3'>Status</h1>
          <div className='flex gap-2 px-2'>
            {status.map((ele, index) => {
              return (
                <ButtonFilter
                  key={index}
                  ele={ele}
                  index={index}
                  setFilters={setFilters}
                  Filters={Filters}
                  type='status'
                />
              )
            })}
          </div>
        </div>
        <br />
        <div>
          <h1 className='px-3'>Species</h1>
          <div className='flex gap-2 px-2'>
            {species.map((ele, index) => {
              return (
                <ButtonFilter
                  key={index}
                  ele={ele}
                  index={index}
                  setFilters={setFilters}
                  Filters={Filters}
                  type='species'
                />
              )
            })}
          </div>
        </div>
        <br />
        <div>
          <h1 className='px-3'>Gender</h1>
          <div className='flex gap-2 px-2'>
            {gender.map((ele, index) => {
              return (
                <ButtonFilter
                  key={index}
                  ele={ele}
                  index={index}
                  setFilters={setFilters}
                  Filters={Filters}
                  type='gender'
                />
              )
            })}
          </div>
        </div>
        <button
          onClick={filterNow}
          className='bg-green-600 w-full mt-5 py-2 rounded-lg'
        >
          Filter
        </button>
      </main>
    </section>
  )
}

export default Filter
