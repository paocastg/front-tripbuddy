import SelectSection from 'sections/Private/Select/SelectSection'
import Wrapper from 'layout/Wrapper'
import { useState } from 'react'

const SelectPage = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

  console.log(toggle)

  return (
    <Wrapper>
      <section>
        {toggle
          ? <div>
          <h2>primer Hello World</h2>
        </div>
          : <div>
          <h2>segundo Hello World</h2>
        </div>}
        <div>
          <button onClick={handleToggle} >Toggle render</button>
        </div>
      </section>
    </Wrapper>
  )
}

export default SelectPage
