/* eslint-disable camelcase */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'JoeyHome',
    author: 'Joey Etamity',
    description: `Discover the harmony of code 💻 and music 🎹.`,
    siteUrl: 'https://joeyhome.com',
    social: {
      twitter: 'g33kscr33d',
      facebook: 'g33kscr33d',
      instagram: 'g33kscr33d',
      github: 'etamity'
    },
    config: {
      postsPerPage: 10,
      disqus: 'etamity'
    }
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
        // {
        //   resolve: 'gatsby-plugin-google-analytics',
        //   options: {
        //     trackingId: 'UA-45418096-3'
        //   }
        // }
      ] :
      []),
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'JoeyHome Tech Blog',
        short_name: 'JoeyHome',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: path.resolve('src/assets/icon.png')
      }
    },
    'gatsby-plugin-offline'
  ]
};
