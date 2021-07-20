import React, { useState } from 'react'
// import concierto from 'assets/images/icon-conciertos.png'
import styles from './index.module.scss'

const CategoryActivityCard = ({
  name,
  AddCategoryAndActivitySelected,
  img,
  id
}) => {
  const [selected, setSelected] = useState(false)

  const handleIconClick = (e) => {
    // AddCategoryAndActivitySelected(name)
    setSelected((prev) => !prev)
  }
  return (
    <div
      className={!selected ? styles.card : styles.selectedCard}
      onClick={handleIconClick}
    >
      <img className={styles.image} src="./assets/images/icon-conciertos.png" alt="conciertos" />
      <span className={styles.text}>{name}</span>
    </div>
  )
}

export default CategoryActivityCard
