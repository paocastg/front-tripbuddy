import styles from './index.module.scss'
import Wrapper from 'layout/Wrapper'
import { NextSeo } from 'next-seo'
import H2 from 'components/H2'
import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { Http } from 'assets/Utils/Http'
import { Auth } from 'assets/Utils/Auth'

const MyTrips = () => {
  const [dbQuotation, setDbQuotation] = useState(null)
  // mapper quotation
  const quotationMapper = (res) => {
    if (res) {
      const queryMapper = res.map((solicitud) => {
        // filtrar comprados
        const quotationFilter = solicitud.cotizaciones.filter(
          (cotizacion) => cotizacion.estado === 'comprado'
        )
        const quotationMapper = quotationFilter.map((cotizacion) => {
          const destinos = solicitud.destino.map((el) => el.nombre)
          return {
            ...cotizacion,
            key: cotizacion.id,
            destinos,
            fecha: solicitud.fecha_inicio,
            tipoDeExperiencia: [
              solicitud.actividad.map((el) => el.nombre),
              solicitud.categoria.map((el) => el.nombre)
            ],
            descripcion: cotizacion.descripcion,
            paquete: [`${destinos.join(' - ')}`, solicitud.fecha_fin, solicitud.fecha_inicio]
          }
        })
        return quotationMapper
      })
      const newQueryMapper = queryMapper.reduce((a, b) => a.concat(b))
      return newQueryMapper
    } else {
      return null
    }
  }
  useEffect(() => {
    const fetchQuotation = async () => {
      const user = Auth.getSession()
      const res = await Http.get(
        `https://api.devopsacademy.pe/solicitud/list_cotizaciones/${user.usuario.id}/asignado`
      )
      console.log('yep', res.data.solicitud)
      res && quotationMapper(res.data.solicitud)
      console.log('yep quotation mapper', quotationMapper(res.data.solicitud))
      setDbQuotation(quotationMapper(res.data.solicitud))
    }
    fetchQuotation()
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
              <p style={{ textAlign: 'center' }}>{text.join(', ')}</p>
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
        return { children: (<p style={{ textAlign: 'center' }}>{text}</p>) }
      }
    },
    {
      title: 'Tipo de experiencia',
      dataIndex: 'tipoDeExperiencia',
      key: 'tipoDeExperiencia',
      render: (text, row, index) => {
        return {
          children: (
            <div>
              <h4>ACTIVIDADES:</h4>
              <ul>{text && text[0].map((el, i) => <li key={i}>{el}</li>)}</ul>
              <h4>CATEGORIAS:</h4>
              <ul>{text && text[1].map((el, i) => <li key={i}>{el}</li>)}</ul>
            </div>
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
        return {
          children: (
            <div>
              <p>{text[0]}</p>
              <p>{`${text[1]} a ${text[2]}`}</p>
            </div>
          )
        }
      }
    }
  ]
  function onChange (pagination, filters, sorter, extra) {
    console.log('params', sorter, extra)
  }
  /* ========== Rows data ========== */
  /* const data = [
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
  ] */
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
          dataSource={dbQuotation}
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
