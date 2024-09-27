import { Dispatch, SetStateAction } from "react"

export interface Character {
  name: string
  status: string
  id: number
  location: Record<string, string>
  image: string
  origin: Record<string, string>
  species: string
  gender: string
}

export interface Props {
  character: Character
}

export interface SearchBarProps {
  setCharacters: Dispatch<SetStateAction<Character[]>>
}

export interface Filtering {
  status: string
  species: string
  gender: string
}

export interface FilterProps {
  filter: Filtering
}
