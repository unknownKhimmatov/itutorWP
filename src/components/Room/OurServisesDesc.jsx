import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

export default function OurServisesDesc() {


    const { dark, setDark } = useContext(Context)

    return (
        <div className='servisesdesc'>
            <div className="title-desc-servises">
                <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>О преподавателе</h3>
                <p style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                    В сфере дизайна IT-продуктов, мобильных приложений, веб-сайтов с 2009 года. <br /> В портфолио работы как для Узбекистана, России, Казахстана, так и для ряда компаний из <br /> Великобритании, США и Канады.
                </p>
            </div>
        </div>
    )
}
