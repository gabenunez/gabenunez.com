module.exports = {
  siteMetadata: {
    title: 'Gabe Nuñez | Web Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-124809202-1',
        head: true
      },
    },
    ]
}
