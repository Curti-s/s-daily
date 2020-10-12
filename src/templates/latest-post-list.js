import React from 'react';
import { Link } from 'gatsby';

const LatestPostListTemplate = ({ post }) => (
  <div className="">
    <li key={post.id} className="py-12">
      <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base leading-6 font-medium text-gray-500">
            <time dateTime={post.date}>{post.date}</time>
          </dd>
        </dl>
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6">
            <h2 className="text-2xl leading-8 font-bold tracking-tight">
              <Link
                to={post.id}
                className="text-gray-900"
              >
                {post.title}
              </Link>
            </h2>
            {post.excerpt && (
            <div className="prose max-w-none text-gray-500">
              {post.excerpt}
            </div>
            )}
          </div>
          <div className="text-base leading-6 font-medium">
            <Link
              to={post.id}
              className="text-purple-500 hover:text-purple-600"
              aria-label={`Read "${post.title}"`}
            >
              Read more &rarr;
            </Link>
          </div>
        </div>
      </article>
    </li>
  </div>
);

export default LatestPostListTemplate;
