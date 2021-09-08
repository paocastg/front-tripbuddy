import styles from './index.module.scss'

/* Components */
import { Table } from 'antd'
import H2 from 'components/H2'

/* Layout */
import Session from 'layout/Session'
import Wrapper from 'layout/Wrapper'

const QuotationPage = () => {
  const columns = [
    {
      title: 'Agencia',
      dataIndex: 'agencia',
      key: 'agencia'
    },
    {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'descripcion',
      width: 300
    },
    {
      title: 'Destinos',
      dataIndex: 'destinos',
      key: 'destinos',

      // eslint-disable-next-line react/display-name
      render: (text) => (
        <ul>
          {text.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      )
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
      sorter: (a, b) => a.precio - b.precio
    }
  ]
  function onChange (pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra)
  }

  const data = [
    {
      key: '1',
      agencia: 'Agencia Turismo',
      descripcion:
        'Lorem Ipsum Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.',
      destinos: ['Centro de Lima', 'Tacna', 'Choquequirao'],
      precio: 2000
    },
    {
      key: '2',
      agencia: 'Agencia Pepito',
      descripcion:
        'Lorem Ipsum Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.',
      destinos: ['Centro de Lima', 'Tacna', 'Choquequirao'],
      precio: 1850
    },
    {
      key: '3',
      agencia: 'Peru Total',
      descripcion:
        'Lorem Ipsum Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.',
      destinos: ['Centro de Lima', 'Tacna', 'Choquequirao'],
      precio: 1750
    },
    {
      key: '4',
      agencia: 'Peru Total',
      descripcion:
        'Lorem Ipsum Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.',
      destinos: ['Centro de Lima', 'Tacna', 'Choquequirao'],
      precio: 3000
    }
  ]
  return (
    <Wrapper>
      <Session>
        <div className={styles.quotation}>
          <H2>Cotizaciones Abiertas</H2>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ y: 500 }}
            className={styles.quotation__headerTable}
            rowClassName={() => styles.quotation__bodyTable}
            onChange={onChange}
          />
        </div>
      </Session>
    </Wrapper>
  )
}

export default QuotationPage
