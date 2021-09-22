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
      key: 'agencia',
      render: (text, row, index) => {
        if (row.agencia === 'Agencia Turismo') {
          return {
            /* Pasar a componente */
            children: <p className={styles.quotation__subHeaderTable}>Lima - Cusco - Arequipa / 12 dias - 11 noches / 3 Personas   Categoria: ...  Actividades: ...</p>,
            props: {
              colSpan: 4
            }
          }
        }
        /* Pasar a componente */
        return text
      }
    },
    {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'descripcion',
      width: 300,
      render: (text, row, index) => {
        if (row.agencia === 'Agencia Turismo') {
          return {
            children: <p>Hello World</p>,
            props: {
              colSpan: 0
            }
          }
        }
        return text
      }
    },
    {
      title: 'Destinos',
      dataIndex: 'destinos',
      key: 'destinos',

      // eslint-disable-next-line react/display-name
      render: (text, row, index) => {
        // console.log(row)
        // console.log('indice', index)
        if (row.agencia === 'Agencia Turismo') {
          return {
            children: <p>Hello World</p>,
            props: {
              colSpan: 0
            }
          }
        }
        return (
          <ul>
            {text.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        )
      }
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
      sorter: (a, b) => a.precio - b.precio,
      render: (text, row, index) => {
        if (row.agencia === 'Agencia Turismo') {
          return {
            children: <p>Hello World</p>,
            props: {
              colSpan: 0
            }
          }
        }
        return text
      }
    }
  ]
  function onChange (pagination, filters, sorter, extra) {
    console.log('params', sorter, extra)
  }

  const data = [
    {
      key: 1,
      agencia: 'Agencia Turismo'
    },
    {
      key: 2,
      agencia: 'Agencia Pepito',
      descripcion:
        'Lorem Ipsum Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.',
      destinos: ['Centro de Lima', 'Tacna', 'Choquequirao'],
      precio: 1850
    },
    {
      key: 3,
      agencia: 'Peru Total',
      descripcion:
        'Lorem Ipsum Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.',
      destinos: ['Centro de Lima', 'Tacna', 'Choquequirao'],
      precio: 1750
    },
    {
      key: 4,
      agencia: 'Peru Total',
      descripcion:
        'Lorem Ipsum Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.',
      destinos: ['Centro de Lima', 'Tacna', 'Choquequirao'],
      precio: 3000
    },
    {
      key: 5,
      agencia: 'Agencia Turismo'
    },
    {
      key: 6,
      agencia: 'Agencia Pepito',
      descripcion:
        'Lorem Ipsum Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.',
      destinos: ['Centro de Lima', 'Tacna', 'Choquequirao'],
      precio: 1850
    },
    {
      key: 7,
      agencia: 'Peru Total',
      descripcion:
        'Lorem Ipsum Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.',
      destinos: ['Centro de Lima', 'Tacna', 'Choquequirao'],
      precio: 1750
    },
    {
      key: 8,
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
            scroll={{ y: 500, x: 920 }}
            className={`${styles.quotation__headerTable} ${styles.quotation__tdTable}`}
            rowClassName={() => styles.quotation__bodyTable}
            onChange={onChange}
          />
        </div>
      </Session>
    </Wrapper>
  )
}

export default QuotationPage
