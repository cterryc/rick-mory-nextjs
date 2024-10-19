import { Dispatch, SetStateAction } from 'react'

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

export interface Filtering {
  status: string
  species: string
  gender: string
  name: string
}

export interface SearchBarProps {
  setCharacters: Dispatch<SetStateAction<Character[]>>
  setPagesFromApi: Dispatch<SetStateAction<number>>
  setFilter: Dispatch<SetStateAction<Filtering>>
  filter: Filtering
  setNumberPage: Dispatch<SetStateAction<number>>
  setError: Dispatch<SetStateAction<string>>
}

export interface FilterProps {
  filter: Filtering
}

export interface EpisodeProps {
  id: number
  name: string
  type: string
  air_date?: string
  episode?: string
  characters?: Array<string>
  residents?: Array<string>
  url: string
  created: string
  dimension?: string
}
