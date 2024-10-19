export const getAllCharacters = async (get?: string) => {
  const getAllCharacters = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${get}`
  )
  const response = await getAllCharacters.json()
  // console.log(response)
  return response
}

export const getOneCharacters = async (get?: string) => {
  const getOneCharacters = await fetch(
    `https://rickandmortyapi.com/api/character/${get}`
  )
  const response = await getOneCharacters.json()
  console.log(response)
  return response
}

export const getPageCharacters = async (
  get?: number | string,
  name?: string,
  status?: string,
  species?: string,
  gender?: string
) => {
  console.log(get, name, status, species, gender)
  const getAllCharacters = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}&page=${get}&status=${status}&species=${species}&gender=${gender}`
  )
  const response = await getAllCharacters.json()
  if (response.error) {
    return response
  } else {
    return response
  }
}

export const getByNameCharacters = async (get?: string | number) => {
  console.log(get)
  const getAllCharacters = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${get}`
  )
  const response = await getAllCharacters.json()
  console.log(response)
  return response
}
