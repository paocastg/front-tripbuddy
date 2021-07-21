import React, { useEffect } from 'react'

const HomePage = ({ name }) => {
  useEffect(() => {
    console.log('window', window)
  }, [])
  return (
    <div>
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
