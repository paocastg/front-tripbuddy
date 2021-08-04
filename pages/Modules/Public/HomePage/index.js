import React, { useEffect } from 'react'
import Wrapper from 'layout/Wrapper'
import { CDN_PATH } from 'assets/Utils/Constants'

const HomePage = ({ name }) => {
  // console.log(CDN_PATH)
  useEffect(() => {
    console.log('window', window)
  }, [])
  return (
    <Wrapper>
        <img style={{ width: '100%' }} src={`${CDN_PATH}/bg-empieza-viaje.svg`} />
        <h1>HomePage {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quis
          labore deleniti modi hic facere veniam eius fuga fugiat porro? Modi
          corrupti ea facilis maxime reprehenderit sequi excepturi minus
          assumenda!
        </p>
    </Wrapper>
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
