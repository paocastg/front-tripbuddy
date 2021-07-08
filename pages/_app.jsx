import React from "react";
import App from "next/app";
import Router from 'next/router';


// import { pixelsCode } from '@Src/Utils/Constants';
// import { pageView } from "@Src/Utils/GoogleAnalyticsUtil";

class MyApp extends App {
  componentDidMount() {
    // window.fbq('init', pixelsCode.codeFaceAffiliation);
    // window.fbq('init', pixelsCode.codeFaceUneteOnp);
    // window.fbq('track', 'PageView');

    Router.events.on('routeChangeComplete', this.handleRouteChange);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete', this.handleRouteChange)
  }

  handleRouteChange = (url) => {
    pageView(url)
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
