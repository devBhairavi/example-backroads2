import React from 'react';
import {StaticQuery, graphql} from 'gatsby'
const getSiteData = graphql`
{
 site{
   siteMetadata{
     title
     description
     author
   }
 }
}
`;
const RegularHeader = () => {
 return (
 <div>
   <StaticQuery query={getSiteData} render={({site:{siteMetadata}})=>{
    return(
     <div>
       <h1>Hello people</h1>
       <p></p>
      </div>
    )
   }}/>
 </div>

 );
}

export default RegularHeader;
