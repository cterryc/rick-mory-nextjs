import { EpisodeProps } from '../interface'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface PickTypeProps {
  type: string
  info: { count?: number } // Añade el tipo correcto para info
  setInfo: Dispatch<SetStateAction<object>>
  setResults: Dispatch<SetStateAction<EpisodeProps[]>> // Asegúrate de que sea un array de objetos
  setNumberPage: Dispatch<SetStateAction<number>>
}

const PickType = ({
  type,
  info,
  setInfo,
  setResults,
  setNumberPage,
}: PickTypeProps) => {
  const [countNumber, setCountNumber] = useState<number[]>([])

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/${type.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.info)
        console.log(data)
        setResults(data.results)
      })
  }, [type, setInfo, setResults])

  useEffect(() => {
    if (info.count) {
      const newCountNumber = Array.from(Array(info.count).keys()).map(
        (i) => i + 1
      )
      setCountNumber(newCountNumber)
    }
  }, [info.count])

  const getLocation = (ele: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberPage(0)
    const target = ele.target as HTMLSelectElement
    setResults([])
    fetch(
      `https://rickandmortyapi.com/api/${type.toLowerCase()}/${target.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        // setInfo(data.info)
        console.log(
          `https://rickandmortyapi.com/api/${type.toLowerCase()}/${
            target.value
          }`,
          [data]
        )
        setResults([data])
      })
  }

  return (
    <section>
      <select
        onChange={(e) => getLocation(e)}
        className='text-blue-800 w-44 flex justify-center items-center p-2 rounded-lg font-bold'
      >
        {countNumber.map((ele) => (
          <option key={ele} value={ele}>
            {type} - {ele}
          </option>
        ))}
      </select>
    </section>
  )
}

export default PickType
