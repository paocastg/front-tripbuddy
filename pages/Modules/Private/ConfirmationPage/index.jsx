import React from 'react'
import styles from './index.module.scss'
import Wrapper from 'layout/Wrapper'
import FormSection from 'sections/Private/Confirmation/FormSection'
import { useRouter } from 'next/router'
import Button from 'components/Button'

const ConfirmationPage = () => {
  const router = useRouter()

  const handlePrev = () => {
    const selectDestination = JSON.parse(localStorage.getItem('selectDestination'))
    // console.log(selectDestination)
    if (selectDestination) {
      router.push('/destination')
    } else {
      router.push('/recommendation')
    }
  }
  return (
    <Wrapper>
      <div className={styles.main}>
        <FormSection/>
        <section className={styles.section}>
          <div>
<<<<<<< HEAD
            <Button onClick={handlePrev}>Atrás</Button>
            <Button onClick={() => router.push('')}>Siguiente</Button>
=======
            <Button onClick={() => router.push('/destination')}>Atrás</Button>
            <Button onClick={() => router.push('')}>Cotizar</Button>
>>>>>>> f0f4228... Feat(localStorage): add uselocalstorage at assets
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

export default ConfirmationPage
