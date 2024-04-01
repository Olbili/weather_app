// import React from 'react'
// import bar from "../../../img/bar.svg";
// import eye from "../../../img/eye.svg";
// import rain from "../../../img/rain.svg";
// import temp from "../../../img/temp.svg";
// import speeds from "../../../img/speed.svg";
// export const WeatherDetails = () => {
//     const celsius = Math.round(main.temp - 273.15);
//     const celsiusMin = Math.round(main.temp_min - 273.15);
//     const celsiusMax = Math.round(main.temp_max - 273.15);
//     const celsiusLike = Math.round(main.feels_like - 273.15);
//   return (
//     <ul className={s.details}>
//           <li>Feels like <br/>
//           {main ? `${celsiusLike} °C` : 'N/A'}<br/>
//           <img src={temp} alt="" />
//           </li>
//           <li>Min °C {main ? `${celsiusMin} °C ` : 'N/A'}<br/>
//           Max °C {main ? `${celsiusMax} °C ` : 'N/A'}</li>
//           <li>Humidity <br/>
//           {main.humidity}%<br/>
//           <img src={rain} alt="" />
//           </li>
//           <li>Pressure <br/>
//           {main.pressure} Pa<br/>
//           <img src={bar} alt="" />
//           </li>
//           <li>Wind speed <br/>
//           {speed} m/s<br/>
//           <img src={speeds} alt="" />
//           </li>
//           <li>Visibility <br/>
//           {visibility}<br/>
//           <img src={eye} alt="" />
//           </li>
//         </ul>
//   )
// }
