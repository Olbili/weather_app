import React from 'react'
import s from './sliderItems.module.css'

const SliderItems = ({webformatURL}) => {
  return (
    <div>
        <img src={webformatURL} alt="" className={s.sliderImg}/>
    </div>
  )
}

export default SliderItems