import React, { useState, useEffect } from 'react'
// import concierto from 'assets/images/icon-conciertos.png'
import styles from './index.module.scss'

const CategoryActivityCard = ({
  name,
  saveCategoryActivity,
  deleteCategoryActivity,
  img,
  field,
  id
}) => {
  const [selected, setSelected] = useState(false)

  const data = { id, name }

  // Fix: Añadir 'tripbuddy' a la url de image que viene del api.
  const imgSplitted = img && img.split('/')
  img && imgSplitted.splice(3, 0, 'tripbuddy').join('/')
  const newImg = img && imgSplitted.join('/')

  useEffect(() => {
    const myQuotationInit = JSON.parse(localStorage.getItem('myQuotation')) || {
      activity: [],
      category: []
    }

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

  const handleIconClick = (e) => {
    if (!selected) {
      // console.log(data)
      saveCategoryActivity(data, field)
    } else {
      // console.log(data)
      deleteCategoryActivity(data, field)
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
