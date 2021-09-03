import styles from './index.module.scss'
/* Components */

const ConfirmationHeroImage = ({ urlImg, storeValue, handleToggleSectionOne }) => {
  const [fechaInicio] = useLocalStorage('FechaInicio', moment())
  const [fechaFin] = useLocalStorage('FechaFin', moment())
  const fecha1 = new Date(fechaInicio)
  const fecha2 = new Date(fechaFin)
  const router = useRouter()
  const resta = fecha2.getTime() - fecha1.getTime()
  const resultado = Math.round(resta / (1000 * 60 * 60 * 24))
  const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ]
  const diasSemana = [
    'Domingo',
    'Lunes',
    'martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ]
  const inicio =
    diasSemana[fecha1.getDay()] +
    ', ' +
    fecha1.getDate() +
    ' de ' +
    meses[fecha1.getMonth()]
  const fin =
    diasSemana[fecha2.getDay()] +
    ', ' +
    fecha2.getDate() +
    ' de ' +
    meses[fecha2.getMonth()]
  // const handleEdit = () => {
  //   if (storeValue) {
  //     router.push('/destination')
  //   } else {
  //     router.push('/recommendation')
  //   }
  // }

  return (
    <article
      className={styles.heroImage}
      style={{ backgroundImage: `url('${urlImg}')` }}
    >
      <aside className={styles.heroImage__opacity}>
        <div>
          {/* content */}
          <h2 className={styles.heroImage__title}>0 dias en Peru</h2>
          <h3 className={styles.heroImage__subtitle}>
          {inicio} - {fin}<span><button className={styles.heroImage__action} onClick={handleToggleSectionOne} >Editar</button></span>
          </h3>

        </div>
      </aside>
    </article>
  )
}

export default ConfirmationHeroImage
