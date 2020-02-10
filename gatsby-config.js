module.exports = {
  siteMetadata: {
    title: `KC Rocks 2020`,
    description: `An event to benefit Make-A-Wish Kansas City.`,
    author: `@aladage`,
    menuLinks: [
      {
        name: 'About KC Rocks',
        link: '#about-kc-rocks'
      },
      {
        name: 'About Make-A-Wish',
        link: '#about-make-a-wish'
      },
      {
        name: 'Bands',
        link: '#bands'
      },
      {
        name: 'Venue',
        link: '#venue'
      },
      // {
      //   name: 'Get Tickets',
      //   link: 'https://www.thetrumankc.com/tickets/',
      //   classNames: 'button button--small'
      // },
      {
        name: 'Donate',
        link: 'http://site.wish.org/goto/kcrocks',
        classNames: 'button button--small button--reversed'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KC Rocks`,
        short_name: `KC Rocks`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kcrocks_icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `az174za7kubu`,
        accessToken: `SvKWdnehSy1HWVFbEDDy8J4PAky-jINBrUhSKdSX4wc`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`
          }
        ]
      }
    }
  ]
}
