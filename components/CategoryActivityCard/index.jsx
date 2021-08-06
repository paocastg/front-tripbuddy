import React, { useState, useEffect } from 'react'
// import concierto from 'assets/images/icon-conciertos.png'
import styles from './index.module.scss'

const CategoryActivityCard = ({
  name,
  saveCategoryActivity,
  deleteCategoryActivity,
  setSelectOtherActivities,
  img,
  field,
  id
}) => {
  const [selected, setSelected] = useState(false)

  const data = { id, name }

  useEffect(() => {
    const myQuotationInit = JSON.parse(localStorage.getItem('myQuotation')) || {
      activity: [],
      category: []
    }
    console.log(myQuotationInit.activity)
    console.log(myQuotationInit.activity.find((el) => el.id === id))

    // cargamos los card seleccionados anteriormente.
    const inActivity = myQuotationInit.activity.find((el) => el.id === id)
    const inCategory = myQuotationInit.category.find((el) => el.id === id)
    if (inActivity && field === 'activity') {
      console.log('dentro')
      setSelected(true)
    } else if (inCategory && field === 'category') {
      console.log('dentro')
      setSelected(true)
    } else {
      console.log('no dentro')
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
    // other activities
    if (!selected && name === 'Otras Actividades') {
      setSelectOtherActivities(true)
      // console.log(selected, name)
    } else {
      setSelectOtherActivities(false)
    }
  }
  return (
    <div
      className={!selected ? styles.card : styles.selectedCard}
      onClick={handleIconClick}
    >
      <img className={styles.image} src={img} alt={name} />
      <span className={styles.text}>{name}</span>
    </div>
  )
}

export default CategoryActivityCard
