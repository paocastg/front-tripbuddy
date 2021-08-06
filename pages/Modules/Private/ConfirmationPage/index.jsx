import styles from './index.module.scss'
import Wrapper from 'layout/Wrapper'
import FormSection from 'sections/Private/Confirmation/FormSection'
import { useRouter } from 'next/router'
import Button from 'components/Button'
import OverviewSection from 'sections/Private/Confirmation/OverviewSection'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import { Alert } from 'antd'
import { useState } from 'react'
const axios = require('axios')

const ConfirmationPage = () => {
  const router = useRouter()
  const [storeValue] = useLocalStorage('selectDestination', null)
  const [destinos, setDestinos] = useLocalStorage('destinos', null)
  const [quotation] = useLocalStorage('myQuotation', null)
  const [response, setResponse] = useState(null)

  // console.log('custom hook local storage', storeValue)
  // console.log(destinos)
  // console.log(quotation && quotation.activity)
  // console.log(quotation && quotation.category)

  const categoria = quotation && quotation.category.map((el) => el.id)
  const actividad = quotation && quotation.activity.map((el) => el.id)

  // formamos la data para enviar
  const data = {
    fecha_inicio: '2021-08-06',
    fecha_fin: '2021-08-06',
    numero_ninos: 0,
    numero_adolescentes: 0,
    numero_adultos: 0,
    hotel: 'hotel',
    airbnb: true,
    lugar: 'Apurimac',
    usuario: 1,
    destino: [],
    categoria: categoria,
    actividad: actividad
  }

  console.log(data)

  const handlePrev = () => {
    if (storeValue) {
      router.push('/destination')
    } else {
      router.push('/recommendation')
    }
  }

  // Cotizar eleccion
  const handleClickQuotation = () => {
    console.log('Cotizar')

    const sendCotizar = async () => {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          data: JSON.stringify(data)
        }
        const res = await axios(
          'http://api.devopsacademy.pe/tripbuddy/api/solicitud/',
          options
        )
        const json = await res.data
        setResponse(true)
        setTimeout(() => {
          setResponse(false)
        }, 5000)
        console.log(json)
      } catch (err) {
        const message = err.statusText || 'Ocurrio un error'
        // console.log(message)
      }
    }

    sendCotizar()
  }

  return (
    <Wrapper>
      <div className={styles.main}>
        <FormSection destinos={destinos} storeValue={storeValue} />
        <section className={styles.section}>
          {response && (
            <Alert message="Solicitud Enviada" type="success" showIcon />
          )}
          <div>
            <Button onClick={handlePrev}>Atrás</Button>
            <Button onClick={handleClickQuotation}>Cotizar</Button>
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

export default ConfirmationPage
