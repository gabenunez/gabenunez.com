import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Gabe Nunez is web developer located in the San Francisco Bay Area... and really enjoys javascript :).' },
        { name: 'keywords', content: 'web development, web, website creating, website creator, web programmer' },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
