import React from 'react'
import styles from './index.module.scss'

/* Components */
import Button from 'components/Button'
import CategoryActivityCard from 'components/CategoryActivityCard'
import H2 from 'components/H2'

const CategoryActivitiesSection = ({
  dbCategory,
  dbActivity,
  handleClickNext,
  handleClickBefore,
  saveCategoryActivity,
  deleteCategoryActivity
}) => {
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
              name={el.nombre}
              img={el.FIELDNAME}
              saveCategoryActivity={saveCategoryActivity}
              deleteCategoryActivity={deleteCategoryActivity}
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
              name={el.nombre}
              id={el.id}
              img={el.FIELDNAME}
              saveCategoryActivity={saveCategoryActivity}
              deleteCategoryActivity={deleteCategoryActivity}
              field="activity"
            />
          ))}
      </div>
      <div>
        <Button onClick={handleClickBefore}>Atrás</Button>
        <Button onClick={handleClickNext}>Siguiente</Button>
      </div>
    </section>
  )
}

export default CategoryActivitiesSection
