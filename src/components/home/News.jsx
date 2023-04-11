import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'
export default function News() {

    const navigate = useNavigate()
    const ClickMainNews = () => {
        navigate('/NewsMain')
    }
    const { dark, setDark } = useContext(Context)


    return (
        <div className='news'>
            <div className="item-news">
                <div className="news-title" >
                    <div className="left-title ">
                        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                            Новости сервиса
                        </h3>
                        <span>
                            Будьте в курсе самых последних новостей <br /> нашего сервиса!
                        </span>
                    </div>
                    <div className="right-title">
                        <span onClick={ClickMainNews} >
                            Читать все новости
                        </span>
                    </div>
                </div>


                {/* cards  */}
                <div className="news-cards" >

                    <div className="news-card">
                        <div className="top-news-card">
                            <img src="./images/newsimages/new (2).png" alt="al" />
                        </div>
                        <div className="news-card-desc">
                            <div className="news-card-title">
                                <h3>Изучайте японский язык из вашего дома</h3>
                                <span>
                                    Будьте в курсе самых <br /> последних новостей нашего<br /> сервиса!
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="news-card">
                        <div className="top-news-card">
                            <img src="./images/newsimages/new (1).png" alt="al" />
                        </div>
                        <div className="news-card-desc">
                            <div className="news-card-title">
                                <h3>Изучайте японский язык из вашего дома</h3>
                                <span>
                                    Будьте в курсе самых последних новостей нашего сервиса!
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="news-card">
                        <div className="top-news-card">
                            <img src="./images/newsimages/new (3).png" alt="al" />
                        </div>
                        <div className="news-card-desc">
                            <div className="news-card-title">
                                <h3>Изучайте японский язык из вашего дома</h3>
                                <span>
                                    Будьте в курсе самых последних новостей нашего сервиса!
                                </span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
