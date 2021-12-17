import { useState, useEffect } from 'react'

export const useTransformDate = (pDate) => {
  const [date, setDate] = useState(null)

  useEffect(() => {
    const transformDate = () => {
      if (pDate === '') {
        return '...'
      }
      const newDate = new Date(pDate)
      newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset())
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      const dateText = newDate.toLocaleDateString('es-ES', options)
      const dateSplited = dateText.split(' de ')
      return `${dateSplited[1].charAt(0).toUpperCase()}${dateSplited[1].slice(
        1
      )} ${dateSplited[0]}, ${dateSplited[2]}`
    }
    setDate(transformDate())
  }, [pDate])

  return date
}
