import React from 'react'
import { NavLink } from 'react-router-dom'
// import { useContext } from 'react'

export default function passwordrecovery() {

    return (
        <div className='registratsiya'>
            <div className="item-registratsiya">
                <div className="top-registratsiya">
                    <NavLink  to='/Passwordrecovery'>
                        <span>
                            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>  Вернуться обратно
                        </span>
                    </NavLink>
                </div>
                <div className="register-inputs">


                    <div className="passwordrecovery">
                        <div className="top-recovery">
                            <p>
                            Авторизация
                            </p>
                        </div>
                        <span>
                            <label htmlFor="email-recovery">Номер телефона или email</label>
                            <input type="text" name="" id="email-recovery" />
                        </span>
                        <span>
                            <label htmlFor="parol">Пароль</label>
                            <input type="password" id='parol' />
                        </span>
                        <NavLink className="navlink" to='/ChoseType'>
                            <button >Войти</button>
                        </NavLink>

                        <div className="bottom-onformation-register">
                            <span>Регистрация</span>
                            <div className="google-and-facebook">
                                <span>или авторизуйтесь через:</span>
                                <div className="img-social">
                                    <img src="./images/Register/google.png" alt="" />
                                    <img src="./images/Register/facebook.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bottom-man-emotion">
                        <div className="man">
                            <div className="massage-man">
                                <span>
                                    Вы у нас точно зарегестрированы?
                                </span>
                            </div>
                            <img src="./images/register/think.png" alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
