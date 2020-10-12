import React from 'react';

import TwitterSVG from '../svg/twitter.svg';
import InstagramSVG from '../svg/instagram.svg';

const socialLinks = [
  {
    Component: TwitterSVG,
    href: 'https://twitter.com/shrapdaily',
    title: 'Twitter',
  },
  {
    Component: InstagramSVG,
    href: 'https://www.instagram.com/shrap_daily/',
    title: 'Instagram',
  },
];

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="flex flex-col md:flex-row items-center md:justify-between py-6 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl space-y-6 md:space-y-0">
        <p className="text-gray-300">ShrapDaily</p>
        <ul className="inline-flex space-x-6">
          {socialLinks.map(({ Component, href, title }) => ( // eslint-disable-line react/no-array-index-key
            <li>
              <a
                href={href}
                target="_blank"
                className="block text-gray-300 hover:text-white p-1 text-sm"
                rel="noopener noreferrer"
                title={title}
              >
                <Component className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
