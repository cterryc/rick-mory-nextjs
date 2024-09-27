import React from "react"
import ButtonFilter from "./Button/Button"

const Filter = () => {
  const status = ["Alive", "Dead", "Unknown"]
  const species = ["Human", "Animal", "Alien"]
  const gender = ["Male", "Female", "Genderless"]

  return (
    <section className="flex justify-center m-1 p-2 relative w-[300px]">
      <main className="flex items-center flex-col fixed border-2 p-3 py-5 rounded-lg">
        <h1 className="text-2xl font-bold">Filters</h1>
        <button className="bg-red-900 rounded-lg p-1 m-2 px-3">
          Clear Filters
        </button>
        <div>
          <h1 className="px-3">Status</h1>
          <div className="flex gap-2 px-2">
            {status.map((ele, index) => {
              return <ButtonFilter ele={ele} index={index} />
            })}
          </div>
        </div>
        <br />
        <div>
          <h1 className="px-3">Species</h1>
          <div className="flex gap-2 px-2">
            {species.map((ele, index) => {
              return <ButtonFilter ele={ele} index={index} />
            })}
          </div>
        </div>
        <br />
        <div>
          <h1 className="px-3">Gender</h1>
          <div className="flex gap-2 px-2">
            {gender.map((ele, index) => {
              return <ButtonFilter ele={ele} index={index} />
            })}
          </div>
        </div>
        <button className="bg-green-600 w-full mt-5 py-2 rounded-lg">
          Filter
        </button>
      </main>
    </section>
  )
}

export default Filter
