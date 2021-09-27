import Session from 'layout/Session'
import Wrapper from 'layout/Wrapper'
import { useRouter } from 'next/router'

const DetailsPage = () => {
  const router = useRouter()

  /*
   * Obtener el id de la url con useRouter
   */
  const idParams = (router) => {
    const idSplitted = router.asPath.split('/')
    return idSplitted[3]
  }

  /*
   * Obtener los detalles de cotizacion de la API de detalles
   */
  const getApiDetails = () => {
    const id = idParams(router)
    console.log('Llamando al detalle de cotizacion con el id:', id)
  }
  getApiDetails()
  return (
    <Wrapper>
      <Session>
        <div>
          <h1>Pagina de detalles de cotizacion</h1>
        </div>
      </Session>
    </Wrapper>
  )
}

export default DetailsPage
