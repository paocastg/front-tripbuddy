import api from 'assets/Utils/api'
import { createContext, useEffect, useReducer, useState } from 'react'
import { quotationInitialState, quotationReducer } from 'reducers/quotationReducer'

const SelectTripContext = createContext()

const SelectTripProvider = ({ children }) => {
  const [isActiveDestiny, setIsActiveDestiny] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dbCategory, setDbCategory] = useState(null)
  const [dbActivity, setDbActivity] = useState(null)
  const [dbDestiny, setDbDestiny] = useState('')
  const [state, dispatch] = useReducer(quotationReducer, quotationInitialState)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const [category, activity, destiny] = await Promise.all([
        api.getCategory(),
        api.getActivity(),
        api.getDestiny()
      ])

      setDbCategory(category)
      setDbActivity(activity)
      setDbDestiny(destiny)

      setLoading(false)
    }

    fetchData()
  }, [])

  // const addQuotation = (data, field, manyOptions = false) => {
  //   dispatch({ type: TYPES.UPDATE_ONE_QUOTATION, payload: { field, data, manyOptions } })
  // }
  // const removeQuotation = (data, field, manyOptions = false) => {
  //   dispatch({ type: TYPES.UPDATE_ONE_QUOTATION, payload: { field, data, manyOptions } })
  // }

  const data = {
    isActiveDestiny,
    setIsActiveDestiny,
    loading,
    dbCategory,
    dbActivity,
    dbDestiny,
    state,
    dispatch
  }
  return <SelectTripContext.Provider value={data}>{children}</SelectTripContext.Provider>
}
export { SelectTripProvider }
export default SelectTripContext
