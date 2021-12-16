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
import SweetAlert from 'sweetalert2'
import { toast } from 'react-toastify'
import withReactContent from 'sweetalert2-react-content'
toast.configure()

const MySwal = withReactContent(SweetAlert)
const QuotationPage = () => {
  const initialFormState = { agencia: null, descripcion: '', estado: '', lista: '' }
  const [users, setUsers] = useState('')
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [loading, setLoading] = useState(false)
  // console.log(saved)
  const fetchUsers = async () => {
    const user = Auth.getSession().usuario.id
    const config = {
      // headers: { Authorization: `Token ${token}` },d4e97b7df5a2785717f9889d9c870525d3222f1a
      headers: { Authorization: 'Token d4e97b7df5a2785717f9889d9c870525d3222f1a' }
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
  console.log(loading)
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
          const config = {
            headers: { Authorization: 'Token d4e97b7df5a2785717f9889d9c870525d3222f1a' }
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
  // const [solicitud, setSolicitud] = useState('')
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
          <div style = {{ display: 'none' }}>
            </div>
          <div id='cotizaciones' style = {{ display: 'none' }}>
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
