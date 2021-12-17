/* eslint-disable */
import React, { useState, useEffect } from 'react'
import Wrapper from 'layout/Wrapper'
import axios from 'axios'
import Pagination from 'react-js-pagination'
import { Tag, Button } from 'antd'
import styles from './index.module.scss'
import { NextSeo } from 'next-seo'
import H2 from 'components/H2'
import moment from 'moment'
import { HOST } from 'assets/Utils/Constants'
export default function SolicitudesPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(HOST + '/solicitud/list_cotizaciones_compradas/asignado');
      setPosts(res.data.solicitud);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };
  console.log(posts);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <Wrapper>
    <NextSeo title="Solicitudes" description="A short description goes here." />
    <br/><br/><H2>Viajes de otros usuarios</H2>
    <center> <div style={{ display: 'inline-block' }} className="page-container">
        <div style={{ display: 'inline-block' }} className="content-wrapper">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <center>
              <section className={styles.booksContainer}>
              {currentPosts.map((item) => (
                <><div>
                <div><div style={{ position: 'relative' }}>
                <center><h2 style={{ backgroundColor: '#00B2E3', width: '70%', color: 'rgb(250, 244, 244)' }}><div style={{ position: 'absolute', left: '40px', top: '40px' }}>{'/ ' + ((moment(item.fecha_fin).diff(moment(item.fecha_inicio), 'dias')) / (1000 * 60 * 60 * 24)) + 'dias' }<br/>{ item.destino && item.destino.map((destinos) => destinos.nombre + ' ') + '    ' }</div></h2></center>
                </div>
                  <img className={styles.img} src='https://media.staticontent.com/media/pictures/8d0efdc4-38ac-4d12-b54e-a21c9b3583eb/300x200'/>
                </div>
                <h3><strong>Viajeros</strong></h3>
                <div className={styles.tag_container}>
                 <Tag className={styles.tag}>{item.numero_adultos} Adultos</Tag>
                 <Tag className={styles.tag}>{item.numero_adolescentes} Adolescentes </Tag>
                 <Tag className={styles.tag}>{item.numero_ninos} Niños </Tag>
                 </div>
                 <h3><strong>Categoria de Viaje</strong></h3>
                 {item.categoria.map((list) => 
                <div className={styles.tag_container}>
                  <Tag className={styles.tag}>{ list.nombre }</Tag>
                </div>
                )}
                <h3><strong>Actividades</strong></h3>
                { item.actividad&&item.actividad.map((list) =>
                <div className={styles.tag_container}>
                  <Tag className={styles.tag} id='linea'> { list.nombre }</Tag>
                </div>
                )}
                <br/>
                <br/>
                <center><Button style={{ backgroundColor: '#00B2E3', width: '70%', color: 'rgb(250, 244, 244)' }}><a href={ `/solicitudes/detalles/7` }>Ver Viaje</a></Button></center>
                <br/>            
                </div>
                </>

              ))}

            </section>
            </center>
        </>
      )}
                </div>
                </div></center> 
      <center>
        <Pagination
          activePage={posts}
          itemsCountPerPage={postsPerPage}
          totalItemsCount={posts.length}
          pageRangeDisplayed={posts.length / postsPerPage}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
    </center></Wrapper>
  );
}
