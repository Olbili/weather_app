import React from 'react'
import s from './footer.module.css'
import logo from 'img/logo.svg';
import inst from 'img/inst.svg';
import face from 'img/face.svg';
import whatsapp from 'img/whatsapp.svg';


const Footer = () => {
  return (
    <footer className={s.footer}>
        <div className={s.logo}>
            <img src={logo} alt="logo" />
        </div>
        <div className={s.adress}>
            <h3>Adress</h3>
            <p>Svobody str. 35 <br/>
            Kyiv <br/>
            Ukraine <br/></p>
        </div>
        <div className={s.contacts}>
        <h3>Contact us</h3>
        <div className={s.socials}>
            <img src={inst} alt="" />
            <img src={face} alt="" />
            <img src={whatsapp} alt="" />
        </div>
        </div>
    </footer>
  )
}

export default Footer