import { Layout, Row, Col, Button } from 'antd'
import styles from './index.module.scss'

const { Header } = Layout

const HeaderSection = () => {
  console.log(styles)
  console.log(styles.btnTripbuddy)
  return (
  <Header style={{ backgroundColor: '#fff' }}>
    <Row justify="end" gutter={[8, 16]}>
      <Col>
        <Button type="primary" className={styles.btnTripbuddy} >Iniciar Sesión</Button>
      </Col>
      <Col>
        <Button type="primary" className={styles.btnTripbuddy} >Registro</Button>
      </Col>
    </Row>
  </Header>
  )
}

export default HeaderSection
