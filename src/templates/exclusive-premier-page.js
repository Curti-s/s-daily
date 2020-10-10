import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import PostListTemplate from './post-list-template';

const ExclusivePremierPage = ({ data }) => {
  const { allGraphCmsExclusivePremierPost: { nodes: posts } } = data;

  return (
    <div>
      {
        posts.length && posts.map(post => (
          <PostListTemplate post={post} />
        ))
      }
    </div>
  );
}

ExclusivePremierPage.propTypes = { data: PropTypes.object.isRequired };

export const exclusivePremierPageQuery = graphql`
  query($id:String!) {
    graphCmsPage(id: { eq:$id }) {
      title
      description
      seo {
        browserTitle
        description
        slug
      }
    }

    allGraphCmsExclusivePremierPost(sort: {fields: date, order: DESC}, filter: {slug: {eq: "exclusive-premier-post"}}) {
      nodes {
        id
        title
        excerpt
        date
        author {
          name
          image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
        coverImage {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
        content {
          markdownNode {
            childMdx {
              timeToRead
            }
          }
        }
      }
    }
  }
`;
export default ExclusivePremierPage;

