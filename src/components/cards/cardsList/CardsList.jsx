import s from './CardsList.module.css'
import React from 'react'
import CardsItem from '../cardsItem/CardsItem';
export const CardsList = ({ data, delCard, plusFiveFetchData }) => {
  // setIsFiveDaysVisible, isFiveDaysVisible
  console.log(data)
  return (
    <ul className={s.clist}>
      {data.map (({id, main, wind:{speed}, name, sys:{country}, visibility}) => {
        return (
          <CardsItem key={id} name={name} main={main} speed={speed} country={country} visibility={visibility} delCard={delCard} plusFiveFetchData={plusFiveFetchData} />
          // setIsFiveDaysVisible={setIsFiveDaysVisible} isFiveDaysVisible={isFiveDaysVisible}
        )  
      })}
    </ul>
  );
};

