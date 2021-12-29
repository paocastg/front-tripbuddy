/* eslint-disable */
import styles from './index.module.scss'
import UserTable from './UserTable'
import EditUserForm from './EditUserForm'

/* Layout */
import Session from 'layout/Session'
import Wrapper from 'layout/Wrapper'
import { HOST } from 'assets/Utils/Constants'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Auth } from 'assets/Utils/Auth'
import Button from 'components/Button'
import H2 from 'components/H2'
import SweetAlert from 'sweetalert2'
import { toast } from 'react-toastify'
import withReactContent from 'sweetalert2-react-content'
import { Table } from 'reactstrap'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
toast.configure()

const MySwal = withReactContent(SweetAlert)
const QuotationPage = () => {
  const initialFormState = { agencia: null, descripcion: '', estado: '', lista: '' }
  const [users, setUsers] = useState('')
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [loading, setLoading] = useState(false)
  const fetchUsers = async () => {
    const user = Auth.getSession().usuario.id
    const session = Auth.getSession()
    const config = {
      headers: { Authorization: `Token ${session?.token}`}
    }
    const response = await axios.get(HOST + '/solicitud/list_cotizaciones/' + user +'/pendiente', config)
    setUsers(response.data.solicitud)
  }
  useEffect(() => {
    fetchUsers()
    eliminar()
  }, [])

  const editRow = user => {
    setEditing(true)
    setCurrentUser(user)
    esconder()
  }
  const updateUser = (solicitud, updatedUser) => {
    console.log(solicitud)
    setEditing(false)
    setUsers(users.map(user => user.cotizaciones.map((item) => item.solicitud === solicitud ? updatedUser : user)))
  }
  const esconder = () => {
    document.getElementById('solicitud').style.display = 'none'
    document.getElementById('cotizaciones').style.display = 'block'
  }
  const atras = () => {
    document.getElementById('solicitud').style.display = 'block'
    document.getElementById('cotizaciones').style.display = 'none'
  }
  const updateSolicitud = (item) => {
    console.log(item)
    SweetAlert.fire({
      title: 'Esta seguro(a)?',
      text: 'Esta seguro que desea eliminar la solicitud',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro(a).'
    }).then(async (result) => {
      if (result.value) {
        setLoading(true)
        try {          
          const session = Auth.getSession()
          console.log( session?.token )
          const config = {
            headers: { Authorization: `Token ${session?.token}`}
          }
          const res = await axios.delete(HOST + '/solicitud/cancelar/15',
            config
          )
          console.log(res)
          const response = await res.data
          console.log(response)
          if (!response.error) {
            setLoading(false)
            MySwal.fire({
              icon: 'success',
              title: 'Genial',
              text: 'La solicitud ha sido eliminada exitosamente.'
            })
          }
        } catch (e) {
          MySwal.close()
          console.log(e)
        }
      }
    })
  }
  const eliminar = () => {
    currentUser.cotizaciones && currentUser.cotizaciones.map((item) => {
      updateSolicitud(item)
      return updateSolicitud(item)
    })
  }
  console.log(eliminar)
  return (
    <Wrapper>
      <Session>
        <div className={styles.quotation}>
          <div id='cotizaciones' style = {{ display: 'none' }}>
      <H2>Cotizaciones</H2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              updateUser={updateUser}
            /><br></br><br></br>
            <center><div>
              <Button onClick={atras}>Atrás</Button>
              <Button onClick={updateSolicitud}>Eliminar viaje</Button>
            </div></center>              
            </div>
      <div id='solicitud'>
          <H2>Solicitudes</H2>
        <div className="flex-large">
          <UserTable users={users} editRow={editRow}/>
        </div>
      </div>
      </div>
      </Session>
    </Wrapper>
  )
}

export default QuotationPage
