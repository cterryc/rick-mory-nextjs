import { usePathname } from 'next/navigation'
import React from 'react'

const HeadTitle = ({
  episodeLocationName = 'resguardo',
  dateDimension = 'Resguardo',
  seasonType = 'resguardo',
}) => {
  const path = usePathname()
  return (
    <section className='flex flex-col items-center gap-2 p-4 max-h-[120px] h-[120px]'>
      <main>
        {path === '/episode' ? (
          <div>
            <p className='text-3xl'>
              Episode name: {<span>{episodeLocationName}</span>}
            </p>
            <h3>Air Date: {dateDimension}</h3>
            <h3>Episode: {seasonType}</h3>
          </div>
        ) : (
          <div>
            <p>
              <span>Location {episodeLocationName}</span>
            </p>
            <h3>Dimension: {dateDimension}</h3>
            <h3>Type: {seasonType}</h3>
          </div>
        )}
      </main>
    </section>
  )
}

export default HeadTitle
