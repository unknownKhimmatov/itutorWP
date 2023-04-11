import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../Context/Context'

export default function Teacher() {

    const { dark, setDark } = useContext(Context)

    return (
        <div className='teacher'>
            <div className="item-teacher">
                <div className="left-teacher">
                    <div className="title-teacher ">
                        <h3 id='tech-title' style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                            Вы можете общаться со <br /> всеми нашими учителями
                        </h3>
                        <span>
                            Прежде чем начать процесс обучения,<br /> Вы можете связаться и пообщаться с каждым!
                        </span>
                    </div>
                    <div className="teacher-button">
                        <NavLink to='/MainProfil' >
                            <button style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Зарегистрироваться</button>
                        </NavLink>
                    </div>
                </div>


                <div className="right-teacher">
                    <div className="top-teacher-list">
                        <div className="item-teacher-list">
                            <h3>
                                10,000+ преподавателей
                            </h3>
                        </div>
                        <div className="teacher-sort-images">
                            <div className="item-images">
                                <img src="./images/teacherimages/tchava (1).png" alt="" />
                                <img src="./images/teacherimages/tchava (2).png" alt="" />
                                <img src="./images/teacherimages/tchava (3).png" alt="" />
                                <img src="./images/teacherimages/tchava (4).png" alt="" />
                                <img src="./images/teacherimages/tchava (5).png" alt="" />
                                <img src="./images/teacherimages/tchava (2).png" alt="" />
                                <img src="./images/teacherimages/tchava (1).png" alt="" />
                                <img src="./images/teacherimages/tchava (6).png" alt="" />
                                <img src="./images/teacherimages/tchava (7).png" alt="" />
                                <img src="./images/teacherimages/tchava (8).png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="bottom-teacher-information">
                        <div className="top-information-teacher">
                            <img src="./images/teacherimages/tchava (7).png" className='avatopteach' alt="" />
                            <img src="./images/teacherimages/medal.png" className='medal' alt="" />
                        </div>
                        <div className="bottom-desc-information">
                            <h3>
                                Арсен Клянчив
                            </h3>
                            <h5>
                                Web-дизайн
                            </h5>
                            <div className='tchinformationh6'>
                                <span>Краткое описание скилов преподавателя, тянется из его личных данных, при клике переход на его профиль. Тут выводим преподов случайным образом.</span>
                            </div>
                        </div>
                    </div>


                    <div className="bottom-teacher-information-res">
                        <div className="top-information-teacher">
                            <img src="./images/teacherimages/tchava (7).png" className='avatopteach' alt="" />
                            <img src="./images/teacherimages/medal.png" className='medal' alt="" />
                        </div>
                        <div className="bottom-desc-information">
                            <h3>
                                Арсен Клянчив
                            </h3>
                            <h5>
                                Web-дизайн
                            </h5>
                            <div className='tchinformationh6'>
                                <span>Краткое описание скилов преподавателя, тянется из его личных данных, при клике переход на его профиль. Тут выводим преподов случайным образом.</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
