import { getOneCharacters } from '@/app/Services/getData.service'
import OneCharacter from '@/components/OneCharacter'

interface ParamsProps {
  params: Record<string, string>
}

const Character = async ({ params }: ParamsProps) => {
  const character = await getOneCharacters(params.id)
  return (
    <section className='flex justify-center'>
      <OneCharacter character={character} />
    </section>
  )
}

export default Character
