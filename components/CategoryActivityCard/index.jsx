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

  useEffect(() => {
    const myQuotationInit = JSON.parse(localStorage.getItem('myQuotation')) || {
      activity: [],
      category: []
    }
    console.log(myQuotationInit)

    if (myQuotationInit.activity.includes(id) && field === 'activity') {
      setSelected(true)
    } else if (myQuotationInit.category.includes(id) && field === 'category') {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [])

  const handleIconClick = (e) => {
    if (!selected) {
      saveCategoryActivity(id, field)
    } else {
      deleteCategoryActivity(id, field)
    }
    setSelected((prev) => !prev)
    // other activities
    if (!selected && name === 'Otras Actividades') {
      setSelectOtherActivities(true)
      // console.log(selected, name)
    } else {
      setSelectOtherActivities(false)
      // console.log('false')
    }
  }
  return (
    <div
      className={!selected ? styles.card : styles.selectedCard}
      onClick={handleIconClick}
    >
      <img className={styles.image} src={img} alt="conciertos" />
      <span className={styles.text}>{name}</span>
    </div>
  )
}

export default CategoryActivityCard
