import React from 'react'
import Home from '../components/Home/Index'
import HeadTitle from '../components/Shared/HeadTitle'
import Layout from '../components/Shared/Layout'

const Index = () => (
  <>
    <HeadTitle />
    <Layout content={<Home />} />
  </>
)

export default Index