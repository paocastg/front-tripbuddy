import React from 'react'
import CustomSvgIcon from './CustomSvgIcon'
import styles from './index.module.scss'

const CategoryActivities = () => {
  const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
  )
  const JavascriptSvg = () => (
    <svg width="1em" height="1em" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>
  )

  const AddCategoryAndActivitySelected = (data) => {
    // update
    console.log(data)
  }

  return (
    <section className={styles.section} >
      <h3 styles={{ textAlign: 'center' }}><strong>Seleccione la categoria que mejor describe tu viaje</strong></h3>
      <div>
        <CustomSvgIcon name='JAVASCRIPT' svg={JavascriptSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected} />
        <CustomSvgIcon name='CORAZON' svg={HeartSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected}/>
        <CustomSvgIcon name='JAVASCRIPT' svg={JavascriptSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected}/>
        <CustomSvgIcon name='CORAZON' svg={HeartSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected}/>
        <CustomSvgIcon name='JAVASCRIPT' svg={JavascriptSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected}/>
        <CustomSvgIcon name='CORAZON' svg={HeartSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected}/>
      </div>
      <h3><strong>Seleccione el tipo de actividades que te interesa realizar</strong></h3>
      <div>
        <CustomSvgIcon name='JAVASCRIPT' svg={JavascriptSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected} />
        <CustomSvgIcon name='CORAZON' svg={HeartSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected}/>
        <CustomSvgIcon name='JAVASCRIPT' svg={JavascriptSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected} />
        <CustomSvgIcon name='CORAZON' svg={HeartSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected}/>
        <CustomSvgIcon name='JAVASCRIPT' svg={JavascriptSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected} />
        <CustomSvgIcon name='CORAZON' svg={HeartSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected}/>
        <CustomSvgIcon name='JAVASCRIPT' svg={JavascriptSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected} />
        <CustomSvgIcon name='CORAZON' svg={HeartSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected}/>
        <CustomSvgIcon name='JAVASCRIPT' svg={JavascriptSvg} AddCategoryAndActivitySelected={AddCategoryAndActivitySelected} />
      </div>
      <div>
        <button className={styles.btn} onClick={() => console.log('Atrás')}><strong>Atrás</strong></button>
        <button className={styles.btn} onClick={() => console.log('Siguiente')}><strong>Siguiente</strong></button>
      </div>
    </section>
  )
}

export default CategoryActivities
