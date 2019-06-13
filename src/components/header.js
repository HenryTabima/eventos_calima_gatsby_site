// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Header = ({ siteTitle, home }) => {
  const styles = makeStyles(home)
  return (
    <header css={styles}>
      <div className="logo">
        <h1>{siteTitle}</h1>
      </div>
      <nav>
        <ul className="menu main-nav">
          <li className="menu-item"><Link to='/'>HOME</Link></li>
          <li className="menu-item"><Link to='/gallery/'>QUINCE AÑOS</Link></li>
          <li className="menu-item"><Link to='/gallery/'>BODAS</Link></li>
          <li className="menu-item"><Link to='/gallery/'>REUNIONES</Link></li>
          <li className="menu-item"><Link to='/contacto/'>CONTACTO</Link></li>
        </ul>
      </nav>
      <div className="social-media">
        <ul className="menu">
          <li className="menu-item"><FontAwesomeIcon icon={faFacebookSquare} /></li>
          <li className="menu-item"><FontAwesomeIcon icon={faWhatsapp} /></li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

function makeStyles (home) {
  const color = home ? 'whitesmoke' : 'gray'
  const bgColor = home ? 'transparent' : 'whitesmoke'
  const boxShadow = home ? '' : 'box-shadow: -5px 0 10px rgba(0,0,0,0.5);'
  const linkHeight = home ? '120px' : 'auto'
  return css`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    color: ${color};
    background-color: ${bgColor};
    display: grid;
    grid-template-columns: 1fr 50% 1fr;
    align-items: center;
    ${boxShadow}
    .logo {
      text-align: center;
      border-bottom: none!important;
      h1 {
        color: ${color};
        margin: 0;
      }
    }
    .main-nav {
      display: flex;
      .menu-item {
        margin: 0;
        font-weight: bold;
        font-size: 16px;
        a {
          display: inline-block;
          line-height: ${linkHeight};
          height: ${linkHeight};
          color: ${color};
          background: none;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
    .social-media {
      .menu-item {
        font-size: 38px;
        margin: 4px 2px;
      }
    }
    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      list-style-type: none;
      padding: 0;
      margin: 0;
      .menu-item {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  `
}

export default Header
