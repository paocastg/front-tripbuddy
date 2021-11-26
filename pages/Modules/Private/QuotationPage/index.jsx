import styles from './index.module.scss'
import UserTable from './UserTable'
import EditUserForm from './EditUserForm'
/* Components */
import H2 from 'components/H2'

/* Layout */
import Session from 'layout/Session'
import Wrapper from 'layout/Wrapper'
import { HOST } from 'assets/Utils/Constants'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Auth } from 'assets/Utils/Auth'
import Button from 'components/Button'
import { NextSeo } from 'next-seo'

const QuotationPage = () => {
  const initialFormState = {
    agencia: null,
    descripcion: '',
    estado: '',
    lista: ''
  }
  const [users, setUsers] = useState('')
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const fetchUsers = async () => {
    const user = Auth.getSession().usuario.id
    const response = await axios.get(
      HOST + '/solicitud/list_cotizaciones/' + user
    )
    setUsers(response.data.solicitud)
  }
  console.log(users)
  useEffect(() => {
    fetchUsers()
  }, [])

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser(user)
    esconder()
  }
  const updateUser = (solicitud, updatedUser) => {
    console.log(solicitud)
    setEditing(false)
    setUsers(
      users.map((user) =>
        user.cotizaciones.map((item) =>
          item.solicitud === solicitud ? updatedUser : user
        )
      )
    )
  }
  const esconder = () => {
    document.getElementById('solicitud').style.display = 'none'
    document.getElementById('cotizaciones').style.display = 'block'
  }
  const atras = () => {
    document.getElementById('solicitud').style.display = 'block'
    document.getElementById('cotizaciones').style.display = 'none'
  }
  return (
    <Wrapper>
      <Session>
        <NextSeo title="Cotizaciones" description="A short description goes here." />
        <div className={styles.quotation}>
          <H2>Cotizaciones Abiertas</H2>
          <div id="cotizaciones" style={{ display: 'none' }}>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              updateUser={updateUser}
            />
            <br></br>
            <br></br>
            <center>
              <div>
                <Button onClick={atras}>Atrás</Button>
              </div>
            </center>
          </div>
          <div id="solicitud">
            <div className="flex-large">
              <UserTable users={users} editRow={editRow} />
            </div>
          </div>
        </div>
      </Session>
    </Wrapper>
  )
}

export default QuotationPage
