import React from 'react'
import Layout from '../components/layout';
import css from '@emotion/css';

const contacto = () => (
  <Layout>
    <div css={styles}>
      <div className="contact-description">
        <h2>Contacto</h2>
      </div>
      <iframe css={mapStyles} title="address" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15929.991990076966!2d-76.519589!3d3.4713037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35894ad78bf65e4b!2sCasa+de+Eventos+Calima!5e0!3m2!1ses-419!2sco!4v1558231117195!5m2!1ses-419!2sco" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen />
    </div>
  </Layout>
)

const mapStyles = css`
height: 100%;
width: 100%;
`

const styles = css`
  height: calc(100vh - 115px);
  width: 100%;
  position: relative;
  .contact-description {
    padding: 0px 50px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    background-image: linear-gradient(to right, rgb(30,30,30), rgba(30,30,30,0.8) 50%, transparent);
    z-index: 999;
    h2 {
      color: white;
    }
  }
`

export default contacto
