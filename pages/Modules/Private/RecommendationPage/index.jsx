import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import CategoryActivities from 'sections/Private/Recommentation/CategoryActivitySection'
import OtherActivitiesSection from 'sections/Private/Recommentation/OtherActivitiesSection'
const axios = require('axios')

const RecommendationPage = () => {
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
  return (
    <div className={styles.main} >
      <CategoryActivities dbCategory={dbCategory} dbActivity={dbActivity} />
      <OtherActivitiesSection/>
    </div>
  )
}

export default RecommendationPage
