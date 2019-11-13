import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components';
import img from '../images/connectBcg.jpeg'
import Img from 'gatsby-image';

const getImages = graphql`
{
 fixed: file(relativePath: {eq: "defaultBcg.jpeg"}) {
   childImageSharp {
     fixed(width: 300, height: 400, grayscale:true) {
       ...GatsbyImageSharpFixed
     }
   }
 }
 fluid: file(relativePath:{eq:"blogBcg.jpeg"}){
   childImageSharp{
     fluid{
      ...GatsbyImageSharpFluid_tracedSVG
     }
   }
 }
}
`

const Images = () => {
 const data = useStaticQuery(getImages);
 console.log(data);
 return (
   <Wrapper>
    <article>
     <h3>Basic image</h3>
     <img src={img} alt="" className="basic"/>
    </article>
    <article>
     <h3>Fixed image/blur</h3>
     <Img fixed={data.fixed.childImageSharp.fixed}></Img>
    </article>
    <article>
    <h3>fluid image/svg</h3>
    <Img fluid={data.fluid.childImageSharp.fluid}></Img>
    </article>
   </Wrapper>
  );
}
const Wrapper = styled.div`
 text-align: center;
 text-transform: capitalize;
 width: 80vw;
 margin: 0 auto 10rem auto;

 .basic{
  width: 100%;
 }
 article{
  border: 3px solid gray;
  padding: 1rem 0;
 }

 @media (min-width:992px){
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
 }
`
export default Images;