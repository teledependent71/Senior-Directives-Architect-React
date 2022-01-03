import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Senior Directives Architect</title>
        <meta property="og:title" content="Senior Directives Architect" />
      </Helmet>
    </div>
  )
}

export default Home
