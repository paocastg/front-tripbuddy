import Wrapper from 'layout/Wrapper'
import { useReducer, useState } from 'react'
import { SelectTripProvider } from 'context/SelectTripContext'

/* Sections */
import SelectSection from 'sections/Private/SelectTrip/SelectSection'
import FormSection from 'sections/Private/SelectTrip/FormSection'
import CategoryActivitiesSection from 'sections/Private/SelectTrip/CategoryActivitiesSection'
import OtherActivitiesSection from 'sections/Private/SelectTrip/OtherActivitiesSection'
import ConfirmationSection from 'sections/Private/SelectTrip/ConfirmationSection'
import { quotationInitialState, quotationReducer } from 'reducers/quotationReducer'
import { TYPES } from 'actions/quotationActions'

const initialQuotation = {
  activity: [],
  category: []
}

const SelectTripPage = () => {
  const [showSection, setShowSection] = useState(0)
  const [myQuotation, setMyQuotation] = useState(initialQuotation)
  const [state, dispatch] = useReducer(quotationReducer, quotationInitialState)

  console.log('state', state)

  const saveCategoryActivity = (data, field) => {
    dispatch({ type: TYPES.UPDATE_ONE_QUOTATION, payload: { field, data, manyOptions: true } })
    // save id in localStorage
    const quotation = {
      ...myQuotation,
      [field]: [...myQuotation[field], data]
    }

    // update localStorage
    setMyQuotation(quotation)
    localStorage.setItem('myQuotation', JSON.stringify(quotation))
  }

  const deleteCategoryActivity = (data, field) => {
    dispatch({ type: TYPES.REMOVE_ONE_QUOTATION, payload: { field, data, manyOptions: true } })
    // delete id in localStorage
    const fieldFiltered = myQuotation[field].filter((el) => el.id !== data.id)
    const quotation = {
      ...myQuotation,
      [field]: fieldFiltered
    }

    // update locaStorage
    setMyQuotation(quotation)
    localStorage.setItem('myQuotation', JSON.stringify(quotation))
  }

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
      saveCategoryActivity={saveCategoryActivity}
      deleteCategoryActivity={deleteCategoryActivity}
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
