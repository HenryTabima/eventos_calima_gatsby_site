import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import css from '@emotion/css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 3.4711833,
      lng: -76.5095145
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBBLMOrDxyx3fdFTyH8vdXsflULUhe8ydM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <FontAwesomeIcon
            css={markerStyles}
            icon={faMapMarker}
            lat={3.4711833}
            lng={-76.5095145}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

const markerStyles = css`
  font-size: 3rem;
  color: teal;
  margin-bottom: 3rem;
`

export default SimpleMap;