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
              key={el.id_categoria}
              name={el.nombre_categoria}
              id={el.id_categoria}
            />
          ))}
      </div>
      <H2>Seleccione el tipo de actividades que te interesa realizar</H2>
      <div>
        {dbActivity &&
          dbActivity.map((el) => (
            <CategoryActivityCard
              key={el.id_actividad}
              name={el.nombre_actividad}
              id={el.id_actividad}
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
