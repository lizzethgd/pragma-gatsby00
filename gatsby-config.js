module.exports = {
  siteMetadata: {
    title: `Pragmatic Inteligent Consulting`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Lizzeth Garcia`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
<<<<<<< HEAD
=======
    `gatsby-plugin-sass`,
>>>>>>> “MensajeRecordarCambio”
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
<<<<<<< HEAD
=======
      resolve: 'gatsby-transformer-remark',
      options: {
          plugins: [
            {
              resolve: `gatsby-remark-relative-images`,
            },
              {
                  resolve: 'gatsby-remark-images',
                  options: {
                      maxWidth: 750,
                      linkImagesToOriginal: false
                  }
              }
              
          ]
      }
  },
 
    {
>>>>>>> “MensajeRecordarCambio”
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
