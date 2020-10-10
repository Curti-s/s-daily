import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import PostListTemplate from './post-list-template';

const InterviewPage = ({ data }) => {
  const { allGraphCmsInterviewPost: { nodes: posts } } = data;

  return (
    <div>
      {
        posts.length && posts.map(post => <PostListTemplate post={post} />)
      }
    </div>
  );
}

InterviewPage.propTypes = { data: PropTypes.object.isRequired };

export const interviewPageQuery = graphql`
  query($id:String!) {
    graphCmsPage(id: { eq:$id }) {
      title
    }
    allGraphCmsInterviewPost(sort: {fields: date, order: DESC}, filter: {slug: {eq: "interview-post"}}) {
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
export default InterviewPage;