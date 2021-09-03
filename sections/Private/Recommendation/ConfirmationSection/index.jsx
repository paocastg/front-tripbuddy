import styles from './index.module.scss'

/* Components */
import FormSection from 'sections/Private/Confirmation/FormSection'
import Button from 'components/Button'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import { Auth } from 'assets/Utils/Auth'
import axios from 'axios'
import ConfirmationHeroImage from 'components/ConfirmationHeroImage'
import H2 from 'components/H2'
const ConfirmationSection = ({ handleToggleSectionTwo }) => {
  const [storeValue] = useLocalStorage('selectDestination', null)
  const [destinos] = useLocalStorage('destinos', null)
  // const [logged, setLogged] = useState(false)
  const [quotation] = useLocalStorage('myQuotation', null)

  const categoria = quotation && quotation.category.map((el) => el.id)
  const actividad = quotation && quotation.activity.map((el) => el.id)

  const data = {
    fecha_inicio: '2021-08-06',
    fecha_fin: '2021-08-06',
    numero_ninos: 0,
    numero_adolescentes: 0,
    numero_adultos: 0,
    hotel: 'hotel',
    airbnb: true,
    lugar: 'Arequipa',
    usuario: 1,
    destino: [],
    categoria: categoria,
    actividad: actividad
  }
  const sendCotizar = async () => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        data: JSON.stringify(data)
      }
      const res = await axios('http://localhost:8000/api/solicitud/', options)
      const json = await res.data
      console.log(json)
      // console.log('Cotizacion enviada', json)
    } catch (err) {
      // const message = err.statusText || 'Ocurrio un error'
      // console.log('Ocurrio un error', message)
    }
  }

  const handleClickCotizar = () => {
    const session = Auth.getSession()
    if (session?.usuario && session?.token) {
      // setLogged(true)
      // si ya esta logeado envia cotizacion
      sendCotizar()
      // console.log('esta logueado')
      window.location.href = '/cotizaciones'
    } else {
      // console.log('no esta logueado')
      window.location.href = '/login'
    }
  }

  return (
    <div className={styles.main}>
      <H2>Visualiza tu elección</H2>
      <ConfirmationHeroImage urlImg={'https://placeimg.com/640/480/tech'}/>
      <FormSection destinos={destinos} storeValue={storeValue} />
      <section className={styles.section}>
        <div>
          <Button onClick={handleToggleSectionTwo}>Atrás</Button>
          <Button onClick={handleClickCotizar} >Cotizar</Button>
        </div>
      </section>
    </div>
  )
}

export default ConfirmationSection
