import Link from 'next/link'
import React from 'react'

const routes = ['/', 'Episode', 'Location']

const NavBar = () => {
  return (
    <section className='w-full flex justify-center items-center bg-slate-800 h-11'>
      <nav className='flex justify-between max-w-[1000px] w-full'>
        <Link href='/' className='text-3xl'>
          Rick & Morty
        </Link>
        <div className='flex gap-6 items-center'>
          {routes.map((ele, i) => {
            return (
              <Link key={i} href={`/${ele.toLowerCase()}`}>
                {ele === '/' ? 'Characters' : ele}
              </Link>
            )
          })}
        </div>
      </nav>
    </section>
  )
}

export default NavBar
