<p align="center">
    <a href="https://shrapdaily.netlify.app" target="_blank" rel="noopener noreferrer" >
      <img alt="Shrap Daily Logo" src="./src/img/shrap-daily-logo.png" width="200" />
    </a>
  </p>
  <h1 align="center">
    Shrap Daily website
  </h1>


> In order to run this locally, you'll need to have created a new GraphCMS project`.

Navigate into your new site’s directory and copy the `.env.sample` file.

```shell
cd graphcms-blog
cp .env.sample .env
```

Inside of your newly created `.env` file, provide values for each variable. These variables can be found in the [project settings UI](https://graphcms.com/docs/guides/concepts/apis#working-with-apis).

```env
GRAPHCMS_ENDPOINT=""
GRAPHCMS_TOKEN=""
```

3. **Start building!**

```shell
yarn dev
```

## Features

- Use [`gatsby-image`](https://www.gatsbyjs.org/packages/gatsby-image) with your GraphCMS image assets.
- MDX support via [`gatsby-plugin-mdx`](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx) on GraphCMS `RichText` fields.
- Built with [Tailwind CSS](https://tailwindcss.com/).
