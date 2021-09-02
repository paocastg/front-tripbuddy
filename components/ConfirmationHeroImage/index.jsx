import styles from './index.module.scss'
/* Components */

const ConfirmationHeroImage = ({ urlImg }) => {
  return (
    <article
      className={styles.heroImage}
      style={{ backgroundImage: `url('${urlImg}')` }}
    >
      <aside className={styles.heroImage__opacity}>
        <div>
          {/* content */}
          <h2 className={styles.heroImage__title}>0 dias en Peru</h2>
          <h3 className={styles.heroImage__subtitle}>
            Jueves, 26 de agosto - Jueves, 26 de agosto <span><button className={styles.heroImage__action}>Editar</button></span>
          </h3>

        </div>
      </aside>
    </article>
  )
}

export default ConfirmationHeroImage
