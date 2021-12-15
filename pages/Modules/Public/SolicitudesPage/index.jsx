import React, { useState, useEffect } from 'react'
import Wrapper from 'layout/Wrapper'
import axios from 'axios'
import Pagination from 'react-js-pagination'
import { Tag, Button } from 'antd'
import styles from './index.module.scss'
import { NextSeo } from 'next-seo'
import {
  Col,
  Card,
  CardBody,
  Container,
  Row,
  Badge,
  Table,
} from 'reactstrap'
export default function SolicitudesPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://api.devopsacademy.pe/solicitud/list_cotizaciones_compradas/asignado');
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
    <br/><br/>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <center>        
        <div className="e-container">
                <section className={styles.overview}>
              {currentPosts.map((item) => (
                    <button className={styles.button}>
                <div>
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
                <center><Button><a href={ `/cotizaciones/detalles/${item.cotizaciones[0]}` }>Ver Viaje</a></Button></center>
                <br/>
                </button>
              ))}
            </section></div>
            </center>
        </>
      )}
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
