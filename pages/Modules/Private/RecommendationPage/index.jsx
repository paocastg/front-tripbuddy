import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Button from 'components/Button'
import CategoryActivities from 'sections/Private/Recommentation/CategoryActivitySection'
import OtherActivitiesSection from 'sections/Private/Recommentation/OtherActivitiesSection'
const axios = require('axios')

const RecommendationPage = () => {
  const [toggleOne, setToggleOne] = useState(false)
  const [toggleTwo, setToggleTwo] = useState(false)
  const [dbCategory, setDbCategory] = useState(null)
  const [dbActivity, setDbActivity] = useState(null)

  const urlCategory = 'http://127.0.0.1:8000/category/'
  const urlActivity = 'http://127.0.0.1:8000/activity/'

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await axios.get(urlCategory)
        const json = await res.data
        console.log(json)
        setDbCategory(json)
      } catch (err) {
        const message = err.statusText
        console.log(message)
      }
    }

    const getActivity = async () => {
      try {
        const res = await axios.get(urlActivity)
        const json = await res.data
        console.log(json)
        setDbActivity(json)
      } catch (err) {
        const message = err.statusText
        console.log(message)
      }
    }
    getCategory()
    getActivity()
  }, [])

  const handleToggleOne = () => {
    setToggleOne((prev) => !prev)
  }

  const handleToggleTwo = () => {
    setToggleTwo((prev) => !prev)
  }

  return (
    <div className={styles.main}>
      <div
        className={
          toggleOne ? styles.isActiveForm : styles.hiddenSectionCategory
        }
      >
        <h2>Formulario de Destinos</h2>
        <section>
          <Button onClick={() => console.log('Atrás')}>Atrás</Button>
          <Button onClick={handleToggleOne}>Siguiente</Button>
        </section>
      </div>
      <div
        className={
          toggleTwo
            ? styles.hiddenSectionCategory
            : toggleOne
              ? styles.hiddenSectionForm
              : styles.isActiveCategory
        }
      >
        <CategoryActivities
          dbCategory={dbCategory}
          dbActivity={dbActivity}
          handleClickNext={handleToggleTwo}
          handleClickBefore={handleToggleOne}
        />
      </div>
      <div className={toggleTwo ? styles.isActive : styles.hiddenSection}>
        <OtherActivitiesSection handleClickBefore={handleToggleTwo} />
      </div>
    </div>
  )
}

export default RecommendationPage
