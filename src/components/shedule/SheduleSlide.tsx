import './shedule_slide.scss'
import { SheduleSlideProps } from './sheduleSlideProps'

export default function SheduleSlide({data} : SheduleSlideProps) {

    if (!data || Object.keys(data).length == 0) {
        return (
            <div className='shedule-slide-empty opacity-70'>
                <div className="img-container"></div>
            </div>
        )
    }

    const room = data.classroom.slice(0, 3)
    const frame = data.classroom.slice(-1)
    return (
        <div className="flex justify-center">
                <div className="shedule-slide rounded-2xl">
                    <div className="shedule-line-lesson rounded-2xl"></div>
                    <div className="shedule-slide-body rounded-2xl">
                        <div className="flex flex-row justify-between w-full">
                            <div className="shedule-slide-time">
                                {data.startAt + "-" + data.endAt}
                            </div>
                            <div className="shedule-type-lesson">
                                {data.typeLesson}
                            </div>
                        </div>
                        <div className="shedule-slide-name">
                            {data.name}
                        </div>
                       <div className="flex flex-row justify-between w-full"> 
                            <div className="shedule-slide-teacher">
                                Алексеев Алексей Большевиков
                            </div>
                             <a className="shedule-slide-nav" href={`https://nav.sut.ru/?cab=k${frame}-${room}`}>
                                {data.classroom}
                            </a>
                       </div>
                    </div>
                </div>
            </div>
    )
}
