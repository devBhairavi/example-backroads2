import React from "react"
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import {Link} from 'gatsby'
import Banner from '../components/Banner'

export default () => {
 return(
   <Layout>
    <header className={styles.error}>
      <Banner title="Oops it's a ead end">
        <Link className="btn-white" to='/'>
          Back to home page
        </Link>
      </Banner>
    </header>
   </Layout>
 )
}
