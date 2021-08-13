import { useRouter } from 'next/router'
import styles from './index.module.scss'
import Box from 'components/Box'
import { CDN_PATH } from 'assets/Utils/Constants'

const SelectSection = ({ setToggleSectionOne, setIsActiveDestiny }) => {
  const router = useRouter()

  const handleClickRec = () => {
    setToggleSectionOne((prev) => !prev)
    setIsActiveDestiny(false)
    localStorage.setItem('selectDestination', JSON.stringify(false))
    localStorage.setItem('myToggle', JSON.stringify({ toggleOne: false, toggleTwo: false }))
    // router.push('/recommendation')
  }

  const handleClickDest = () => {
    setToggleSectionOne((prev) => !prev)
    setIsActiveDestiny(true)
    localStorage.setItem('selectDestination', JSON.stringify(true))
    // router.push('/recommendation')
    localStorage.removeItem('destinos')
    localStorage.removeItem('FechaInicio')
    localStorage.removeItem('FechaFin')
    localStorage.removeItem('adultos')
    localStorage.removeItem('adolescentes')
    localStorage.removeItem('ninos')
    localStorage.removeItem('tipoAlojamiento')
    localStorage.removeItem('costo')
  }
  return (
    <div className={styles.container} >
      <Box text='Conozco mi destino' img={`${CDN_PATH}/conozco-mi-destino.svg`} onClick={handleClickDest} />
      <Box text='Quiero Recomendaciones' img={`${CDN_PATH}/quiero-recomendaciones.svg`} onClick={handleClickRec} />
    </div>
  )
}

export default SelectSection
