// import { Filtering } from "@/components/interface"
import React, { Dispatch, SetStateAction } from 'react'

interface Filtering {
  status: string
  species: string
  gender: string
  name: string
}

interface Props {
  type: keyof Filtering
  ele: string
  index: number
  setFilters: Dispatch<SetStateAction<Filtering>>
  Filters: Filtering
}

const ButtonFilter = ({ ele, index, setFilters, Filters, type }: Props) => {
  // console.log("fuerClick ==>", Filters)
  const handleClick = () => {
    // console.log("hancleCLick ==>", Filters)
    if (Filters[type] === ele) {
      setFilters({ ...Filters, [type]: '' })
    } else {
      setFilters({ ...Filters, [type]: ele })
    }
  }
  return (
    <button
      key={index}
      className={`px-2 border-2 rounded-lg ${
        Filters[type] === ele && 'bg-green-500'
      }`}
      id={ele.toLowerCase()}
      onClick={handleClick}
    >
      {ele}
    </button>
  )
}

export default ButtonFilter
