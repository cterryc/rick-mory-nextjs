export const getAllCharacters = async (get?: string) => {
  console.log(get)
  const getAllCharacters = await fetch(
    `https://rickandmortyapi.com/api/character`
  )
  const response = await getAllCharacters.json()
  console.log(response)
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
