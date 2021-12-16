import { useState, useEffect } from 'react'

export const useIntervalDate = (pStartDate, pEndDate) => {
  const [rangeDate, setRangeDate] = useState(0)
  useEffect(() => {
    const intervalDate = () => {
      if (pStartDate === '' || pEndDate === '') {
        return '--'
      }
      const startDate = new Date(pStartDate)
      startDate.setMinutes(
        startDate.getMinutes() + startDate.getTimezoneOffset()
      )
      const endDate = new Date(pEndDate)
      endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset())
      const resta = endDate.getTime() - startDate.getTime()
      if (resta < 0) {
        return '--'
      }
      return Math.round(resta / (1000 * 60 * 60 * 24))
    }
    setRangeDate(intervalDate())
  }, [pStartDate, pEndDate])
  return rangeDate
}
