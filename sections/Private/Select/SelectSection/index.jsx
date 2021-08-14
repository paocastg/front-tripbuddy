import { useRouter } from 'next/router'
import styles from './index.module.scss'
import Box from 'components/Box'
import { CDN_PATH } from 'assets/Utils/Constants'

const SelectSection = ({
  setToggleSection,
  toggleSection,
  setIsActiveDestiny
}) => {
  const router = useRouter()

  const handleClickRec = () => {
    setToggleSection({ ...toggleSection, sectionOne: true, selectDestination: false })
    localStorage.setItem(
      'myToggleSection',
      JSON.stringify({
        ...toggleSection,
        sectionOne: !toggleSection.sectionOne,
        selectDestination: false
      })
    )
    setIsActiveDestiny(false)
    localStorage.setItem('selectDestination', JSON.stringify(false))
    localStorage.setItem(
      'myToggle',
      JSON.stringify({ toggleOne: false, toggleTwo: false })
    )
    // router.push('/recommendation')
  }

  const handleClickDest = () => {
    setToggleSection({ ...toggleSection, sectionOne: true, selectDestination: true })
    localStorage.setItem(
      'myToggleSection',
      JSON.stringify({
        ...toggleSection,
        sectionOne: !toggleSection.sectionOne,
        selectDestination: true
      })
    )
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
    <div className={styles.container}>
      <Box
        text="Conozco mi destino"
        img={`${CDN_PATH}/conozco-mi-destino.svg`}
        onClick={handleClickDest}
      />
      <Box
        text="Quiero Recomendaciones"
        img={`${CDN_PATH}/quiero-recomendaciones.svg`}
        onClick={handleClickRec}
      />
    </div>
  )
}

export default SelectSection
