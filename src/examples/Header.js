import React from 'react';
import {useStaticQuery, graphql} from 'gatsby' 


const Header = () => {
 const {site:{siteMetadata}} = useStaticQuery(graphql`
 {
  site {
    siteMetadata {
      title
      description
      author
    }
  }
}

 `)
 return (
 <div>
<h1>title:</h1>
 <h1>author:{siteMetadata.author}</h1>
 </div>
 );
}

export default Header;