import { WiDaySunny } from "react-icons/wi";
import { IoReload } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";
import bar from "../../../img/bar.svg";
import eye from "../../../img/eye.svg";
import rain from "../../../img/rain.svg";
import temp from "../../../img/temp.svg";
import speeds from "../../../img/speed.svg";


import React, { useState } from 'react';
import s from './CardsItem.module.css'
import fetchData from "components/API/Weather";


export const CardsItem = ({ id, name, main, speed, country, visibility, delCard, isLiked=false }) => { 
const [likedState, setlikedState] = useState(isLiked)
const [weatherDetails, setWeatherDetails] = useState(false)

const like = () => {
  setlikedState(!likedState)
}

const toggleDetails = () => {
  setWeatherDetails(!weatherDetails)
}

const celsius = Math.round(main.temp - 273.15);
const celsiusMin = Math.round(main.temp_min - 273.15);
const celsiusMax = Math.round(main.temp_max - 273.15);
const celsiusLike = Math.round(main.feels_like - 273.15);
  return (
    <>
    <li id={id} className={s.card}>
      <div className={s.cardHeader}>
        <p className={s.text}>{name}</p>
        <p className={s.text}>{country}</p>
      </div>
      <div className={s.forecastButton}>
        <button className={s.forecastButtonHourly}>Hourly forecast</button>
        <button className={s.forecastButtonWeekly}>Weekly forecast</button>
      </div>
      <div className={s.now}>
        <p className={s.date}>{new Date().toLocaleDateString()}</p>
        <p className={s.day}>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p>
      </div>
      <div className={s.cardBody}>
      {/* <img src="" alt="Weather icon" className={s.weatherIcon} /> */}
        <WiDaySunny className={s.img}/>
        <p className={s.temperature}>{main ? `${celsius} °C` : 'N/A'}</p>
      </div>
      <div className={s.cardActions}>
        <button className={s.reload} onClick={() => (console.log('name', name),fetchData())}><IoReload/></button>
        <button className={s.like} onClick={like}>
          {likedState ? <FcLike /> : <CiHeart />}
        </button>
        <button className={s.seeMore} onClick={toggleDetails}>See more</button>
        <button className={s.del} onClick={() => (delCard(name))}><RiDeleteBin5Line /></button>
      </div>
    </li>
    <div>
      {weatherDetails && (
        <ul className={s.details}>
          <li>Feels like <br/>
          {main ? `${celsiusLike} °C` : 'N/A'}<br/>
          <img src={temp} alt="" />
          </li>
          <li>Min °C {main ? `${celsiusMin} °C ` : 'N/A'}<br/>
          Max °C {main ? `${celsiusMax} °C ` : 'N/A'}</li>
          <li>Humidity <br/>
          {main.humidity}%<br/>
          <img src={rain} alt="" />
          </li>
          <li>Pressure <br/>
          {main.pressure} Pa<br/>
          <img src={bar} alt="" />
          </li>
          <li>Wind speed <br/>
          {speed} m/s<br/>
          <img src={speeds} alt="" />
          </li>
          <li>Visibility <br/>
          {visibility}<br/>
          <img src={eye} alt="" />
          </li>
        </ul>
      )}
    </div>
    </>
  );
};

export default CardsItem;