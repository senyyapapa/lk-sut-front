export interface SlideData {
  id: string;
  currentInfo: string;
  groupNumber: string;
  studentName: string;
  subject: string;
  lessonType: 'лекция' | 'семинар' | 'практика' | 'лабораторная';
  isActive?: boolean;
}

export interface CarouselProps {
  slides: SlideData[];
  onSlideChange?: (currentIndex: number) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}