import React from 'react'
import Image from 'react-lazy-image'

const Img = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left
}) => {
  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }
  return (
    <div style={{ margin, height: photo.height, width: photo.width, ...cont }}>
      <Image source={photo.src} onClick={e => onClick(e, { index, photo })} style={{ margin: 0, width: photo.width, height: photo.height }}/>
    </div>
  )
}

const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

export default Img
