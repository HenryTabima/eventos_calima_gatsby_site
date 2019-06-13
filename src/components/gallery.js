import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import Img from './image'

class LightboxGallery extends Component {
  constructor () {
    super()
    this.state = { currentImage: 0 }
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      ligthboxIsOpen: true
    })
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      ligthboxIsOpen: false
    })
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  render () {
    return (
      <div>
        <Gallery photos={this.props.photos}
          direction="column"
          onClick={this.openLightbox}
          renderImage={Img}
        />
        <Lightbox images={this.props.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.ligthboxIsOpen}
        />
      </div>
    )
  }
}

export default LightboxGallery