import styles from './index.module.scss'

const DetailsCardSection = ({ el }) => {
  const { descripcion, destino } = el
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.header__text}>
          <strong>{destino}</strong> - 2 días
        </h3>
        <a href="#" className={styles.header__action}>
          Ver el plan día por día
        </a>
      </div>
      <hr className={styles.divider} />
      <div className={styles.body}>
        <figure className={styles.body__figure}>
          <img
            className={styles.body__image}
            src="/img-ciudad-cusco.png"
            alt="ciudad cusco"
          />
        </figure>
        <div className={styles.body__content}>
          <h3 className={styles.body__subtitle}>Plaza de armas</h3>
          <p className={styles.body__paragraph}>
            {descripcion}
          </p>
          <h3 className={styles.body__subtitle}>Cosas por hacer</h3>
          <p className={styles.body__paragraph}>
            #Lugares Históricos #Museos #Bares
          </p>
          <h3 className={styles.body__subtitle}>Viajes secundarios</h3>
          <p className={styles.body__paragraph}>
            #Playas Costa Verde #Larcomar #Circuito Magico de Agua #Museo de
            arte
          </p>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.places}>
        <h3 className={styles.body__subtitle}>Mejores lugares de tu viaje</h3>
        <div className={styles.places__images}>
          <figure className={styles.places__figure}>
            <img className={styles.places__image} src="/img-ciudad-cusco.png" alt="" />
            <figcaption className={styles.places__figcaption}>Laguna de 7 colores</figcaption>
          </figure>
          <figure className={styles.places__figure}>
            <img className={styles.places__image} src="/img-ciudad-cusco.png" alt="" />
            <figcaption className={styles.places__figcaption}>Machu Picchu</figcaption>
          </figure>
          <figure className={styles.places__figure}>
            <img className={styles.places__image} src="/img-ciudad-cusco.png" alt="" />
            <figcaption className={styles.places__figcaption}>Cañon de Colca</figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default DetailsCardSection
