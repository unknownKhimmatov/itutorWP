import React, { useContext } from 'react'
import { Context } from '../../../Context/Context'
import { Data } from "./Data"
export default function ItTexnology() {

    const { dark, setDark } = useContext(Context)

    return (
        <>
            {
                Data.map((item, index) => {
                    return (
                        <div className="skill" key={index}>
                            <div className="skill-top">
                                <img src={item.jobs_img} alt="3d-photo" className='job-img' />
                                <img src={item.avatar} alt="avatar1" className='avatar' />
                            </div>

                            <div className="skill-bottom">
                                <div className="title-bottom-skill">
                                    <p style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                        {item.title}
                                    </p>
                                    <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                                        {item.job}
                                    </h3>
                                    <div className="bottom-information-skill">
                                        <span style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}><i class='bx bxs-user' style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }} ></i> {item.follovers}</span>
                                        <span style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}> <i class='bx bxs-star star' ></i> {item.rating} </span>
                                        <span className='pur'> <i style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }} class='bx bx-purchase-tag-alt purchase_rotate'></i> <span style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>от</span> <o style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>{item.one_lesson}{item.price_type}</o> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}
