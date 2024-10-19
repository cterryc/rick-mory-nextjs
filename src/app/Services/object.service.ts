const objeto = {
  name: '...',
  status: '...',
  id: 0,
  location: {
    name: 'loading all data plss wait a minute',
  },
  image: '/pictures/public.avif',
  origin: { name: '...' },
  species: '...',
  gender: '...',
}

export interface ArrayDeObjetos {
  name: string
  status: string
  id: number
  location: {
    name: string
  }
  image: string
  origin: { name: string }
  species: string
  gender: string
}

export const arrayDeObjetos = Array.from(
  { length: 20 },
  (ele, index): ArrayDeObjetos => ({
    ...objeto,
    id: index,
  })
)
