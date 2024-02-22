import React from 'react'
import { IoIosClose } from "react-icons/io";
import s from './modal.module.css'



const Modal = ({modalIsOpen, onClose}) => {
  return (
    <>
    {modalIsOpen && (
   <div className={s.modal}>
    <div className={s.modalWrapper}>
        <div className={s.modalContent}>
            <button className={s.closeModal} onClick={() => onClose()}>
            <IoIosClose />
            </button>
            <h1 className={s.sign}>Sign Up</h1>
            <form className={s.form}> 
                <label className={s.labelForm}>
                Username
                    <input className={s.inputForm} type="text" name="name" placeholder='Username' />
                </label>
                <label className={s.labelForm}>
                E-Mail
                    <input className={s.inputForm} type='' name="email" placeholder='E-Mail' />
                </label>
                <label className={s.labelForm}>
                Password
                    <input className={s.inputForm} type="password" name="password" placeholder='Password' />
                </label>
                <button className={s.buttonForm} type='submit'>Sign Up</button>   
            </form>
            <p>Already have an account? <a href='#'>Log in</a></p>
        </div>
    </div>
   </div>
    )
}
   </>
  )
}

export default Modal