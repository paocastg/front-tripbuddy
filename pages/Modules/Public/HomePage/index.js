import React, { useEffect } from 'react'
import { CDN_PATH } from 'assets/Utils/Constants'

const HomePage = ({ name }) => {
  useEffect(() => {
    console.log('window', window)
  }, [])
  return (
    <div>
      <img src={`${CDN_PATH}/bg-empieza-viaje.svg`} />
      <h1>HomePage {name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quis
        labore deleniti modi hic facere veniam eius fuga fugiat porro? Modi
        corrupti ea facilis maxime reprehenderit sequi excepturi minus
        assumenda!
      </p>
    </div>
  )
}

export async function getStaticProps () {
  const name = 'Ana'

  return {
    props: {
      name
    }
  }
}

export default HomePage
