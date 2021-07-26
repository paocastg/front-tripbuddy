import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Button from 'components/Button'
import H2 from 'components/H2'
import SliderAlojamiento from 'components/SliderAlojamiento'
import FormSection from 'sections/Private/Recommentation/FormSection'
import Wrapper from 'layout/Wrapper'
import { Row, Col } from 'antd'
import CategoryActivities from 'sections/Private/Recommentation/CategoryActivitySection'
import OtherActivitiesSection from 'sections/Private/Recommentation/OtherActivitiesSection'
import { useRouter } from 'next/router'
const axios = require('axios')

const RecommendationPage = () => {
  const [toggleOne, setToggleOne] = useState(false)
  const [toggleTwo, setToggleTwo] = useState(false)
  const [dbCategory, setDbCategory] = useState(null)
  const [dbActivity, setDbActivity] = useState(null)
  const [myQuotation, setMyQuotation] = useState(null)

  const router = useRouter()

  const urlCategory = 'http://127.0.0.1:8000/category/'
  const urlActivity = 'http://127.0.0.1:8000/activity/'

  // console.log(toggleOne)
  // console.log(toggleTwo)

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await axios.get(urlCategory)
        const json = await res.data
        console.log(json)
        setDbCategory(json)
      } catch (err) {
        const message = err.statusText
        console.log(message)
      }
    }

    const getActivity = async () => {
      try {
        const res = await axios.get(urlActivity)
        const json = await res.data
        console.log(json)
        setDbActivity(json)
      } catch (err) {
        const message = err.statusText
        console.log(message)
      }
    }
    getCategory()
    getActivity()

    // get of localStorage
    const myQuotationInit = JSON.parse(localStorage.getItem('myQuotation')) || {
      activity: [],
      category: []
    }
    setMyQuotation(myQuotationInit)
  }, [])

  const handleToggleOne = () => {
    setToggleOne((prev) => !prev)
  }

  const handleToggleTwo = () => {
    setToggleTwo((prev) => !prev)
  }

  const saveCategoryActivity = (id, field) => {
    // save id in localStorage
    const quotation = {
      ...myQuotation,
      [field]: [...myQuotation[field], id]
    }

    setMyQuotation(quotation)
    localStorage.setItem('myQuotation', JSON.stringify(quotation))
  }

  const deleteCategoryActivity = (id, field) => {
    const fieldFiltered = myQuotation[field].filter((el) => el !== id)
    const quotation = {
      ...myQuotation,
      [field]: fieldFiltered
    }

    setMyQuotation(quotation)
    localStorage.setItem('myQuotation', JSON.stringify(quotation))
  }

  return (
    <Wrapper>
      <div className={styles.main}>
        <div className={toggleOne ? styles.hiddenLeft : styles.visible}>
          <Row>
            <Col span={12} offset={6}>
              <H2>
                Elige tu destino y las fechas <br /> en que piensas viajar
              </H2>
              <FormSection />
            </Col>
          </Row>
          <Row justify="center">
            <Col span={24}>
              <SliderAlojamiento />
            </Col>
          </Row>
          <br />
          <section className={styles.section}>
            <div>
              <Button onClick={() => router.push('/select')}>Atrás</Button>
              <Button onClick={handleToggleOne}>Siguiente</Button>
            </div>
          </section>
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
          <CategoryActivities
            dbCategory={dbCategory}
            dbActivity={dbActivity}
            saveCategoryActivity={saveCategoryActivity}
            deleteCategoryActivity={deleteCategoryActivity}
            handleClickNext={handleToggleTwo}
            handleClickBefore={handleToggleOne}
          />
        </div>
        <div className={toggleTwo ? styles.visible : styles.hiddenRight}>
          <OtherActivitiesSection handleClickBefore={handleToggleTwo} />
        </div>
      </div>
    </Wrapper>
  )
}

export default RecommendationPage
