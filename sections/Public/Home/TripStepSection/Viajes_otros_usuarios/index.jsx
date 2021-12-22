import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Tag, Button } from 'antd'
import styles from '../index.module.scss'
import moment from 'moment'
import { HOST } from 'assets/Utils/Constants'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
export default function SolicitudesPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(3)
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get(HOST + '/solicitud/list_cotizaciones_compradas/asignado')
      setPosts(res.data.solicitud)
      setLoading(false)
    }
    fetchPosts()
  }, [])
  const aNuevo = posts.slice(posts.length-3)
  console.log(aNuevo)
  return (
    <>
    <div>
    {loading ? (
        <p>Loading...</p>
      ) : (
        <section className={styles.booksContainer}>
          {aNuevo.map((item) => 
          <div className={styles.minimo}>
         <center>
         <h4 style={{ backgroundColor: '#00B2E3', width: '70%', color: 'rgb(250, 244, 244)' }}>
         <div style={{ position: 'absolute', left: '50px', top: '60px' }}>{' ' + ((moment(item.fecha_fin).diff(moment(item.fecha_inicio), 'dias')) / (1000 * 60 * 60 * 24)) + 'dias' }<br/>{ item.destino && item.destino.map((destinos) => destinos.nombre + ' ') + '    ' }
         </div>
         </h4>
         <img style={{ width: '380px', height: '180px' }} src='https://media.staticontent.com/media/pictures/8d0efdc4-38ac-4d12-b54e-a21c9b3583eb/300x200'/>
         <article
              className={styles.heroImage}
              style={{ backgroundImage: 'url("/banner-interno.png")' }}
            ></article></center>
          <h4><strong>Viajeros</strong></h4>
          <div className={styles.tag_container}>
            <Tag className={styles.tag}>{item.numero_adultos} Adultos</Tag>
            <Tag className={styles.tag}>{item.numero_adolescentes} Adolescentes </Tag>
            <Tag className={styles.tag}>{item.numero_ninos} Niños </Tag>
          <h4><strong>Categoria de Viaje</strong></h4>
          {item.categoria.map((list) => 
            <Tag className={styles.tag}>{ list.nombre }</Tag>
                )}
          <h4><strong>Actividades</strong></h4>
          {item.actividad&&item.actividad.map((list) =>
            <Tag className={styles.tag}> { list.nombre }</Tag>
          )}
          <div><br/><br/>
          <center>
          {item.cotizaciones&&item.cotizaciones.map((list) =>{
          if(list.estado != 'asignado' && list.estado!= 'pendiente' ){
          return <Button style={{ color: '#fafafa', backgroundColor: '#00B2E3', width: '180px',	justifyContent: 'center' }}><a href={ `/solicitudes/detalles/`+list.id }>Ver Viaje</a></Button>
          }})}
          </center>
          </div> 
          </div> 
          </div>
          )}
        </section>
      )}
      </div><br/>     
    </>
  );
}
