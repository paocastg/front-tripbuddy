import styles from './index.module.scss'

/* Utils */
import { CDN_PATH } from 'assets/Utils/Constants'

/* Components */
import Box from 'components/Box'
import SelectTripContext from 'context/SelectTripContext'
import { useContext } from 'react'
import { Spin } from 'antd'

const SelectSection = ({ setShowSection }) => {
  const { setIsActiveDestiny, loading } = useContext(SelectTripContext)
  const handleClickRec = () => {
    setShowSection(1)
    setIsActiveDestiny(false)
  }

  const handleClickDest = () => {
    setShowSection(1)
    setIsActiveDestiny(true)
  }
  return (
    <>
      {loading && (
        <div
          style={{ margin: '30px', marginBottom: '30%', textAlign: 'center' }}
        >
          <Spin size="large" />
        </div>
      )}
      {!loading && (
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
      )}
    </>
  )
}

export default SelectSection
