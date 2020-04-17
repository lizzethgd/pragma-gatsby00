import React, { Component } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types' 
import Blog from "../components/layout"
import imagePlaceholder from '../images/img-placeholder.png'

const SectionBlogs =   () => {
    const dataBlog=useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                id
                title
                date
              }
              fields{
                  slug
              }
            }
          }
        }
      }
    `)
    console.log(dataBlog)
    //const {image, BlogTitle, BlogText } = this.props
    return (
        <div className="album py-5 bg-light">
         <div className="container">
          <div className="row">
          {dataBlog.allMarkdownRemark.edges.map((edge) => {
                    return(
                            <Blog key={edge.node.fields.slug} image={imagePlaceholder} bannerWhiteTitle={edge.node.frontmatter.title} bannerWhiteText={edge.node.frontmatter.date}/>
                    )
                  }
                 )
                }
          </div>
         </div>
        </div>
            
)}

//SectionBlogs.propTypes = {}

//SectionBlogs.defaultProps = {}

export default SectionBlogs

/*<Link to={`/blog/${edge.node.fields.slug}`} >
<h2>{edge.node.frontmatter.title}</h2>
<p>{edge.node.frontmatter.date}</p>
</Link*/