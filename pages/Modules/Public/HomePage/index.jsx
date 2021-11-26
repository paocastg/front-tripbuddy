/* layout */
import Wrapper from 'layout/Wrapper'
import { NextSeo } from 'next-seo'

/* sections */
import HeroImageSection from 'sections/Public/Home/HeroImageSection'
import TripStepSection from 'sections/Public/Home/TripStepSection'

const HomePage = ({ name }) => {
  return (
    <Wrapper>
      <NextSeo
        title="Home"
        description="A short description goes here."
      />
      <HeroImageSection />
      <TripStepSection />
    </Wrapper>
  )
}

export default HomePage
