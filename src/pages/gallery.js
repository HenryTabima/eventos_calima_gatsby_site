import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout';
import LightboxGallery from '../components/gallery';

import photos from '../utils/image-stub'

const GaleryPage = () => (
  <Layout>
    <section css={styles}>
      <h1>
        Gallery
      </h1>
      <div className="container">
        <LightboxGallery photos={photos} />
      </div>
    </section>
  </Layout>
)

const styles = css`
  h1 {
    text-align: center;
    color: whitesmoke;
    background-color: black;
    padding: 40px;
    margin-top: 0;
  }
  .container {
    padding: 10px;
    max-width: 960px;
    margin: auto;
  }
`

export default GaleryPage