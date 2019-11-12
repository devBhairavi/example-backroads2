import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'

const blog = () => {
  return(
    <Layout>
    Hello Blog
    <Link to='/blog/'>Blog</Link>
   </Layout>
  )
}

export default blog
