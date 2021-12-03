import styles from './index.module.scss'
import Wrapper from 'layout/Wrapper'
import { NextSeo } from 'next-seo'
import H2 from 'components/H2'
import { Table } from 'antd'
import { useEffect } from 'react'

const MyTrips = () => {
  // const [dbQuotation, setDbQuotation] = useState([])
  useEffect(() => {
    /* const fetchQuotation = async () => {
      const res = await axios.get(
        'https://api.devopsacademy.pe/solicitud/list_cotizaciones/8',
        {
          headers: {
            Authorization: 'Token 621c43d6c3a84e83ce97b8fc2617ac4ccc1aeea4',
            'Content-Type': 'application/json'
          }
        }
      )
      setDbQuotation(res)
    } */
    // fetchQuotation()
  }, [])
  /* ========== Columns ========== */
  const columns = [
    {
      title: 'Destinos',
      dataIndex: 'destinos',
      key: 'destinos',
      render: (text, row, index) => {
        /* Pasar a componente */
        return {
          children: (
            <div>
              <img src="" />
              <p>{text}</p>
            </div>
          )
        }
      }
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
      render: (text, row, index) => {
        return text
      }
    },
    {
      title: 'Tipo de experiencia',
      dataIndex: 'tipoDeExperiencia',
      key: 'tipoDeExperiencia',
      render: (text, row, index) => {
        return {
          children: (
            <ul>{text && text.map((el, i) => <li key={i}>{el}</li>)}</ul>
          )
        }
      }
    },
    {
      title: 'Descripción',
      dataIndex: 'descripcion',
      key: 'descripcion',
      width: 300,
      render: (text, row, index) => {
        return text
      }
    },
    {
      title: 'Paquete',
      dataIndex: 'paquete',
      key: 'paquete',
      render: (text, row, index) => {
        return text
      }
    }
  ]
  function onChange (pagination, filters, sorter, extra) {
    console.log('params', sorter, extra)
  }
  /* ========== Rows data ========== */
  const data = [
    {
      key: 1,
      destinos: 'Peru',
      fecha: '15/04/2021',
      tipoDeExperiencia: ['Centro de Lima', 'Tacna', 'Choquequirao'],
      descripcion: 'Lorem ipsum ..',
      paquete: 'Lima - Cusco - Arequipa 12 dias - 11 noches'
    },
    {
      key: 2,
      destinos: 'Peru',
      fecha: '15/04/2021',
      tipoDeExperiencia: ['Centro de Lima', 'Tacna', 'Choquequirao'],
      descripcion: 'Lorem ipsum ..',
      paquete: 'Lima - Cusco - Arequipa 12 dias - 11 noches'
    },
    {
      key: 3,
      destinos: 'Peru',
      fecha: '15/04/2021',
      tipoDeExperiencia: ['Centro de Lima', 'Tacna', 'Choquequirao'],
      descripcion: 'Lorem ipsum ..',
      paquete: 'Lima - Cusco - Arequipa 12 dias - 11 noches'
    },
    {
      key: 4,
      destinos: 'Peru',
      fecha: '15/04/2021',
      tipoDeExperiencia: ['Centro de Lima', 'Tacna', 'Choquequirao'],
      descripcion: 'Lorem ipsum ..',
      paquete: 'Lima - Cusco - Arequipa 12 dias - 11 noches'
    }
  ]
  return (
    <Wrapper>
      <NextSeo
        title="Mis viajes"
        description="A short description goes here."
      />
      <div className={`${styles.quotation} e-container`}>
        <H2>Mis Viajes</H2>
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
    </Wrapper>
  )
}

export default MyTrips
