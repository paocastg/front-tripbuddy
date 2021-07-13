import React from 'react'
import App from 'next/app'
import Router from 'next/router'

import 'antd/dist/antd.css'

class MyApp extends App {
  componentDidMount () {
    Router.events.on('routeChangeComplete', this.handleRouteChange)
  }

  componentWillUnmount () {
    Router.events.off('routeChangeComplete', this.handleRouteChange)
  }

  render () {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
