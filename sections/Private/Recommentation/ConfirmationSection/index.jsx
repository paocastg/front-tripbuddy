import styles from './index.module.scss'
import FormSection from 'sections/Private/Confirmation/FormSection'
import Button from 'components/Button'
import { useLocalStorage } from 'assets/Utils/LocalStorage'

const ConfirmationSection = ({ handleToggleSectionTwo }) => {
  const [storeValue] = useLocalStorage('selectDestination', null)
  const [destinos] = useLocalStorage('destinos', null)
  return (
    <div className={styles.main}>
      <FormSection destinos={destinos} storeValue={storeValue} />
      <section className={styles.section}>
        <div>
          <Button onClick={handleToggleSectionTwo}>Atrás</Button>
          <Button>Cotizar</Button>
        </div>
      </section>
    </div>
  )
}

export default ConfirmationSection
