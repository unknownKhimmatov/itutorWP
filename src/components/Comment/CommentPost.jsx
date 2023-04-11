import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context'

export default function CommentPost() {

    const [rating, setRating] = useState(0)
    const { dark, setDark } = useContext(Context)


    return (
        <>
            <div className='commentpost'>
                <div className="title-post title">
                    <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                        Оставить отзыв
                    </h3>
                </div>
                <div className="main-post">
                    <textarea placeholder='Оставить комментарий'></textarea>
                    <div className="bottom-post">
                        <div className="stars title">
                            <span style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Поставить оценку </span> <i></i>
                        </div>
                        <div className="post-button">
                            <button>Оставить</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
