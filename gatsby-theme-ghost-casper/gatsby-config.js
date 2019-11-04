const path = require('path');

module.exports = themeOptions => ({
  siteMetadata: {
    title: '',
    author: '',
    description: '',
    siteUrl: 'https://joeyhome.com',
    social: {
      twitter: '',
      facebook: '',
      instagram: '',
      github: '',
    },
    config: {
      postsPerPage: 10,
      disqus: '',
      scripts: []
    }
  },
  pathPrefix: themeOptions.pathPrefix || '',
  mapping: {
    // "Mdx.frontmatter.tags": `TagsYaml`,
    'Mdx.frontmatter.author': 'AuthorsYaml',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve('src/pages'),
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve('src/assets'),
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              showCaptions: true,
              maxWidth: 840,
              quality: 80,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
        plugins: ['gatsby-remark-images'],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-easy-import`),
          require(`postcss-custom-properties`),
          require(`postcss-color-mod-function`),
          require('autoprefixer'),
          require('cssnano')
        ],
      },
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           showCaptions: true,
    //           maxWidth: 840,
    //           quality: 80,
    //         },
    //       },
    //       {
    //         resolve: 'gatsby-remark-responsive-iframe',
    //         options: {
    //           wrapperStyle: 'margin-bottom: 1.0725rem',
    //         },
    //       },
    //       'gatsby-remark-prismjs',
    //       'gatsby-remark-copy-linked-files',
    //       'gatsby-remark-smartypants',
    //     ],
    //   },
    // },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve('./src/data/'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-feed',
      options: require('gatsby-plugin-mdx/feed')
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/assets`,
      },
    },
  ],
});
