export interface TestimonialData {
    imageUrl: string;
    name: string;
    role: string;
    location: string;
  }
  
  export interface TestimonialCardProps extends TestimonialData {
    isVisible: boolean;
  }
  
  export interface DotIndicatorProps {
    active: boolean;
    onClick: () => void;
    index: number;
  }
  
  export interface TestimonialSliderProps {
    testimonials: TestimonialData[];
  }