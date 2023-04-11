import React from 'react'
import { NavLink } from 'react-router-dom'

export default function passwordrecovery() {

    return (
        <div className='registratsiya'>
            <div className="item-registratsiya">
                <div className="top-registratsiya">
                    <NavLink to='/ChoseType'>
                        <span>
                            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>  Вернуться обратно
                        </span>
                    </NavLink>
                </div>
                <div className="register-inputs">


                    <div className="passwordrecovery">
                        <div className="top-recovery">
                            <p>
                                Код подтверждения
                            </p>
                        </div>
                        <span>
                            <label htmlFor="email-recovery">Введите код</label>
                            <input type="email" name="" id="email-recovery" />

                        </span>
                        <button >Подтвердить</button>
                        <p>Запросить еще раз ( 0:50 )</p>

                    </div>


                    <div className="bottom-man-emotion">
                        <div className="man">
                            <div className="massage-man">
                                <span>
                                    Как можно было забыть пароль?!
                                </span>
                            </div>
                            <img src="./images/register/man1.png" alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
