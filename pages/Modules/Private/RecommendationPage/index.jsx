import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'

/* Utils */
// import { API, BASE_API } from 'assets/Utils/Constants'
import axios from 'axios'
import api from 'assets/Utils/api'

/* layout */
import Wrapper from 'layout/Wrapper'

/* Sections of the pages */
import SelectSection from 'sections/Private/Recommendation/SelectSection'
import FormSection from 'sections/Private/Recommendation/FormSection'
import CategoryActivitiesSection from 'sections/Private/Recommendation/CategoryActivitySection'
import OtherActivitiesSection from 'sections/Private/Recommendation/OtherActivitiesSection'
import ConfirmationSection from 'sections/Private/Recommendation/ConfirmationSection'

/* Components */

import { Spin } from 'antd'
// import { useRouter } from 'next/router'

const initialToggleSection = {
  sectionOne: false,
  sectionTwo: false,
  selectDestination: false
}

const RecommendationPage = () => {
  const [toggleOne, setToggleOne] = useState(false)
  const [toggleTwo, setToggleTwo] = useState(false)
  const [dbCategory, setDbCategory] = useState(null)
  const [dbActivity, setDbActivity] = useState(null)
  const [myQuotation, setMyQuotation] = useState(null)
  const [isActiveDestiny, setIsActiveDestiny] = useState(null)
  const [loading, setLoading] = useState(false)
  const [dbDestiny, setDbDestiny] = useState('')
  const [toggleSection, setToggleSection] = useState(initialToggleSection)
  const [destinos, setDestinos] = useState(false)

  // const router = useRouter()

  console.log('toggle seccion SelectSection', toggleSection)

  // const urlCategory = `${BASE_API}/category/`
  // const urlActivity = `${BASE_API}/activity/`

  // console.log('toggleOne', toggleOne)
  // console.log('toggleTwo', toggleTwo)
  const getDestiny = async () => {
    try {
      const res = await axios.get(
        'http://api.devopsacademy.pe/tripbuddy/api/destino/'
      )
      const json = await res.data
      return json
    } catch (err) {
      const message = err.statusText
      return message
    }
  }
  const getDestinos = async () => {
    try {
      const destinoslist = await axios.get('http://api.devopsacademy.pe/tripbuddy/api/destino/')
      setDestinos(destinoslist.data)
      // console.log('hola', destinos)
    } catch (error) {
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const [category, activity, destiny] = await Promise.all([
        api.getCategory(),
        api.getActivity(),
        getDestiny(),
        getDestinos()
      ])

      setDbCategory(category)
      setDbActivity(activity)
      setDbDestiny(destiny)

      setLoading(false)
    }

    fetchData()

    // get of localStorage
    const myQuotationInit = JSON.parse(localStorage.getItem('myQuotation')) || {
      activity: [],
      category: []
    }
    setMyQuotation(myQuotationInit)

    // read myToggle storage
    const myToggle = JSON.parse(localStorage.getItem('myToggle')) || {
      toggleOne,
      toggleTwo
    }
    setToggleOne(myToggle.toggleOne)
    setToggleTwo(myToggle.toggleTwo)

    // read myToggleSection of localStorage
    const myToggleSection =
      JSON.parse(localStorage.getItem('myToggleSection')) || toggleSection
    setToggleSection(myToggleSection)

    // read selectDestination of LocalStorage
    const selectDestination =
      JSON.parse(localStorage.getItem('selectDestination')) || false
    setIsActiveDestiny(selectDestination)
    // console.log('is active', selectDestination)
  }, [])

  const handleToggleSectionOne = () => {
    localStorage.setItem(
      'myToggleSection',
      JSON.stringify({
        ...toggleSection,
        sectionOne: !toggleSection.sectionOne
      })
    )
    setToggleSection({ ...toggleSection, sectionOne: false })
    // resetear todo lo almacenado
    localStorage.setItem('myQuotation', JSON.stringify({
      activity: [],
      category: []
    }))
  }

  const handleToggleSectionTwo = () => {
    localStorage.setItem(
      'myToggleSection',
      JSON.stringify({
        ...toggleSection,
        sectionTwo: !toggleSection.sectionTwo
      })
    )
    setToggleSection({ ...toggleSection, sectionTwo: !toggleSection.sectionTwo })
  }

  const handleToggleOne = () => {
    setToggleOne((prev) => !prev)
    const idList = JSON.parse(localStorage.getItem('destinos'))
    const seleccionados = []
    destinos && destinos.forEach(element => {
      idList && idList.forEach(id => {
        if (element.id === id * 1) {
          seleccionados.push(element)
        }
      })
    })

    window.localStorage.setItem('destinoSeleccionado', JSON.stringify(seleccionados))
    // set item myToggle
    if (!toggleOne) {
      const toggle = {
        toggleOne: true,
        toggleTwo: false
      }
      localStorage.setItem('myToggle', JSON.stringify(toggle))
    } else {
      const toggle = {
        toggleOne: false,
        toggleTwo: false
      }
      localStorage.setItem('myToggle', JSON.stringify(toggle))
    }
  }

  const handleToggleTwo = () => {
    setToggleTwo((prev) => !prev)
    // set item myToggle
    if (!toggleTwo) {
      const toggle = {
        toggleOne: true,
        toggleTwo: true
      }
      localStorage.setItem('myToggle', JSON.stringify(toggle))
    } else {
      const toggle = {
        toggleOne: true,
        toggleTwo: false
      }
      localStorage.setItem('myToggle', JSON.stringify(toggle))
    }
  }

  const saveCategoryActivity = (data, field) => {
    // save id in localStorage
    const quotation = {
      ...myQuotation,
      [field]: [...myQuotation[field], data]
    }

    // update localStorage
    setMyQuotation(quotation)
    localStorage.setItem('myQuotation', JSON.stringify(quotation))
  }

  const deleteCategoryActivity = (data, field) => {
    // delete id in localStorage
    const fieldFiltered = myQuotation[field].filter((el) => el.id !== data.id)
    const quotation = {
      ...myQuotation,
      [field]: fieldFiltered
    }

    // update locaStorage
    setMyQuotation(quotation)
    localStorage.setItem('myQuotation', JSON.stringify(quotation))
  }

  return (
    <Wrapper>
      {loading && (
        <div style={{ margin: '30px', marginBottom: '30%', textAlign: 'center' }}>
          <Spin size="large" />
        </div>
      )}
      {!loading &&
        (!toggleSection.sectionOne
          ? (
          <SelectSection
            setToggleSection={setToggleSection}
            setIsActiveDestiny={setIsActiveDestiny}
            toggleSection={toggleSection}
          />
            )
          : !toggleSection.sectionTwo
              ? (
          <div className={styles.main}>
            <div className={
              toggleOne
                ? styles.hiddenLeft
                : styles.visible}>
            <FormSection
              isActiveDestiny={toggleSection.selectDestination}
              dbDestiny={dbDestiny}
              handleClickNext={handleToggleOne}
              handleClickBefore={handleToggleSectionOne}/>
            </div>
            <div
              className={
                toggleTwo
                  ? styles.hiddenLeft
                  : toggleOne
                    ? styles.visible
                    : styles.hiddenRight
              }
            >
              <CategoryActivitiesSection
                dbCategory={dbCategory}
                dbActivity={dbActivity}
                saveCategoryActivity={saveCategoryActivity}
                deleteCategoryActivity={deleteCategoryActivity}
                handleClickNext={handleToggleTwo}
                handleClickBefore={handleToggleOne}
              />
            </div>
            <div className={toggleTwo ? styles.visible : styles.hiddenRight}>
              <OtherActivitiesSection
                handleClickBefore={handleToggleTwo}
                handleToggleSectionTwo={handleToggleSectionTwo}
              />
            </div>
          </div>
                )
              : (
          <ConfirmationSection handleToggleSectionTwo={handleToggleSectionTwo} />
                ))}
    </Wrapper>
  )
}

export default RecommendationPage
