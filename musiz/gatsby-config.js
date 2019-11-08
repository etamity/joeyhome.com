/* eslint-disable camelcase */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Musiz',
    author: 'Joey Etamity',
    description: `Discover the beauty of music harmony🎹.`,
    siteUrl: 'https://musiz.uk',
    social: {
      twitter: 'etamity',
      facebook: '',
      instagram: 'joeyetamity',
      github: 'etamity'
    },
    config: {
      postsPerPage: 10,
      disqus: 'etamity',
      scripts: []
    },
  },

  plugins: [
    {
      resolve: 'gatsby-theme-ghost-casper',
      options: {
        title: 'JoeyHome'
      }
    },
    ...(process.env.NODE_ENV === 'production' ?
      [
        // {
        //   resolve: 'gatsby-plugin-guess-js',
        //   options: {
        //     // Find the view id in the GA admin in a section labeled "views"
        //     GAViewID: '184855678',
        //     minimumThreshold: 0.03,
        //     // The "period" for fetching analytic data.
        //     period: {
        //       startDate: new Date('2018-12-1'),
        //       endDate: new Date()
        //     }
        //   }
        // },
        {
          resolve: 'gatsby-plugin-google-analytics',
          options: {
            trackingId: 'UA-45418096-3'
          }
        }
      ] :
      []),
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Musiz Blog',
        short_name: 'Musiz',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: path.resolve('src/assets/icon.png')
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-45418096-10',
          // Setting this parameter is optional
          anonymize: true
        },
        facebookPixel: {
          pixelId: '955456258150306'
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    'gatsby-plugin-offline'
  ]
};
