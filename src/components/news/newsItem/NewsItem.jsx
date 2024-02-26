import React from 'react'
import s from './newsItem.module.css'

const NewsItem = ({description, urlToImage}) => {
  return (
    <li className={s.newsItem}>
      {/* {item.urlToImage ? (

      )} */}
        <img src={urlToImage} alt="pets" className={s.newsImg}/>
        <p className={s.description}>{description}</p>
    </li>
  )
}

export default NewsItem