import slider1 from "@/public/slider1.png";
import {
  BriefcaseBusiness,
  ChartLine,
  GraduationCap,
  Medal,
  Briefcase,
  Globe,
  User,
} from "lucide-react";
import slideIcon from "@/public/slideIcon.png";
import signupForm from "@/public/signUpform.png";
import browseChallenge from "@/public/browseChallenge.png";
import institution1 from "@/public/institutions/1.png";
import institution2 from "@/public/institutions/2.png";
import institution3 from "@/public/institutions/3.png";
import institution4 from "@/public/institutions/4.png";
import institution5 from "@/public/institutions/5.png";
import institution6 from "@/public/institutions/6.png";
import institution7 from "@/public/institutions/7.png";
import institution8 from "@/public/institutions/8.png";
import institution9 from "@/public/institutions/9.png";
import institution10 from "@/public/institutions/10.png";
import institution11 from "@/public/institutions/11.png";
import institution12 from "@/public/institutions/12.png";
import testimonials from "@/public/testimonials.png";
import { TestimonialData } from "@/types/common";

export const slidesData = [
  {
    icon: slideIcon,
    description:
      "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.",
    imageSrc: slider1,
  },
  {
    icon: slideIcon,
    description:
      "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.s",
    imageSrc: slider1,
  },
  {
    icon: slideIcon,
    description:
      "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.",
    imageSrc: slider1,
  },
  {
    icon: slideIcon,
    description:
      "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.",
    imageSrc: slider1,
  },
];

export const skillsData = [
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
    icon: BriefcaseBusiness,
    title: "Enhance Your Employment Path",
    desc: "Network with other talented individuals and learn from their experiences ",
  },
  {
    icon: GraduationCap,
    title: "Earn Recognition and Prizes",
    desc: "Gain valuable experience and knowledge to advance your career in the digital economy: ",
  },
  {
    icon: ChartLine,
    title: "Personal Growth",
    desc: "Challenge yourself, learn new skills, and expand your professional network.  ",
  },
  {
    icon: Medal,
    title: "Learn from Industry Experts",
    desc: "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces. ",
  },
];

export const testimonialData: TestimonialData[] = [
  {
    imageUrl: testimonials,
    name: "Manzi Jack",
    role: "Product Designer",
    location: "Kigali",
  },
  {
    imageUrl: testimonials,
    name: "Sarah Chen",
    role: "UX Researcher",
    location: "Singapore",
  },
  {
    imageUrl: testimonials,
    name: "John Smith",
    role: "Senior Developer",
    location: "London",
  },
  {
    imageUrl: testimonials,
    name: "Maria Garcia",
    role: "Project Manager",
    location: "Madrid",
  },
];

export const stepsData = [
  {
    stepNumber: 1,
    title: "Sign up on Umurava Platform",
    description: "Submit your completed project for evaluation",
    imageSrc: signupForm,
    imageAlt: "Sign up illustration",
  },
  {
    stepNumber: 2,
    title: "Browse Open Challenges",
    description:
      "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals",
    imageSrc: browseChallenge,
    imageAlt: "Browse challenges illustration",
  },
  {
    stepNumber: 3,
    title: "Register and Participate",
    description: "Sign up for the challenge and start working on the project.",
  },
  {
    stepNumber: 4,
    title: "Submit your work",
    description: "Submit your completed project for evaluation",
  },
  {
    stepNumber: 5,
    title: "Receive Feedback and Recognition",
    description: "Get feedback on your work and celebrate your achievements",
  },
];

export const solveProblemsData = [
  {
    icon: User,
    title: "Bridging the Experience Gap",
    description:
      "Many talents acquired theoretical knowledge and are rejected from jobs because they lack work experience and are not able to put in actions what they acquired in the schools.",
    colSpan: 2,
  },
  {
    icon: Briefcase,
    title: "Bridging Education and Employment",
    description:
      "Traditional education doesnt’ always prepare talents for the demands of the tech and digital economy and we are providing in-demand skills through Skills Challenges.",
  },
  {
    icon: Globe,
    title: "Preparing Talents for Global Job Markets",
    description:
      "We are ensuring that African talents shine globally and that’s why we are equipping them with global technical experience and shandout globally. ",
  },
];

export const institutionParteners = [
  { institution: institution1 },
  { institution: institution2 },
  { institution: institution3 },
  { institution: institution4 },
  { institution: institution5 },
  { institution: institution6 },
  { institution: institution7 },
  { institution: institution8 },
  { institution: institution9 },
  { institution: institution10 },
  { institution: institution11 },
  { institution: institution12 },
];

export const howCtaList = [
  "As Career Development and Job Readiness Program",
  "As Skills Assessments Method after a course or a term",
  "As extracurricular activities to complement academic courses",
  "As the portfolio of the Students",
  "As part of Capstone Projects or final-year assignments ",
];

export const offeringsData = [
  {
    icon: User,
    title: "Employability and Career Development Opportunities",
    description:
      "Students gain hands-on experience working on real-world challenges and help them build professional networks that increase their chances and readiness of landing job opportunities and this lead to career advancement and long-term succes..",
  },
  {
    icon: Briefcase,
    title: "Practical Application of Classroom Knowledge",
    description:
      "The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses. ",
  },
  {
    icon: Globe,
    title: "Students & Trainees Engagement",
    description:
      "Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects and practices  that enhance their learning experience and skills mastery. Competitive and project-based challenges keep students motivated and actively engaged in their learning journey.",
  },
  {
    icon: User,
    title: "Access to the Industry Experts & Mentors",
    description:
      "Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field.",
    colSpan: 2,
  },
  {
    icon: Briefcase,
    title: "Skills Assessments",
    description:
      "Embed our projects based tests and skills assessments directly into your curriculum.",
  },
];

export const challengeData = {
  title: "Payroll and HR Management System",
  projectBrief:
    "A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.",
  requirements: [
    "UX research to understand Project Requirements",
    "Understanding User Needs",
    "Understanding Business Goals",
    "Determine interaction between users ",
    "Requirements Catalog",
  ],
  productDesign: [
    "User Interface Design for each step",
    "Creating wireframes to outline the basic structure and layout of the web and mobile app.",
    "Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience.",
    "Ensuring the web application works seamlessly across web, mobile, and tablet devices.",
    "Provide a feedback session for in-development guidance",
  ],
  deliverables: [
    "Requirements Catalog and User Interaction Diagram",
    "User Interface Mockups",
    "Payroll and HR System Design Completed",
    "The Product Designer will provide all documents and deliverables to the client before the review meetings",
  ],
  note: "Find Product Requirements Summary and Features Description for Saway Pay HERE",
  email: "talent@umurava.africa",
  category: "Web design",
  duration: "7 days",
  prize: "$140 - $400",
  participants: [
    {
      name: "Hilaire Sh",
      role: "Product Designer",
    },
    {
      name: "Christian Manzi",
      role: "UI/UX Designer",
    },
    {
      name: "Jolly Mutesi",
      role: "Content Creator",
    },
    {
      name: "Dr. Samuel Smith",
      role: "Mental Health Professional",
    },
    {
      name: "Dr. Lily Chen",
      role: "Dermatologist",
    },
  ],
};

export const homeGrid = [
  {
    Icon: User,
    title: "Build a Strong Portfolio and Hand-On Experience",
    description:
      "Tackle real-world projects through challenges and hackathons that mirror real world challenges faced by businesses and organizations. Therefore, showcase your skills and accomplishments to potential employers and clients through a portofolio  of completed projects.",
    className: "md:col-span-2",
  },
  {
    Icon: Briefcase,
    title: "Enhance Your Employment Path",
    description:
      "Delop the in-demand skills and build a strong portofolio to increase your chances of landing your dream job or contract.",
  },
  {
    Icon: Globe,
    title: "Earn Recognition and Prizes",
    description:
      "Earn both Money and Knowledge Prizes by participating in various contests and competitions by working on real world projects and hackathons from our partner companies & organizations",
  },
];

export const aboutGrid = [
  {
    Icon: User,
    title: "Bridging the Experience Gap",
    description:
      "Many talents acquired theoretical knowledge and are rejected from jobs because they lack work experience and are not able to put in actions what they acquired in the schools.",
    className: "md:col-span-2",
  },
  {
    Icon: Briefcase,
    title: "Bridging Education and Employment",
    description:
      "Traditional education doesnt’ always prepare talents for the demands of the tech and digital economy and we are providing in-demand skills through Skills Challenges.",
  },
  {
    Icon: Globe,
    title: "Preparing Talents for Global Job Markets",
    description:
      "We are ensuring that African talents shine globally and that’s why we are equipping them with global technical experience and shandout globally. ",
  },
];

export const keyOfferings = [
  {
    Icon: User,
    title: "Employability and Career Development Opportunities",
    description:
      "Students gain hands-on experience working on real-world challenges and help them build professional networks that increase their chances and readiness of landing job opportunities and this lead to career advancement and long-term succes.",
  },
  {
    Icon: Briefcase,
    title: "Practical Application of Classroom Knowledge",
    description:
      "The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses.",
  },
  {
    Icon: Globe,
    title: "Students & Trainees Engagement",
    description:
      "Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects and practices  that enhance their learning experience and skills mastery. Competitive and project-based challenges keep students motivated and actively engaged in their learning journey.",
  },
  {
    Icon: Briefcase,
    title: "Access to the Industry Experts & Mentors",
    description:
      "Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field. ",
    className: "lg:col-span-2",
  },
  {
    Icon: Globe,
    title: "Skills Assessments",
    description:
      "Embed our projects based tests and skills assessments directly into your curriculum.",
  },
];
