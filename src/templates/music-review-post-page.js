import React from 'react';
import { graphql } from 'gatsby';

import PostPageTemplate from './post-page-template';

const MusicReviewPostPage = ({ data }) => {
  const { graphCmsMusicReviewPost: post } = data

  return <PostPageTemplate post={post} />;
};

export const data = graphql`
    query($id: String!){
      graphCmsMusicReviewPost(id: { eq:$id }) {
        title
        excerpt
        date
        author {
          name
          image {
            localFile {
              childImageSharp {
                fluid {
                  originalName
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        coverImage {
          localFile {
            childImageSharp {
              fluid {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        content {
          markdownNode {
            childMdx {
              timeToRead
              body
            }
          }
        }
      }
    }
  `;
export default MusicReviewPostPage;