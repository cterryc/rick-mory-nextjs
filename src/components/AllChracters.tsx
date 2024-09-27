"use client"

import React, { useState } from "react"
import Card from "./Card"
import SearchBar from "./SerchBar"
import { Character } from "./interface"
import Filter from "./Filter/Filter"
import { objeto } from "@/app/Services/object.service"
import Link from "next/link"

const AllChracters = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  const arrayDeObjetos = Array.from({ length: 20 }, (ele, index) => ({
    ...objeto,
    id: index,
  }))

  return (
    <section className="flex flex-col items-center">
      <SearchBar setCharacters={setCharacters} />
      <div className="flex justify-center gap-5">
        <Filter />
        <div className="grid grid-cols-3">
          {(characters.length !== 0 ? characters : arrayDeObjetos).map(
            (character) => {
              return (
                <Link key={character.id} href={`/characters/${character.id}`}>
                  <Card character={character} />
                </Link>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}

export default AllChracters
