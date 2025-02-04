import { TestimonialData } from "@/components/common/types";
import slider1 from "@/public/slider1.png";
import { BriefcaseBusiness, ChartLine, GraduationCap,Medal } from "lucide-react";
import signupForm from "@/public/signUpform.png";
import browseChallenge from "@/public/browseChallenge.png";


export const slidesData = [
    {
      icon: "/slideIcon.png",
      description:
        "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.",
      imageSrc: slider1,
    },
    {
      icon: "/slideIcon.png",
      description:
        "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.s",
      imageSrc: slider1,
    },
    {
      icon: "/slideIcon.png",
      description:
        "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.",
      imageSrc: slider1,
    },
    {
      icon: "/slideIcon.png",
      description:
        "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.",
      imageSrc: slider1,
    },
  ];

export   const skillsData = [
    "UI/UX Design",
    "Data Science",
    "Graphic Design",
    "Data Analysis & Research",
    "Animation",
    "Videography & Photography",
    "Data Science",
    "AI & Machine Learning",
    "Web3",
    "Digital Marketing & Communications",
  ];

  export const whatweoffer = [
    {
        icon:BriefcaseBusiness,
        title:"Enhance Your Employment Path",
        desc:"Network with other talented individuals and learn from their experiences "
    },
    {
        icon:GraduationCap,
        title:"Earn Recognition and Prizes",
        desc:"Gain valuable experience and knowledge to advance your career in the digital economy: "
    },
    {
        icon:ChartLine,
        title:"Personal Growth",
        desc:"Challenge yourself, learn new skills, and expand your professional network.  "
    },
    {
        icon:Medal,
        title:"Learn from Industry Experts",
        desc:"Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces. "
    },
  ]

  export const testimonialData: TestimonialData[] = [
      {
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/67f60e376be8e831f66c721d9cb02bb8ee604349adc47575a8299d20e34b2f1e',
        name: 'Manzi Jack',
        role: 'Product Designer',
        location: 'Kigali'
      },
      {
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/67f60e376be8e831f66c721d9cb02bb8ee604349adc47575a8299d20e34b2f1e',
        name: 'Sarah Chen',
        role: 'UX Researcher',
        location: 'Singapore'
      },
      {
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/67f60e376be8e831f66c721d9cb02bb8ee604349adc47575a8299d20e34b2f1e',
        name: 'John Smith',
        role: 'Senior Developer',
        location: 'London'
      },
      {
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/67f60e376be8e831f66c721d9cb02bb8ee604349adc47575a8299d20e34b2f1e',
        name: 'Maria Garcia',
        role: 'Project Manager',
        location: 'Madrid'
      }
    ];

    export const stepsData = [
        {
          stepNumber: 1,
          title: "Sign up on Umurava Platform",
          description: "Submit your completed project for evaluation",
          imageSrc: signupForm,
          imageAlt: "Sign up illustration"
        },
        {
          stepNumber: 2,
          title: "Browse Open Challenges",
          description: "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals",
          imageSrc: browseChallenge,
          imageAlt: "Browse challenges illustration"
        },
        {
          stepNumber: 3,
          title: "Register and Participate",
          description: "Sign up for the challenge and start working on the project."
        },
        {
          stepNumber: 4,
          title: "Submit your work",
          description: "Submit your completed project for evaluation"
        },
        {
          stepNumber: 5,
          title: "Receive Feedback and Recognition",
          description: "Get feedback on your work and celebrate your achievements"
        }
      ];