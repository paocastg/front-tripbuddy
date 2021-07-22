import React from 'react'
import CategoryActivityCard from 'components/CategoryActivityCard'
import Button from 'components/Button'
import H2 from 'components/H2'
import styles from './index.module.scss'

const CategoryActivities = ({ dbCategory, dbActivity }) => {
  const AddCategoryAndActivitySelected = (data) => {
    // update
    console.log(data)
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
              name={el.name}
              img={el.image}
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
            />
          ))}
      </div>
      <div>
        <Button onClick={() => console.log('Atrás')}>Atrás</Button>
        <Button onClick={() => console.log('Siguiente')}>Siguiente</Button>
      </div>
    </section>
  )
}

export default CategoryActivities
