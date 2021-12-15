import React, { useState, useEffect } from 'react'
import Wrapper from 'layout/Wrapper'
import axios from 'axios'
import Pagination from 'react-js-pagination'
import { Tag, Col } from 'antd'
import styles from './index.module.scss'
export default function SolicitudesPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
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
    <div className="App">
      <br/><br/>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
         
              {currentPosts.map((item) => (
                <button> <h3><strong>Viajeros</strong></h3><div>
                 <Tag>{item.numero_adultos} Adultos</Tag>
                 <Tag>{item.numero_adolescentes} Adolescentes</Tag>
                 <Tag>{item.numero_ninos} Niños</Tag>
                 </div>
                 <h3><strong>Categoria de Viaje</strong></h3>
                 {item.categoria.map((list) => 
                <div>
                  <Tag>{ list.nombre }</Tag>
                </div>
                )}
                <h3><strong>Actividades</strong></h3>
                { item.actividad&&item.actividad.map((list) =>
                <div>
                  <Tag id='linea'> { list.nombre }</Tag>
                </div>
                )}
                </button>
              ))}
        </>
      )}
      <div className={styles.pagination}>
        <Pagination
          activePage={posts}
          itemsCountPerPage={postsPerPage}
          totalItemsCount={posts.length}
          pageRangeDisplayed={posts.length / postsPerPage}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div></Wrapper>
  );
}
