import React from 'react';
import { graphql } from 'gatsby';

import PostPageTemplate from './post-page-template';

const ExclusivePremierPostPage = ({ data }) => {
  const { graphCmsExclusivePremierPost: post } = data

  return <PostPageTemplate post={post} />;
};

export const data = graphql`
    query($id: String!){
      graphCmsExclusivePremierPost(id: { eq:$id }) {
        title
        excerpt
        date
        author {
          name
          instagramLink
          twitterLink
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
export default ExclusivePremierPostPage;