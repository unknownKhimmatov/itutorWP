import React, { useContext } from 'react'
import { Header } from '../Header/Header'
import { NewsData } from './NewsFakeData'
import Footer from '../home/Footer'
import FooterSearch from '../home/FooterSearch'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'


export default function MainNews() {


    const navigate = useNavigate()

    const OneClickNews = () => {
        navigate("/OneNews")
    }


    const { dark, setDark } = useContext(Context)

    return (
        <>
            <Header />
            <div className='main-news'>
                <div className="item-news-main">
                    <div className="title-news-main title">
                        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                            Новости
                        </h3>
                    </div>


                    <div className="all-news-main">
                        {
                            NewsData.map((item, index) => {
                                return (
                                    <>
                                        <div className="news-card-main" key={index} onClick={OneClickNews} >

                                            <div className="top-news-img-and-data">
                                                <img src={item.news_img} alt="" />
                                                <div className="data-news">
                                                    <i class='bx bx-calendar'></i> <span>18.12.2022</span>
                                                </div>
                                            </div>
                                            <div className="middle-news-main">
                                                <p>
                                                    {
                                                        item.news_title
                                                    }
                                                </p>
                                                <span>
                                                    {
                                                        item.news_subtitle
                                                    }
                                                </span>
                                            </div>
                                            <div className="bottom-news-main">
                                                <span>
                                                    {
                                                        item.news_button
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="pagination-buttons" id='pagenation'>
                        <button>1</button> <button>2</button> <button>3</button> <span>...</span><button>81</button>
                    </div>
                </div>
            </div>

            <FooterSearch />
            <Footer />

        </>
    )
}
