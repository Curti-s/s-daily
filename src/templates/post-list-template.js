import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const PostListTemplate = ({ post }) => (
  <Link to={`/${post.id}`}>
    <div className="flex max-w-2xl py-4">
      <div className="w-2/3">
        <div className="flex mb-2">
          {post.author.length && post.author.map(a => (a.image.localFile.childImageSharp ? (
            <Img fluid={a.image.localFile.childImageSharp.fluid} alt={a.image.localFile.childImageSharp.fluid.originalName} className="h-6 w-6 rounded-full border-2 border-gray-900" />
          ) : (
            <img src="https://via.placeholder.com/20" alt="placeholder" className="rounded-full" />
          )))}
          {post.author.map(a => (
            <p className="pl-2 text-sm text-black-900 font-semibold">
              {a.name}
              {' '}
              <span className="text-black-300 font-medium">in</span>
              {' '}
              ShrapDaily
            </p>
          ))}
        </div>
        <div className="flex flex-col mr-4">
          <h2 className="text-lg text-black-900 font-semibold tracking-wide break-words">{post.title}</h2>
          <div className="pt-2">
            <p className="text-xs text-gray-500 tracking-wide break-words">{post.excerpt}</p>
            <p className="pt-1 text-xs text-gray-500">
              {post.date}
              {' '}
              .
              {' '}
              {post.content.markdownNode.childMdx.timeToRead}
              {' '}
              min read
            </p>
          </div>
        </div>
      </div>
      <div className="1/3">
        {post.coverImage.localFile.childImageSharp
          ? <Img fluid={post.coverImage.localFile.childImageSharp.fluid} alt={post.coverImage.localFile.childImageSharp.fluid.originalName} className=" h-32 w-32 sm:h-40 sm:w-40" />
          : <img src="https://via.placeholder.com/150" alt="placeholder" />}
      </div>
    </div>
  </Link>
);

export default PostListTemplate;
