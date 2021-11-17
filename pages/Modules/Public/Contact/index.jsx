import React, { useState } from 'react'
import axios from 'axios'
import styles from './index.module.scss'

/* layout */
import Wrapper from 'layout/Wrapper'
import { Form, Input, Button } from 'antd'
const { TextArea } = Input

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [asunto, setAsunto] = useState('')
  const [message, setMessage] = useState('')
  const [form] = Form.useForm()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let isValid = true

    if (name === '') {
      isValid = false
    }
    if (email === '') {
      isValid = false
    }
    if (telephone === '') {
      isValid = false
    }
    if (asunto === '') {
      isValid = false
    }
    if (message === '') {
      isValid = false
    }
    if (!isValid) return

    try {
      const response = await axios.post('http://localhost:5000/mensaje', {
        id: Math.random() * 100,
        nombre: name,
        email: email,
        telephone: telephone,
        asunto: asunto,
        message: message
      })
      console.log('response', response)
      setName('')
      setEmail('')
      setTelephone('')
      setMessage('')
      setMessage('')
    } catch (error) {
      console.error('error', error)
    }
  }
  return (
    <Wrapper>
      <article className={`${styles.about} e-container`}>
        <h2 className={styles.about__title}>Contacto</h2>

        <Form
          form={form}
          name="register"
          onFinish={handleSubmit}
          className={styles.about__text}
          layout="vertical"
          >
          <p>Póngase en contacto con nosotros</p>
          <Form.Item className={styles.form}>
            <Form.Item
              name="nombre"
              className={styles.formItem}
              label={<strong>Nombres</strong>}
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese su nombre!'
                }
              ]}
              hasFeedback
              >
                <Input
                  className={styles.input}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nombres" />
            </Form.Item>
            <Form.Item
              name="email"
              className={styles.formItem}
              label={<strong>E-mail</strong>}
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese su email!'
                }
              ]}>
              <Input
                className={styles.input}
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
          </Form.Item>
          <br/>
          <Form.Item className={styles.form}>
            <Form.Item
              name="telefono"
              className={styles.formItem}
              label={<strong>Teléfono</strong>}
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese su teléfono!'
                }
              ]}>
              <Input
                className={styles.input}
                placeholder="Teléfono"
                type="text"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)} />
            </Form.Item>
            <Form.Item
            name="asunto"
              className={styles.formItem}
              label={<strong>Asunto</strong>}
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese un asunto!'
                }
              ]}>
              <Input
                className={styles.input}
                placeholder="Asunto"
                type="text"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)} />
            </Form.Item>
          </Form.Item>

        <Form.Item
        name="mensaje"
          className={styles.itemMessage}
          label={<strong>Mensaje</strong>}
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su mensaje!'
            }
          ]}>
          <TextArea
            className={styles.message}
            placeholder="Mensaje"
            type="text"
            value={message}
            maxLength={100}
            onChange={(e) => setMessage(e.target.value)}/>
        </Form.Item>
        <Form.Item className={styles.itemMessage}>
          <Button
          className={styles.button}
          htmlType="submit">Enviar Mensaje</Button>
        </Form.Item>
        </Form>
      </article>
    </Wrapper>
  )
}

export default Contact
