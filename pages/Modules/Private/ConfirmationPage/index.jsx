import React from 'react'
import styles from './index.module.scss'
import Wrapper from 'layout/Wrapper'
import FormSection from 'sections/Private/Confirmation/FormSection'
import { useRouter } from 'next/router'
import Button from 'components/Button'
import OverviewSection from 'sections/Private/Confirmation/OverviewSection'

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
        <OverviewSection/>
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
