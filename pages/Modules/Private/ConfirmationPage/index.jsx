import React from 'react'
import styles from './index.module.scss'
import Wrapper from 'layout/Wrapper'
import FormSection from 'sections/Private/Confirmation/FormSection'
import { useRouter } from 'next/router'
import Button from 'components/Button'

const ConfirmationPage = () => {
  const router = useRouter()
  return (
    <Wrapper>
      <div className={styles.main}>
        <FormSection/>
        <section className={styles.section}>
          <div>
            <Button onClick={() => router.push('/destination')}>Atrás</Button>
            <Button onClick={() => router.push('')}>Siguiente</Button>
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

export default ConfirmationPage
