import React from 'react'
import SliderItems from './sliderItems/SliderItems'

const SliderImages = ({images}) => {
  return (
    <div>
        {images.map(({webformatURL}) => (
            <SliderItems webformatURL={webformatURL}/>
        ))}
    </div>
  )
}

export default SliderImages