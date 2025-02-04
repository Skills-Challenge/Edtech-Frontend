export interface TestimonialData {
    imageUrl: string;
    name: string;
    role: string;
    location: string;
  }
  
  export interface TestimonialCardProps extends TestimonialData {
    isVisible: boolean;
    index?: number;
    currentSlide?: number;
    totalSlides?: number;
  }
  
  export interface TestimonialSliderProps {
    testimonials: TestimonialData[];
  }
  
  export interface StepCardProps {
    stepNumber: number;
    title: string;
    description: string;
    imageSrc?: any;
    imageAlt?: string;
  }