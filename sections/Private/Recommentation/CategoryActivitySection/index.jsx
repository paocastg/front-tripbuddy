import React, { useState } from 'react'
import CategoryActivityCard from 'components/CategoryActivityCard'
import Button from 'components/Button'
import H2 from 'components/H2'
import styles from './index.module.scss'
import { useRouter } from 'next/router'

const CategoryActivities = ({
  dbCategory,
  dbActivity,
  handleClickNext,
  handleClickBefore,
  saveCategoryActivity,
  deleteCategoryActivity
}) => {
  const [selectOtherActivities, setSelectOtherActivities] = useState(false)
  const router = useRouter()

  // console.log(selectOtherActivities)
  return (
    <section className={styles.section}>
      <H2>Seleccione la categoria que mejor describe tu viaje</H2>
      <div>
        {dbCategory &&
          dbCategory.map((el) => (
            <CategoryActivityCard
              key={el.id}
              id={el.id}
              name={el.name}
              img={el.image}
              saveCategoryActivity={saveCategoryActivity}
              deleteCategoryActivity={deleteCategoryActivity}
              setSelectOtherActivities={setSelectOtherActivities}
              field="category"
            />
          ))}
      </div>
      <H2>Seleccione el tipo de actividades que te interesa realizar</H2>
      <div>
        {dbActivity &&
          dbActivity.map((el) => (
            <CategoryActivityCard
              key={el.id}
              name={el.name}
              id={el.id}
              img={el.image}
              saveCategoryActivity={saveCategoryActivity}
              deleteCategoryActivity={deleteCategoryActivity}
              setSelectOtherActivities={setSelectOtherActivities}
              field="activity"
            />
          ))}
      </div>
      <div>
        <Button onClick={handleClickBefore}>Atrás</Button>
        <Button onClick={selectOtherActivities ? handleClickNext : () => router.push('/confirmation')}>Siguiente</Button>
      </div>
    </section>
  )
}

export default CategoryActivities
