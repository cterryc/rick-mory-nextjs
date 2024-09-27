import React, { useEffect, useState } from "react"
import { SearchBarProps } from "./interface"
import { getAllCharacters } from "@/app/Services/getData.service"

const SearchBar = ({ setCharacters }: SearchBarProps) => {
  const [name, setName] = useState<string>("")

  useEffect(() => {
    getAllCharacters()
      // .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCharacters(data.results)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const getCharacters = await getAllCharacters()
    setCharacters(getCharacters.results)
  }
  return (
    <section className="flex flex-col items-center gap-2 p-4">
      <h1 className="text-4xl">Characters</h1>
      <form onSubmit={onSubmit} className="flex gap-2 ">
        <input
          type="text"
          placeholder="Search chracter..."
          value={name}
          onChange={onChange}
          className="h-10 px-2 rounded-lg w-[250px]"
        />
        <button className="bg-gray-500 px-3 rounded-lg hover:bg-slate-700">
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchBar
