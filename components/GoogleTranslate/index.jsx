import React, { useEffect } from 'react'

const GoogleTranslate = (props) => {
  const googleTranslateElementInit = () => {
    // eslint-disable-next-line no-new
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'pt',
        // eslint-disable-next-line no-undef
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        includedLanguages: 'en,es,pt',
        autoDisplay: false,
        multilanguagePage: true
      },
      'google_translate_element'
    )
  }

  useEffect(() => {
    const addScript = document.createElement('script')
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    )
    document.body.appendChild(addScript)
    window.googleTranslateElementInit = googleTranslateElementInit
  }, [])

  return <div id="google_translate_element" />
}

export default GoogleTranslate
