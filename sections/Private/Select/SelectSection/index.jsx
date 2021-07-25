import { useRouter } from 'next/router'
import styles from './index.module.scss'
import Box from 'components/Box'

const SelectSection = () => {
  const router = useRouter()
  return (
    <div className={styles.container} >
      <Box text='Conozco mi destino' img='conozco-mi-destino.png' onClick={() => router.push('/destination')} />
      <Box text='Quiero Recomendaciones' img='quiero-recomendaciones.png' onClick={() => router.push('/recommendation')} />
    </div>
  )
}

export default SelectSection
