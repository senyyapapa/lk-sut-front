export interface SheduleSlideProps {
    data: SheduleData,
}
interface SheduleData {
    startAt: string,
    endAt: string, 
    typeLesson: string,
    name: string, 
    teacherName: string, 
    classroom: string,
}
