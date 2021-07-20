import React from 'react'
import FormSection from 'sections/Private/Destination/FormSection'
// import styles from './index.module.scss'

import { Layout } from 'antd'

const { Header, Footer, Content } = Layout

const Destination = () => {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, textAlign: 'center' }}>
          <h1>Elige tu destino y las fechas en que piensas viajar</h1>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380, textAlign: 'center' }}>
            <FormSection />
          </div>
          </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default Destination
