import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

const AboutPage = ({ data: { graphCmsPage: page } }) => (
  <div className="divide-y divide-gray-200">
    <div className="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {page.title}
      </h1>
      {page.description && (
      <p className="text-lg leading-7 text-gray-500">{page.description}</p>
      )}
    </div>
    <div className="pb-16 lg:pb-20">
      <div className="prose max-w-none pt-10 pb-8">
        <MDXRenderer>{page.content.markdownNode.childMdx.body}</MDXRenderer>
      </div>
    </div>
  </div>
);

export const aboutPageQuery = graphql`
  query($id: String!) {
    graphCmsPage(id: { eq:$id }) {
      title
      description
      content {
        markdownNode {
          childMdx {
            body
          }
        }
      }
    }
  }
`;
export default AboutPage;
