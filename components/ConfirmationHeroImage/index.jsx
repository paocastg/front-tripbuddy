/* Utils */
import styles from './index.module.scss'
import { useContext } from 'react'
import SelectTripContext from 'context/SelectTripContext'

/* Custom Hooks */
import { useIntervalDate } from 'assets/hooks/useIntervalDate'
import { useTransformDate } from 'assets/hooks/useTransformDate'

const ConfirmationHeroImage = ({ urlImg, setShowSection }) => {
  const { state } = useContext(SelectTripContext)
  const startDate = useTransformDate(state.fecha_inicio)
  const endDate = useTransformDate(state.fecha_fin)
  const rangeDate = useIntervalDate(state.fecha_inicio, state.fecha_fin)

  // console.log('yep fecha inicio', startDate)
  // console.log('yep fecha fin', endDate)
  // console.log('yep interval date', rangeDate)

  const handleBack = () => {
    setShowSection(1)
  }

  return (
    <article
      className={styles.heroImage}
      style={{ backgroundImage: `url('${urlImg}')` }}
    >
      <aside className={styles.heroImage__opacity}>
        <div>
          {/* content */}
          <h2 className={styles.heroImage__title}>{rangeDate} dias en Peru</h2>
          <h3 className={styles.heroImage__subtitle}>
            {startDate} - {endDate}
            <span>
              <button className={styles.heroImage__action} onClick={handleBack}>
                Editar
              </button>
            </span>
          </h3>
        </div>
      </aside>
    </article>
  )
}

export default ConfirmationHeroImage
