/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core'

import Header from "./header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div css={styles}>
        <Header siteTitle={data.site.siteMetadata.title} home={location === '/'}/>
          <main css={location === '/' ? {paddingTop: '0px'} : {paddingTop: '65px'}}>{children}</main>
          <footer>
            © {new Date().getFullYear()} Casa de Eventos Calima, <FontAwesomeIcon icon={faCode} /> By
            {` `}
            <a href="https://www.henrytabima.com" target="_blank" rel="noopener noreferrer">Henry Tabima G</a>
          </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const styles = css`
  a {
    text-shadow: none;
  }
  footer {
    padding: 10px;
    background-color: black;
    color: white;
    a {
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export default Layout
