import React from 'react';
import Link from 'gatsby-link';
import PostListing from '../components/PostListing'
import { SSL_OP_PKCS1_CHECK_2 } from 'constants';


const IndexPage = ({data}) => (
  <div>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
)


export default IndexPage

export const query = graphql`
  query IndexSiteMetadata {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(sort: {
      fields: [frontmatter___date],
      order: DESC
    }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          html
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`