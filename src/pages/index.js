import React from 'react';
import { graphql } from 'gatsby';

import LatestPostListTemplate from '../templates/latest-post-list';

function IndexPage({ data: { allGraphCmsExclusivePremierPost, allGraphCmsInterviewPost, allGraphCmsMusicReviewPost } }) {
  return (
    <div>
      <div className="divide-y divide-gray-200">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-2xl sm:leading-10 md:text-md md:leading-14">
            Latest on Exclusive Premiers...
          </h1>
        </div>

        <ul className="">
          {allGraphCmsExclusivePremierPost.nodes.map(post => <LatestPostListTemplate post={post} />)}
        </ul>
      </div>
      <div className="divide-y divide-gray-200">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-2xl sm:leading-10 md:text-md md:leading-14">
            Latest on Interviews...
          </h1>
        </div>

        <ul className="">
          {allGraphCmsInterviewPost.nodes.map(post => <LatestPostListTemplate post={post} />)}
        </ul>
      </div>
      <div className="divide-y divide-gray-200">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-2xl sm:leading-10 md:text-md md:leading-14">
            Latest on Music Reviews...
          </h1>
        </div>

        <ul className="">
          {allGraphCmsMusicReviewPost.nodes.map(post => <LatestPostListTemplate post={post} />)}
        </ul>
      </div>
    </div>
  );
}

export const indexPageQuery = graphql`
  {
    allGraphCmsExclusivePremierPost(sort: { fields: date, order: DESC }, limit: 2) {
      nodes {
        id
        date
        excerpt
        slug
        title
      }
    }
    allGraphCmsInterviewPost(sort: { fields: date, order: DESC }, limit: 2) {
      nodes {
        id
        date
        excerpt
        slug
        title
      }
    }
    allGraphCmsMusicReviewPost(sort: { fields: date, order: DESC }, limit: 2) {
      nodes {
        id
        date
        excerpt
        slug
        title
      }
    }
  }
`;

export default IndexPage;
