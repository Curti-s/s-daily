import React from 'react';
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const PostPageTemplate = ({ post }) => {
  return (
    <div className="container mx-auto h-full">
      <div className="w-full  sm:px-48">
        <p className="text-2xl md:text-5xl text-left font-serif font-semibold-100 capitalize tracking-wide">{post.title}</p>
        <p className="text-base text-left text-gray-600 font-bold tracking-wide">{post.excerpt}</p>
        <div className="flex items-center mt-2">
          {post.author.length && post.author.map(a =>
            a.image.localFile.childImageSharp ? (
              <Img fluid={a.image.localFile.childImageSharp.fluid} alt={a.image.localFile.childImageSharp.fluid.originalName} className="w-20 h-20 rounded-full border-4 border-teal-500 mr-6" />
            ) : (
                <img src="https://via.placeholder.com/50" className="rounded-full mr-6 border-4 border-teal-500" alt="author-image" />
              )
          )}
          <div className="text-sm">
            {post.author.map(a =>
              <p className="text-gray-900 font-bold leading-none pb-2">{a.name}</p>
            )}
            <div className="flex pb-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://via.placeholder.com/20" className="rounded-full  mr-2" alt="instagram" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://via.placeholder.com/20" className="rounded-full mr-2" alt="twitter" />
              </a>
            </div>
            <p className="text-gray-600 font-bold">{post.date} . {post.content.markdownNode.childMdx.timeToRead} min read</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {post.coverImage.localFile.childImageSharp ?
          <Img fluid={post.coverImage.localFile.childImageSharp.fluid} alt={post.coverImage.localFile.childImageSharp.fluid.originalName} />
          :
          <img src="https://via.placeholder.com/1080" alt="featured-image" />
        }
        <MDXRenderer className="text-base font-sans leading-relaxed mt-4">{post.content.markdownNode.childMdx.body}</MDXRenderer>
      </div>
      <div className="p-4 flex flex-row-reverse items-center">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://via.placeholder.com/20" className="rounded-full  mr-2" alt="instagram" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://via.placeholder.com/20" className="rounded-full mr-2" alt="twitter" />
        </a>
        {post.author.map(a =>
          <p className="pr-4 text-gray-900 font-bold-400 italic leading-none">{a.name}</p>
        )}
      </div>
    </div>
  );
};

export default PostPageTemplate;