import React, { useEffect } from 'react'

const HomePage = ({ name }) => {
  useEffect(() => {
    console.log('window', window)
  }, [])
  return (
    <div>
      <h1>HomePage {name}</h1>
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
