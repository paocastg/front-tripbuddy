/* layout */
import Wrapper from 'layout/Wrapper'

/* sections */
import HeroImageSection from 'sections/Public/Home/HeroImageSection'
import TripStepSection from 'sections/Public/Home/TripStepSection'

const HomePage = ({ name }) => {
  return (
    <Wrapper>
      <HeroImageSection />
      <TripStepSection />
    </Wrapper>
  )
}

export default HomePage
