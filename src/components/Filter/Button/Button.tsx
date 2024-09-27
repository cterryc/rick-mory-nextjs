import React from "react"

interface Props {
  ele: string
  index: number
}

const ButtonFilter = ({ ele, index }: Props) => {
  return (
    <button key={index} className="px-2 border-2 rounded-lg">
      {ele}
    </button>
  )
}

export default ButtonFilter
