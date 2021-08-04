import { useRouter } from 'next/router'
import styles from './index.module.scss'
import Box from 'components/Box'
import { CDN_PATH } from 'assets/Utils/Constants'

const SelectSection = () => {
  const router = useRouter()

  const handleClickRec = () => {
    localStorage.setItem('selectDestination', JSON.stringify(false))
    localStorage.setItem('myToggle', JSON.stringify({ toggleOne: false, toggleTwo: false }))
    router.push('/recommendation')
  }

  const handleClickDest = () => {
    localStorage.setItem('selectDestination', JSON.stringify(true))
    router.push('/destination')
  }
  return (
    <div className={styles.container} >
      <Box text='Conozco mi destino' img={`${CDN_PATH}/conozco-mi-destino.svg`} onClick={handleClickDest} />
      <Box text='Quiero Recomendaciones' img={`${CDN_PATH}/quiero-recomendaciones.svg`} onClick={handleClickRec} />
    </div>
  )
}

export default SelectSection
