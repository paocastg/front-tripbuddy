import React from 'react'

import styles from './index.module.scss'
import CategoryActivities from 'sections/Private/Recommentation/CategoryActivitySection'

const RecommendationPage = () => {
  return (
    <div className={styles.main} >
      <CategoryActivities/>
    </div>
  )
}

export default RecommendationPage
