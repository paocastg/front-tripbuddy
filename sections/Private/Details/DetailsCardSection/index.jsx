import styles from './index.module.scss'

const DetailsCardSection = ({ el }) => {
  const {
    destino,
    num_dias: numDias,
    detalle_cotizacion: detalleCotizacion
  } = el
  const {
    descripcion,
    lugar,
    cosas_por_hacer: cosasPorHacer,
    viajes_secundarios: viajesSecundarios
  } = detalleCotizacion[0]
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.header__text}>
          <strong>{destino}</strong> - {numDias} días
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
          <h3 className={styles.body__subtitle}>{lugar.nombre}</h3>
          <p className={styles.body__paragraph}>{descripcion}</p>
          <h3 className={styles.body__subtitle}>Cosas por hacer</h3>
          <p className={styles.body__paragraph}>{cosasPorHacer}</p>
          <h3 className={styles.body__subtitle}>Viajes secundarios</h3>
          <p className={styles.body__paragraph}>{viajesSecundarios}</p>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.places}>
        <h3 className={styles.body__subtitle}>Mejores lugares de tu viaje</h3>
        <div className={styles.places__images}>
          {detalleCotizacion &&
            detalleCotizacion.map((el) => {
              return (
                <figure key={el.id} className={styles.places__figure}>
                  <img
                    className={styles.places__image}
                    src="/img-ciudad-cusco.png"
                    alt=""
                  />
                  <figcaption className={styles.places__figcaption}>
                    {el.lugar.nombre}
                  </figcaption>
                </figure>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default DetailsCardSection
