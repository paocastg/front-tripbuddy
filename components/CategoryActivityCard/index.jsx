import { TYPES } from 'actions/quotationActions'
import SelectTripContext from 'context/SelectTripContext'
import React, { useState, useEffect, useContext } from 'react'
// import concierto from 'assets/images/icon-conciertos.png'
import styles from './index.module.scss'

const CategoryActivityCard = ({
  name,
  img,
  field,
  id
}) => {
  const [selected, setSelected] = useState(false)
  const { state, dispatch } = useContext(SelectTripContext)

  // Guardar en localStorage
  localStorage.setItem('myQuotation', JSON.stringify(state))

  const data = { id, name }

  // Fix: Añadir 'tripbuddy' a la url de image que viene del api.
  const imgSplitted = img && img.split('/')
  img && imgSplitted.splice(3, 0, 'tripbuddy').join('/')
  const newImg = img && imgSplitted.join('/')

  useEffect(() => {
    const myQuotationInit = JSON.parse(localStorage.getItem('myQuotation')) || state

    // cargamos los card seleccionados anteriormente.
    const inActivity = myQuotationInit.activity.find((el) => el.id === id)
    const inCategory = myQuotationInit.category.find((el) => el.id === id)
    if (inActivity && field === 'activity') {
      setSelected(true)
    } else if (inCategory && field === 'category') {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [])

  const handleIconClick = () => {
    if (!selected) {
      dispatch({
        type: TYPES.UPDATE_ONE_QUOTATION,
        payload: { field, data, manyOptions: true }
      })
    } else {
      dispatch({
        type: TYPES.REMOVE_ONE_QUOTATION,
        payload: { field, data, manyOptions: true }
      })
    }
    setSelected((prev) => !prev)
  }
  return (
    <div
      className={!selected ? styles.card : styles.selectedCard}
      onClick={handleIconClick}
    >
      <img className={styles.image} src={newImg} alt={name} />
      <span className={styles.text}>{name}</span>
    </div>
  )
}

export default CategoryActivityCard
