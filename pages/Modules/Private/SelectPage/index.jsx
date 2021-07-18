import { useRouter } from 'next/router'
import styles from './index.module.scss'

const SelectPage = () => {
  const router = useRouter()
  return (
    <section className={styles.section} >
      <div className={styles.container} onClick={() => router.push('/destination') } ><span>CONOZCO MI DESTINO</span></div>
      <div className={styles.container} onClick={() => router.push('/recommendation') } ><span>QUIERO RECOMENDACIONES</span></div>
    </section>
  )
}

export default SelectPage
