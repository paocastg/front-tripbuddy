import { Table, Tag, Space } from 'antd'
import H2 from 'components/H2'
import Wrapper from 'layout/Wrapper'
import styles from './index.module.scss'

const QuotationPage = () => {
  const columns = [
    {
      title: 'Agencia',
      dataIndex: 'agencia',
      key: 'agencia',
      render: (text) => <a>{text}</a>
    },
    {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'descripcion'
    },
    {
      title: 'Destinos',
      dataIndex: 'destinos',
      key: 'destinos'
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio'
    }

  ]

  const data = [
    {
      key: '1',
      agencia: 'Agencia Turismo',
      descripcion: 'Lorem Ipsum ....',
      destinos: 'Centro de Lima, Choquequirao, ...',
      precio: '$ 2000 c/u'
    }
  ]
  return (
    <Wrapper>
      <div className={styles.margin}>
        <H2>Cotizaciones Abiertas</H2>
        <Table columns={columns} dataSource={data} />
      </div>
    </Wrapper>
  )
}

export default QuotationPage
