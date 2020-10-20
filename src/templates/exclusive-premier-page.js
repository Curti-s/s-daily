import React from 'react';
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
};

export const exclusivePremierPageQuery = graphql`
  query($id:String!) {
    graphCmsPage(id: { eq:$id }) {
      title
      description
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
