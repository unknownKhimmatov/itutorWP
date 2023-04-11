import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../../Context/Context'
export default function OurServises() {

    const { dark, setDark } = useContext(Context)

    return (
        <>
            <div className='OurServises'>
                <div className="our-container">

                    <div className="ourservises-title">
                        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                            Почему обучаться на<br /> нашем сервисе удобнее?
                        </h3>
                        <span>
                            Вы можете прокачать свои навыки онлайн, <br /> или найти преподавателя с выездом к вам домой!
                        </span>
                    </div>


                    <div className="ourservises-main">


                        <div className="simple-search">
                            <div className="title-search">
                                <h3>
                                    Простой поиск
                                </h3>
                                <span className="search-subtitle">
                                    <p>  Удобная система навигации и поиска <br />ы нужного учителя или учебного центра</p>
                                </span>
                            </div>
                            <img src="./images/homeimages/beliuvit.png " className='beliuvit' alt="" />
                            <div className="yellov-pole">
                                <img src="./images/homeimages/yellov.png" alt="" />
                                <i class='bx bx-search'></i>
                            </div>
                        </div>


                        <div className="simple-search">
                            <div className="title-search">
                                <h3>
                                    Простой поиск
                                </h3>
                                <span className="search-subtitle">
                                    <p>  Удобная система навигации и поиска <br />ы нужного учителя или учебного центра</p>
                                </span>
                            </div>
                            <img src="./images/homeimages/beliuvit.png " className='beliuvit' alt="" />

                            <div className="yellov-pole">
                                <img src="./images/homeimages/yellov.png" alt="" />
                                <i class='bx bx-search'></i>
                            </div>
                        </div>


                        <div className="simple-search">
                            <div className="title-search">
                                <h3>
                                    Простой поиск
                                </h3>
                                <span className="search-subtitle">
                                    <p>  Удобная система навигации и поиска <br />ы нужного учителя или учебного центра</p>
                                </span>
                            </div>
                            <img src="./images/homeimages/beliuvit.png " className='beliuvit' alt="" />

                            <div className="yellov-pole">
                                <img src="./images/homeimages/yellov.png" alt="" />
                                <i class='bx bx-search'></i>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-button-ourservises">
                        <NavLink to='/Edit'>
                            <button style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                Зарегистрироваться
                            </button>
                        </NavLink>
                    </div>

                </div>
            </div>
        </>
    )
}
