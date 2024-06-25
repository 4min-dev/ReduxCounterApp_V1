import React from 'react';
import '../../style/css/pages/homePage/homePage.css';
import { useSelector } from 'react-redux';
import { IBankState } from '../../ts/interfaces/bankCounter/IBankState';
import { HomePageMainCounterInterface } from '../UI/homePageUI/HomePageMainCounterInterface';
import { HomePageUsersSection } from '../sections/homePageSections/HomePageUsersSection';

export const HomePage:React.FC = () => {

    const selector = useSelector((state:IBankState) => state.bankReducer)

  return (
    <div className='homePage'>
      <h1>{`Total cash - $${selector.cash}`}</h1>
      <HomePageMainCounterInterface totalCash={selector.cash}/>
      <HomePageUsersSection/>
    </div>
  )
}