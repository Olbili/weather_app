import { contextInput } from 'components/App';
import React, { useContext, useState } from 'react';
import s from "./HeroWrapper.module.css";

const HeroWrapper = () => {
    const [inputValue, setInputValue] = useState("");
    const { plusInputValue } = useContext(contextInput);

    const input = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        plusInputValue(inputValue);
        
        // window.localstorage.setItem('inputValue', inputValue)
        // setInputValue("");
    }

    return (
        <>
            <section className={s.heroWrapper}>
                <h1>Weather dashboard</h1>
                <div className={s.plus}>
                        <p>Create your personal list of favorite cities and always be aware of the weather.</p>
                        <p>October 2023Friday, 13th</p>
                </div>
                <form onSubmit={onSubmit}>
                    <input type="text" className={s.input} onChange={input} placeholder='Search location...'/>
                    <button type='submit' className={s.button}></button>
                </form>
            </section>
        </>
    );
}

export default HeroWrapper;