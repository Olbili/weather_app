import React from 'react'
import s from "./FivaDays.module.css"


export const FiveDays = ({ fiveFetchData }) => {
  // Filter data to display every day (index % 1 === 0)
  const filteredData = fiveFetchData.filter((_, index) => index %8 === 0);

  const formatDate = (dt) => {
    const date = new Date(dt * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  };

  const statusIcon = (status) => {
    if ("clouds"=== status) {
      return "clouds"
    } else {
      
    }
  } 

  return (
    <ul>
      {filteredData.map((item, index) => (
        <li key={index}>
          <div className={s.date}>{formatDate(item.dt)}</div>
          <div className={s.temp}>{Math.round(item.main.temp - 273.15)}°C</div>
          <div className={s.status}>{item.weather[0].main.toLowerCase()}</div>
          <p>{statusIcon(item.weather[0].main.toLowerCase())}</p>
        </li>
      ))}
    </ul>
  );
};




// export const FiveDays = ({fiveFetchData}) => {
//     const filteredData = fiveFetchData.filter((item, index) => index % 5 === 0);
//     console.log('filteredData', filteredData)
//   return (
//     <ul>
//       <li>
//         <div className={s.date}></div>
//         <div className={s.temp}></div>
//         <div className={s.status}></div>
//       </li>
//       <li>
//         <div className={s.date}></div>
//         <div className={s.temp}></div>
//         <div className={s.tatus}></div>
//       </li>
//       <li>
//         <div className={s.date}></div>
//         <div className={s.temp}></div>
//         <div className={s.tatus}></div>
//       </li>
//       <li>
//         <div className={s.date}></div>
//         <div className={s.temp}></div>
//         <div className={s.tatus}></div>
//       </li>
//       <li>
//         <div className={s.date}></div>
//         <div className={s.temp}></div>
//         <div className={s.tatus}></div>
//       </li>
//       <li>
//         <div className={s.date}></div>
//         <div className={s.temp}></div>
//         <div className={s.tatus}></div>
//       </li>
//       <li>
//         <div className={s.date}></div>
//         <div className={s.temp}></div>
//         <div className={s.tatus}></div>
//       </li>
//       <li>
//         <div className={s.date}></div>
//         <div className={s.temp}></div>
//         <div className={s.tatus}></div>
//       </li>
//     </ul>
//     )
// }
