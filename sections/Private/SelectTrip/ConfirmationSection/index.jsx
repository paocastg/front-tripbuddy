import Button from 'components/Button'
import ConfirmationHeroImage from 'components/ConfirmationHeroImage'
import styles from './index.module.scss'

const ConfirmationSection = ({ setShowSection }) => {
  const handleBack = () => {
    setShowSection(3)
  }
  const handleNext = () => {
    console.log('Enviar cotizacion...')
  }
  return (
    <div className={styles.confirmation}>
      <ConfirmationHeroImage
        urlImg={'https://placeimg.com/640/480/tech'}
        setShowSection={setShowSection}
      />
      <div className={styles.confirmation__actions}>
        <Button onClick={handleBack}>Atrás</Button>
        <Button onClick={handleNext}>Cotizar</Button>
      </div>
    </div>
  )
}

export default ConfirmationSection
