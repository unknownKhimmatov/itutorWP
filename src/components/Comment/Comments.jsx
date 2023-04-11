import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Header } from '../Header/Header'
import Footer from '../home/Footer'
import FooterSearch from '../home/FooterSearch'
import CommentPost from './CommentPost'
import { DataComment } from './DataComment'


export default function Comments() {

    const { dark, setDark } = useContext(Context)

    return (
        <>
            <Header />
            <div className='comment'>
                <div className="item-comment">
                    <div className="title-comment title">
                        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                            Отзывы
                        </h3>
                    </div>
                    <div className="main-comment">
                        {
                            DataComment.map((item, index) => {
                                return (
                                    <>
                                        <div className="comment-card" key={index}>
                                            <div className="top-qw">
                                                <img src="./images/teacherimages/qw.png" alt="" />
                                            </div>
                                            <div className="middle-comment">
                                                <p>{item.com_desc}</p>
                                            </div>
                                            <div className="bottom-comment">
                                                <div className="left-comment">
                                                    <img src={item.com_ava} alt="" />
                                                </div>
                                                <div className="right-comment">
                                                    <div className="desc-comment">
                                                        <h3>{item.com_name}</h3>
                                                        <p>{item.com_job}</p>
                                                    </div>
                                                    <span><i class='bx bxs-star'></i> <p> {item.com_rating} </p></span>
                                                </div>
                                            </div>
                                            <img className='qwcom' src="./images/teacherimages/qw1.png" alt="" />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="pagination-buttons" id='pagenation'>
                        <button>1</button><button>2</button><button>3</button><span>...</span><button>83</button>
                    </div>
                    <CommentPost />
                </div>
            </div>
            <FooterSearch />
            <Footer />
        </>
    )
}
