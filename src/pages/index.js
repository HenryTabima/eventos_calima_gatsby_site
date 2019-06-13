import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout location="/">
    <SEO title="Home" keywords={[`Eventos`, `Eventos calima`, `Eventos cali`]} />
    <div css={styles}>
      <div className="column quince">
        <Link to="/gallery/">
          <div className="overlay">
            <div className="content">
              <h2>Quince Años</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className="column bodas">
        <Link to="/gallery/">
          <div className="overlay">
            <div className="content">
              <h2>Bodas</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className="column fiesta">
        <Link to="/gallery/">
          <div className="overlay">
            <div className="content">
              <h2>Reuniones</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </Layout>
)

const styles = css`
min-height: calc(100vh - 50px);
display: flex;
.column {
  cursor: pointer;
  background-size: cover;
  flex: 1;
  position: relative;
  transition: all 0.5s;
  &:hover {
    flex: 2;
  }
  .overlay {
    position: absolute;
    padding: 30px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.8);
    transition: background 1s;
    &:hover {
      background-color: rgba(0,0,0,0.3);
    }
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;
      h2 {
        color: whitesmoke;
        text-transform: uppercase;
        margin: 0;
        text-shadow: 1px 1px 5px rgba(0,0,0,0.5), -1px -1px 5px rgba(0,0,0,0.5);
      }
    }
  }
  &.quince {
    background: url('https://cdn.pixabay.com/photo/2017/11/01/00/11/fifteen-years-2906843_960_720.jpg') no-repeat center;
    background-size: cover;
  }
  &.bodas {
    background: url('https://cdn.pixabay.com/photo/2016/11/18/18/32/bloom-1836315_960_720.jpg') no-repeat center;
    background-size: cover;
  }
  &.fiesta {
    background: url('https://cdn.pixabay.com/photo/2016/11/09/21/28/exclusive-banquet-1812772_960_720.jpg') no-repeat center;
    background-size: cover;
  }

}
`

export default IndexPage
