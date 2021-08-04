import styles from './index.module.scss'
import Wrapper from 'layout/Wrapper'
import FormSection from 'sections/Private/Confirmation/FormSection'
import { useRouter } from 'next/router'
import Button from 'components/Button'
import OverviewSection from 'sections/Private/Confirmation/OverviewSection'
import { useLocalStorage } from 'assets/Utils/LocalStorage'

const ConfirmationPage = () => {
  const router = useRouter()
  const [storeValue] = useLocalStorage('selectDestination', null)

  // console.log('custom hook local storage', storeValue)

  const handlePrev = () => {
    if (storeValue) {
      router.push('/destination')
    } else {
      router.push('/recommendation')
    }
  }
  return (
    <Wrapper>
      <div className={styles.main}>
        <FormSection/>
        {storeValue || <OverviewSection/>}
        <section className={styles.section}>
          <div>
          <Button onClick={handlePrev}>Atrás</Button>
          <Button onClick={() => router.push('')}>Cotizar</Button>
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

export default ConfirmationPage
