import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

export default function SubjectsAndTuitionFees() {

    const { dark, setDark } = useContext(Context)

    return (
        <div className='subjectandtuition'>
            <div className="item-subjectandtuintion">
                <div className="title-subject">
                    <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                        Дисциплины и стоимость обучения
                    </h3>
                </div>

                <div className="scroll-table">
                    <div className="table">
                        <div className="place-subjectandtuition" style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }} >
                            <p>Название дисциплины</p> <div className="subject-place"><p>У преподавателя</p><p>У ученика дома</p><p>Online через Zoom</p></div>
                        </div>
                        <div className="border-subject"></div>
                        <div className="ui-programma" style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                            <p>Дизайн приложений в Adobe XD</p> <div className="tuiton-ui-programma"><p>40$/час</p><p>60$/час</p><p>20$/час</p></div>
                        </div>
                        <div className="border-subject"></div>
                        <div className="wep-desing" style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                            <p>Дизайн веб-сайтов в Adobe XD</p> <div className="wep-tuiton"> <p>Договорная</p><p>Договорная</p> <p>Договорная</p>  </div>
                        </div>
                        <div className="border-subject"></div>
                        <div className="desing-online-market" style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
                            <p>Дизайн интернет-магазинов в Adobe XD</p> <div className="online-market-tuition"> <p>25$/час</p> <p>35$/час</p><p>15$/час</p> </div>
                        </div>
                    </div>

                </div>
                <div className="all-tuition">
                    <p style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>Смотреть все дисциплины и цены <i class='bx bx-down-arrow-alt'></i></p>
                </div>
            </div>
        </div>
    )
}
