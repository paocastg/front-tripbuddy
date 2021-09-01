import api from 'assets/Utils/api'
import { createContext, useEffect, useState } from 'react'

const SelectTripContext = createContext()

const SelectTripProvider = ({ children }) => {
  const [isActiveDestiny, setIsActiveDestiny] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dbCategory, setDbCategory] = useState(null)
  const [dbActivity, setDbActivity] = useState(null)
  const [dbDestiny, setDbDestiny] = useState('')

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

  const data = {
    isActiveDestiny,
    setIsActiveDestiny,
    loading,
    dbCategory,
    dbActivity,
    dbDestiny
  }
  return <SelectTripContext.Provider value={data}>{children}</SelectTripContext.Provider>
}
export { SelectTripProvider }
export default SelectTripContext
