import React, { useContext } from 'react'
import styles from './index.module.scss'

/* Components */
import Button from 'components/Button'
import CategoryActivityCard from 'components/CategoryActivityCard'
import H2 from 'components/H2'
import SelectTripContext from 'context/SelectTripContext'

const CategoryActivitiesSection = ({ setShowSection }) => {
  const { dbCategory, dbActivity } = useContext(SelectTripContext)
  // console.log(selectOtherActivities)
  const handleBack = () => {
    setShowSection(1)
  }
  const handleNext = () => {
    setShowSection(3)
  }
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
              field="categoria"
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
              field="actividad"
            />
          ))}
      </div>
      <div>
        <Button onClick={handleBack}>Atrás</Button>
        <Button onClick={handleNext}>Siguiente</Button>
      </div>
    </section>
  )
}

export default CategoryActivitiesSection
