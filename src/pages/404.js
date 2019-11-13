import React from "react"
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import Banner from '../components/Banner'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default () => {
 return(
   <Layout>
    <header className={styles.error}>
      <Banner title="Oops it's a ead end">
        <AniLink fade className="btn-white" to='/'>
          Back to home page
        </AniLink>
      </Banner>
    </header>
   </Layout>
 )
}
