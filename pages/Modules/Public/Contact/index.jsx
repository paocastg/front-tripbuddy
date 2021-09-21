import styles from './index.module.scss'

/* layout */
import Wrapper from 'layout/Wrapper'
import { Form, Input, Button } from 'antd'

const Contact = () => {
  return (
    <Wrapper>
      <article className={styles.about}>
        <h2 className={styles.about__title}>Contacto</h2>
        <Form
          className={styles.about__text}
          layout="vertical"
          // onValuesChange
          >
          <p>Póngase en contacto con nosotros</p>
          <Form.Item className={styles.form}>
            <Form.Item
              className={styles.formItem}
              label={<strong>Nombres</strong>} >
              <Input size="large"
              placeholder="Nombres" />
            </Form.Item>
            <Form.Item
              className={styles.formItem}
              label={<strong>E-mail</strong>}>
              <Input placeholder="E-mail" />
            </Form.Item>
          </Form.Item>
          <Form.Item className={styles.form}>
            <Form.Item
              className={styles.formItem}
              label={<strong>Teléfono</strong>}>
              <Input placeholder="Teléfono" />
            </Form.Item>
            <Form.Item
              className={styles.formItem}
              label={<strong>Asunto</strong>}>
              <Input placeholder="Asunto" />
            </Form.Item>
          </Form.Item>

        <Form.Item label={<strong>Mensaje</strong>}>
          <Input placeholder="Mensaje" />
        </Form.Item>
        <Form.Item >
          <Button type="primary">Enviar Mensaje</Button>
        </Form.Item>
        </Form>
      </article>
    </Wrapper>
  )
}

export default Contact
