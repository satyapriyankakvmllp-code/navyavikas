export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface AcademicProgram {
  icon: string;
  title: string;
  description: string;
}

export interface Facility {
  icon: string;
  image: string;
  title: string;
  description: string;
}

export interface Activity {
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  image: string;
  alt: string;
  span: boolean;
}

export interface Achievement {
  icon: string;
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export interface FacultyMember {
  name: string;
  role: string;
  initials: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  phoneAlt: string;
  email: string;
  mapUrl: string;
  social: { icon: string; href: string; label: string }[];
}

export const schoolData = {
  name: 'Navya Vikas Public School',
  shortName: 'Navya Vikas',
  tagline: 'Nurturing Excellence, Inspiring Futures',
  established: 'EST. 1985',
  affiliation: 'CBSE Affiliated • Co-Educational',
  heroTitle: 'Shaping Tomorrow\u2019s Leaders Today',
  heroSubtitle:
    'A premier CBSE co-educational school in Visakhapatnam dedicated to academic excellence, character building, and holistic development of every child.',
  heroImage: '/images/hero-students.jpg',
  heroImageAlt: 'Smiling school students standing together',

  aboutSectionLabel: 'ABOUT OUR SCHOOL',
  aboutTitle: 'A Legacy of Learning & Character Since 1985',
  aboutText:
    'Founded in 1985, Navya Vikas brings academic rigour and human values together. Today we serve over 2,800 students, blending strong CBSE academics with arts, sports and life skills.',
  aboutText2:
    'Our approach blends a strong CBSE curriculum with arts, sports, and life-skill education. We believe every child is unique, and our dedicated educators work to unlock each student\u2019s full potential in a safe, joyful, and inclusive environment.',
  aboutImage: '/images/about-students.jpg',
  aboutImageAlt: 'Two happy students in front of the school bus',

  stats: [
    { value: '2,800+', label: 'Students Enrolled' },
    { value: '180+', label: 'Expert Faculty' },
    { value: '40', label: 'Years of Excellence' },
    { value: '98%', label: 'Board Pass Rate' },
  ] as Stat[],

  visionTitle: 'Our Vision',
  visionText:
    'To be a centre of educational excellence that empowers students to become lifelong learners, critical thinkers, and responsible global citizens who lead with integrity and empathy.',
  missionTitle: 'Our Mission',
  missionText:
    'To provide a nurturing and stimulating environment where every child discovers their unique strengths, achieves academic excellence, and develops the values and skills needed to thrive in a changing world.',

  academicsLabel: 'ACADEMICS',
  academicsTitle: 'Programs Designed for Every Stage',
  academicsSubtitle:
    'From early years to senior secondary, our curriculum is crafted to spark curiosity, build strong foundations, and prepare students for a bright future.',
  academics: [
    {
      icon: 'BookOpen',
      title: 'Pre-Primary (Nursery\u2013KG)',
      description:
        'A play-based, experiential approach that builds language, motor, and social skills in a joyful, safe environment.',
    },
    {
      icon: 'Pencil',
      title: 'Primary School (Grades 1\u20135)',
      description:
        'Strong foundations in literacy, numeracy, and inquiry-based science, paired with arts, music, and physical education.',
    },
    {
      icon: 'Lightbulb',
      title: 'Middle School (Grades 6\u20138)',
      description:
        'A broad curriculum that encourages critical thinking, project-based learning, and exploration of individual interests.',
    },
    {
      icon: 'GraduationCap',
      title: 'Senior Secondary (Grades 9\u201312)',
      description:
        'Specialised streams in Science, Commerce, and Humanities with rigorous CBSE preparation and career counselling.',
    },
  ] as AcademicProgram[],

  whyChooseTitle: 'Why Parents Choose Navya Vikas',
  whyChooseSubtitle: 'We go beyond textbooks to create a learning experience that shapes character and unlocks potential.',
  whyChoose: [
    { icon: 'Award', title: 'Academic Excellence', description: 'Consistently 98%+ board results with national-level toppers every year.' },
    { icon: 'Users', title: 'Small Class Sizes', description: 'A 1:22 teacher-student ratio ensures every child gets individual attention.' },
    { icon: 'HeartHandshake', title: 'Values & Ethics', description: 'Character education woven into daily life\u2014honesty, empathy, and respect.' },
    { icon: 'Globe', title: 'Global Outlook', description: 'Exchange programs, model UN, and digital literacy for a connected world.' },
    { icon: 'ShieldCheck', title: 'Safe Campus', description: 'CCTV-monitored campus, trained counsellors, and strict child-safety protocols.' },
    { icon: 'Sparkles', title: 'Holistic Growth', description: '200+ co-curricular activities from robotics to classical dance to sports.' },
  ],

  facilitiesTitle: 'World-Class Facilities',
  facilitiesSubtitle: 'A 5-acre campus in MVP Colony designed for learning, exploration, and play.',
  facilities: [
    { icon: 'FlaskConical', title: 'Science & Robotics Labs',
      image: 'https://images.pexels.com/photos/31864392/pexels-photo-31864392.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', description: 'Fully-equipped physics, chemistry, biology, and robotics laboratories.' },
    { icon: 'Library', title: 'Digital Library',
      image: 'https://images.pexels.com/photos/10638213/pexels-photo-10638213.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', description: '25,000+ books, e-resources, and a dedicated reading lounge for all ages.' },
    { icon: 'Laptop', title: 'Smart Classrooms',
      image: 'https://images.pexels.com/photos/5636692/pexels-photo-5636692.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', description: 'Interactive digital boards and blended-learning tools in every classroom.' },
    { icon: 'Trophy', title: 'Sports Complex',
      image: 'https://images.pexels.com/photos/27907317/pexels-photo-27907317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', description: 'Cricket, football, basketball, athletics track, and indoor games arena.' },
    { icon: 'Palette', title: 'Arts & Music Studio',
      image: 'https://images.pexels.com/photos/29329505/pexels-photo-29329505.jpeg?auto=compress&cs=tinysrgb&w=800&h=600', description: 'Dedicated spaces for painting, classical music, dance, and theatre.' },
    { icon: 'Bus', title: 'Safe Transport',
      image: '/images/about-students.jpg', description: 'GPS-enabled buses covering 30+ routes across Visakhapatnam with trained staff.' },
  ] as Facility[],

  activitiesTitle: 'Life Beyond the Classroom',
  activitiesSubtitle: 'Co-curricular activities that build confidence, creativity, and teamwork.',
  activities: [
    {
      title: 'Sports & Athletics',
      description: 'From cricket to kabaddi, our teams have won state-level championships.',
      image: 'https://images.pexels.com/photos/27907317/pexels-photo-27907317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    },
    {
      title: 'Cultural & Performing Arts',
      description: 'Annual festivals, classical dance, music, drama, and art exhibitions.',
      image: 'https://images.pexels.com/photos/29329505/pexels-photo-29329505.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    },
    {
      title: 'Science & Robotics Club',
      description: 'Hands-on STEM, robotics competitions, and innovation fairs.',
      image: 'https://images.pexels.com/photos/8471913/pexels-photo-8471913.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    },
  ] as Activity[],

  galleryTitle: 'Campus Gallery',
  gallerySubtitle: 'A glimpse into life at Navya Vikas.',
  gallery: [
    {
      image: 'https://images.pexels.com/photos/5636692/pexels-photo-5636692.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      alt: 'Students in classroom',
      span: false,
    },
    {
      image: 'https://images.pexels.com/photos/39198178/pexels-photo-39198178.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      alt: 'School campus building',
      span: true,
    },
    {
      image: 'https://images.pexels.com/photos/10638213/pexels-photo-10638213.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      alt: 'Children reading in library',
      span: false,
    },
    {
      image: 'https://images.pexels.com/photos/29329505/pexels-photo-29329505.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      alt: 'Cultural dance performance',
      span: false,
    },
    {
      image: 'https://images.pexels.com/photos/31864392/pexels-photo-31864392.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      alt: 'Students learning activity',
      span: true,
    },
    {
      image: 'https://images.pexels.com/photos/27907317/pexels-photo-27907317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      alt: 'Cricket practice',
      span: false,
    },
  ] as GalleryItem[],

  achievements: [
    { icon: 'Trophy', value: '150+', label: 'State & National Awards' },
    { icon: 'Star', value: '98%', label: 'Board Pass Rate' },
    { icon: 'Users', value: '40,000+', label: 'Alumni Network' },
    { icon: 'TrendingUp', value: '500+', label: 'IIT/NIT Admissions' },
  ] as Achievement[],

  testimonialsTitle: 'What Parents & Students Say',
  testimonialsSubtitle: 'Hear from our extended family.',
  testimonials: [
    {
      name: 'Rajesh Verma',
      role: 'Parent, Grade 8',
      quote:
        'Navya Vikas has been transformative for my daughter. The teachers genuinely care, and the focus on values alongside academics is exactly what we wanted.',
      initials: 'RV',
    },
    {
      name: 'Priya Naidu',
      role: 'Alumna, Batch of 2019',
      quote:
        'The school gave me the confidence to pursue engineering at IIT Madras. The faculty pushed me to excel while supporting me every step of the way.',
      initials: 'PN',
    },
    {
      name: 'Mohammed Arif',
      role: 'Parent, Grade 11 & 6',
      quote:
        'Both my sons thrive here. The campus is safe, the facilities are excellent, and the communication from teachers is outstanding.',
      initials: 'MA',
    },
    {
      name: 'Ananya Reddy',
      role: 'Student, Grade 10',
      quote:
        'I love coming to school. From robotics club to basketball, there is always something exciting to learn and be part of.',
      initials: 'AR',
    },
  ] as Testimonial[],

  admissionsTitle: 'Begin Your Child\u2019s Journey',
  admissionsSubtitle:
    'Admissions are open for the 2027\u20132028 academic year. Submit the enquiry form below and our admissions team will contact you within 48 hours.',
  admissionSteps: [
    { step: '01', title: 'Submit Enquiry', description: 'Fill out the enquiry form with your details.' },
    { step: '02', title: 'Campus Visit', description: 'Tour our campus and meet our faculty.' },
    { step: '03', title: 'Interaction', description: 'An informal interaction with the child and parents.' },
    { step: '04', title: 'Confirmation', description: 'Receive admission offer and complete enrollment.' },
  ],

  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Campus Life', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' },
  ] as NavLink[],

  contact: {
    address: 'No. 42, MVP Colony, Daspalla Hills, Visakhapatnam, Andhra Pradesh 530017',
    phone: '+91 891 2745 630',
    phoneAlt: '+91 98456 78900',
    email: 'admissions@navyavikas.edu.in',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=MVP+Colony+Visakhapatnam+Andhra+Pradesh',
    social: [
      { icon: 'Facebook', href: '#', label: 'Facebook' },
      { icon: 'Instagram', href: '#', label: 'Instagram' },
      { icon: 'Youtube', href: '#', label: 'YouTube' },
      { icon: 'Linkedin', href: '#', label: 'LinkedIn' },
    ],
  } as ContactInfo,

  grades: [
    'Nursery',
    'LKG',
    'UKG',
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
    'Grade 8',
    'Grade 9',
    'Grade 10',
    'Grade 11',
    'Grade 12',
  ],
};
