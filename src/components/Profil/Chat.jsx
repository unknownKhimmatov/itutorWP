import React from 'react'
import Footer from '../home/Footer'
import { Header } from '../Header/Header'
import { NavLink } from 'react-router-dom'
import Carousel from '../CenterRoom/Carousel'
import {
    MdOutlineAttachFile,
    MdArrowForward,
} from "react-icons/md";


export default function Profil() {





    return (

        <>
            <Header />
            <div className='profil'>
                <div className="item-profil">
                    <div className="saidbar-profil" >
                        <ul>
                            <NavLink to='/Edit' >
                                <li >
                                    Личные данные
                                </li>
                            </NavLink>

                            <NavLink to='/Chat' >
                                <li style={{ color: "#000" }} >
                                    Мои чаты
                                </li>
                            </NavLink>
                            <NavLink to='/Balanc'>
                                <li>
                                    Баланс
                                </li>
                            </NavLink>
                            <NavLink to='/PlatnieServises' >
                                <li>
                                    Платные услуги
                                </li>
                            </NavLink>
                            <NavLink to='/transanksiya'>
                                <li>
                                    Транзакции
                                </li>
                            </NavLink>
                            <NavLink to='/MyOtzif'>
                                <li>
                                    Мои отзывы
                                </li>
                            </NavLink>
                            <NavLink to='/Pictures'>
                                <li>
                                    Избранные
                                </li>
                            </NavLink>
                            <NavLink to='/MainProfil'>
                                <li>
                                    Выход
                                </li>
                            </NavLink>
                        </ul>
                    </div>


                    <div className="main-profil">
                        <Carousel />
                        <div className="chat-pole">
                            <div className="top-chat">
                                <h3>
                                    Чат с Рафаэль Ройтман
                                </h3>
                            </div>
                            <div className="item-main-chat">
                                <div className="chat-middle">
                                    <ul className='top-massage'>
                                        <li>
                                            Текст сообщения
                                        </li>
                                        <div className="chat-time">
                                            <span>
                                                20/11/2022 11:00
                                            </span>
                                        </div>
                                    </ul>
                                    <ul className='bottom-time'>
                                        <li>
                                            Текст сообщения
                                        </li>
                                        <div className="chat-time">
                                            <span>
                                                20/11/2022 11:00
                                            </span>
                                        </div>
                                    </ul>

                                </div>
                                <div className="bottom-chat">
                                    <div className="item-bottom-chat">
                                        <i className='file-sikl'><MdOutlineAttachFile /></i>
                                        <input type="text" name="" placeholder='Текст сообщения' id="" />
                                        <i className='send'> <MdArrowForward /></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

