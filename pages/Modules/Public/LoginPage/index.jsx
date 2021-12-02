import React from 'react'
import FormSection from 'sections/Public/Login/FormSection'
import Wrapper from 'layout/Wrapper'
import { NextSeo } from 'next-seo'

const LoginPage = () => {
  return (
    <Wrapper>
      <NextSeo title="Login" description="A short description goes here." />
      <div className="e-container">
        <FormSection />
      </div>
    </Wrapper>
  )
}

export default LoginPage
