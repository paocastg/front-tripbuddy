import Wrapper from 'layout/Wrapper'
import { useState } from 'react'
import { SelectTripProvider } from 'context/SelectTripContext'

/* Sections */
import SelectSection from 'sections/Private/SelectTrip/SelectSection'
import FormSection from 'sections/Private/SelectTrip/FormSection'
import CategoryActivitiesSection from 'sections/Private/SelectTrip/CategoryActivitiesSection'
import OtherActivitiesSection from 'sections/Private/SelectTrip/OtherActivitiesSection'
import ConfirmationSection from 'sections/Private/SelectTrip/ConfirmationSection'

const SelectTripPage = () => {
  const [showSection, setShowSection] = useState(0)
  // const [state, dispatch] = useReducer(quotationReducer, quotationInitialState)

  const componentChildren = [
    <SelectSection
      key="0"
      setShowSection={setShowSection}
    />,
    <FormSection
      key="1"
      setShowSection={setShowSection}
    />,
    <CategoryActivitiesSection
      key="2"
      setShowSection={setShowSection}
    />,
    <OtherActivitiesSection key="3" setShowSection={setShowSection} />,
    <ConfirmationSection key="4" setShowSection={setShowSection} />
  ]
  return (
    <Wrapper>
      <SelectTripProvider>
          {componentChildren.filter((el, index) => index === showSection)}
      </SelectTripProvider>
    </Wrapper>
  )
}

export default SelectTripPage
