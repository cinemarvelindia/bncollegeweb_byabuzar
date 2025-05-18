
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';
import { initScrollAnimations, initTickerAnimation, initCarousels } from '../utils/scrollAnimations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Course types and data
type CourseLevel = 'UG' | 'PG' | 'Certificate';

interface Course {
  id: number;
  title: string;
  level: CourseLevel;
  department: string;
  duration: string;
  description: string;
  image: string;
}

// Real courses from B.N. College Bhagalpur
const courseData: Course[] = [
  {
    id: 1,
    title: "Bachelor of Arts (B.A.)",
    level: "UG",
    department: "Arts",
    duration: "3 Years",
    description: "Honors courses in English, Hindi, Sanskrit, Urdu, Economics, History, Political Science, Philosophy, Psychology, Geography, Sociology, Home Science, Music, and Mathematics with modern teaching methodologies and skilled faculty.",
    image: "https://bncollegebgp.ac.in/userfiles/image/slider2.jpg"
  },
  {
    id: 2,
    title: "Bachelor of Science (B.Sc.)",
    level: "UG",
    department: "Science",
    duration: "3 Years",
    description: "Honors programs in Physics, Chemistry, Mathematics, Botany, Zoology, Geology, Statistics, and Computer Applications with well-equipped laboratories and research opportunities.",
    image: "https://bncollegebgp.ac.in/userfiles/image/slider3.jpg"
  },
  {
    id: 3,
    title: "Bachelor of Commerce (B.Com)",
    level: "UG",
    department: "Commerce",
    duration: "3 Years",
    description: "Comprehensive curriculum covering Accounting, Business Economics, Business Law, Taxation, Management, and Finance with specialized training for competitive examinations and industry exposure.",
    image: "https://bncollegebgp.ac.in/userfiles/image/slider1.jpg"
  },
  {
    id: 4,
    title: "Bachelor of Computer Applications (BCA)",
    level: "UG",
    department: "Computer Science",
    duration: "3 Years",
    description: "Professional degree with focus on programming, database management, networking, software development, and practical IT skills with access to modern computer labs and software resources.",
    image: "https://bncollegebgp.ac.in/userfiles/image/Computer%20Lab_0.jpg"
  },
  {
    id: 5,
    title: "Master of Arts (M.A.)",
    level: "PG",
    department: "Arts",
    duration: "2 Years",
    description: "Advanced studies in English, Hindi, Economics, History, Political Science, Philosophy, Psychology, Geography, and other humanities subjects with research orientation and specialized electives.",
    image: "https://bncollegebgp.ac.in/userfiles/image/slider5.jpg"
  },
  {
    id: 6,
    title: "Master of Science (M.Sc.)",
    level: "PG",
    department: "Science",
    duration: "2 Years",
    description: "Specialized programs in Physics, Chemistry, Mathematics, Botany, Zoology, and other science disciplines with advanced laboratory facilities and research project opportunities.",
    image: "https://bncollegebgp.ac.in/userfiles/image/slider4.jpg"
  },
  {
    id: 7,
    title: "Master of Commerce (M.Com)",
    level: "PG",
    department: "Commerce",
    duration: "2 Years",
    description: "Advanced studies in Accounting, Finance, Banking, Insurance, Business Economics, and Management with specialized electives and dissertation based on current market trends.",
    image: "https://bncollegebgp.ac.in/userfiles/image/Library.jpg"
  },
  {
    id: 8,
    title: "Certificate Course in Computer Applications",
    level: "Certificate",
    department: "Computer Science",
    duration: "6 Months",
    description: "Short-term program providing practical skills in basic computer applications, office tools, internet usage, and essential digital literacy for career advancement.",
    image: "https://bncollegebgp.ac.in/userfiles/image/Computer%20Lab_0.jpg"
  },
  {
    id: 9,
    title: "Certificate Course in Communicative English",
    level: "Certificate",
    department: "Language",
    duration: "6 Months",
    description: "Program focused on developing English communication skills, including speaking, writing, presentation, and professional correspondence for enhanced employability.",
    image: "https://bncollegebgp.ac.in/userfiles/image/Cultural%20Activities_0.jpg"
  },
  {
    id: 10,
    title: "Diploma in Financial Management",
    level: "Certificate",
    department: "Commerce",
    duration: "1 Year",
    description: "Specialized training in financial analysis, investment planning, accounting practices, and market strategies with real-world case studies and industry interaction.",
    image: "https://bncollegebgp.ac.in/userfiles/image/Library.jpg"
  }
];

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState<CourseLevel | 'All'>('All');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courseData);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('');
  
  // Filter courses based on selected level
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredCourses(courseData);
    } else {
      setFilteredCourses(courseData.filter(course => course.level === activeFilter));
    }
  }, [activeFilter]);

  // Initialize animations on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    initScrollAnimations();
    initTickerAnimation();
    initCarousels();
    
    // Custom cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Staggered card animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="page-transition">
      {/* Custom Cursor */}
      <motion.div 
        className="fixed w-6 h-6 rounded-full bg-college-gold mix-blend-difference pointer-events-none z-50 hidden md:flex items-center justify-center text-xs"
        style={{ left: cursor.x - 12, top: cursor.y - 12 }}
        animate={{ x: cursor.x - 12, y: cursor.y - 12 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {cursorText && <span>{cursorText}</span>}
      </motion.div>

      {/* Hero Section with Improved Visibility */}
      <section className="bg-gradient-to-r from-college-darkBlue to-college-blue text-white py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Academic Programs at B.N. College
            </motion.h1>
            <motion.p 
              className="text-xl text-white opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Explore our comprehensive range of undergraduate, postgraduate, and certificate programs designed to shape your future career.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Ticker Animation Section */}
      <div className="bg-white py-4 overflow-hidden relative">
        <div className="ticker">
          <div className="ticker-content flex gap-12 items-center">
            {['Arts', 'Sciences', 'Commerce', 'Computer Applications', 'Languages', 'Humanities', 'Psychology', 'Mathematics', 'Geography', 'Economics', 'Physics', 'Chemistry'].map((dept, i) => (
              <span key={i} className="text-college-blue font-medium whitespace-nowrap">• {dept}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Course Listings with Sticky Filter */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold mb-6 text-college-blue heading-underline mx-auto w-fit">Exploring Our Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Founded in 1889, B.N. College Bhagalpur offers a wide range of courses across Arts, Science, and Commerce streams. Our programs are designed to provide quality education with a perfect blend of theoretical knowledge and practical skills.
            </p>
            
            {/* Sticky Course Filters */}
            <div className="flex flex-wrap justify-center gap-3 mt-8 sticky-element top-24 z-20 bg-white py-4 rounded-lg shadow-sm">
              <motion.button 
                className={`px-6 py-2 rounded-full transition-colors ${activeFilter === 'All' ? 'bg-college-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('All')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorText('All')}
                onMouseLeave={() => setCursorText('')}
              >
                All Programs
              </motion.button>
              <motion.button 
                className={`px-6 py-2 rounded-full transition-colors ${activeFilter === 'UG' ? 'bg-college-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('UG')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorText('UG')}
                onMouseLeave={() => setCursorText('')}
              >
                Undergraduate
              </motion.button>
              <motion.button 
                className={`px-6 py-2 rounded-full transition-colors ${activeFilter === 'PG' ? 'bg-college-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('PG')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorText('PG')}
                onMouseLeave={() => setCursorText('')}
              >
                Postgraduate
              </motion.button>
              <motion.button 
                className={`px-6 py-2 rounded-full transition-colors ${activeFilter === 'Certificate' ? 'bg-college-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('Certificate')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorText('Certificate')}
                onMouseLeave={() => setCursorText('')}
              >
                Certificate Courses
              </motion.button>
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {filteredCourses.map((course, index) => (
              <motion.div key={course.id} variants={itemVariants}>
                <AnimatedCard 
                  delay={index * 0.1}
                  hoverEffect="glow"
                  className="h-full"
                >
                  <div className="h-48 overflow-hidden hover-zoom">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-college-blue text-white px-3 py-1 text-sm rounded-full">
                        {course.level === 'UG' ? 'Undergraduate' : course.level === 'PG' ? 'Postgraduate' : 'Certificate'}
                      </span>
                      <span className="text-gray-500 text-sm">{course.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-college-blue">{course.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{course.department} Department</span>
                      <motion.button 
                        className="text-college-blue hover:text-college-gold transition-colors font-medium interactive"
                        whileHover={{ scale: 1.1 }}
                        onMouseEnter={() => setCursorText('View')}
                        onMouseLeave={() => setCursorText('')}
                      >
                        Details
                      </motion.button>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
          
          {/* No courses found message */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No courses found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Academic Resources with Carousel */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-college-blue">Academic Resources</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              B.N. College provides excellent resources to support your academic journey and enhance your learning experience.
            </p>
          </div>
          
          {/* Featured resources carousel */}
          <Carousel className="mx-auto max-w-4xl mb-12">
            <CarouselContent>
              <CarouselItem>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center text-college-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-college-blue">Central Library</h3>
                      <p className="text-gray-600">Our central library houses over 85,000 books, journals, and digital resources covering all disciplines taught at the college.</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center text-college-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-college-blue">Science Laboratories</h3>
                      <p className="text-gray-600">State-of-the-art laboratories for Physics, Chemistry, Botany, Zoology, and Computer Science with modern equipment.</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-college-blue">Computer Center</h3>
                      <p className="text-gray-600">Modern computer center with high-speed internet access for research and educational purposes.</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-12" />
            <CarouselNext className="right-0 lg:-right-12" />
          </Carousel>
          
          {/* Grid of other resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
            {/* Library */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow stagger-item">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Library</h3>
              <p className="text-gray-600">
                Extensive collection with dedicated reading rooms and reference sections.
              </p>
            </div>
            
            {/* Laboratories */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow stagger-item">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Laboratories</h3>
              <p className="text-gray-600">
                Well-equipped labs for all science and computer disciplines.
              </p>
            </div>
            
            {/* Digital Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow stagger-item">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Smart Classrooms</h3>
              <p className="text-gray-600">
                Modern ICT-enabled classrooms for enhanced learning experience.
              </p>
            </div>
            
            {/* Research Center */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow stagger-item">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Seminar Hall</h3>
              <p className="text-gray-600">
                Fully equipped hall for academic conferences and seminars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="bg-college-blue text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute animate-pulse opacity-10" width="100%" height="100%" viewBox="0 0 100 100">
            <circle cx="75" cy="10" r="6" fill="white" />
            <circle cx="20" cy="50" r="8" fill="white" />
            <circle cx="85" cy="30" r="5" fill="white" />
            <circle cx="50" cy="60" r="4" fill="white" />
            <circle cx="65" cy="80" r="7" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-2/3 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Join B.N. College?</h2>
              <p className="text-lg opacity-90">
                Take the first step towards your academic and career goals. Admissions for the new academic session are now open.
              </p>
            </motion.div>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to="/admissions" 
                className="btn-gold interactive"
                onMouseEnter={() => setCursorText('Apply')}
                onMouseLeave={() => setCursorText('')}
              >
                Apply Now
              </Link>
              <Link 
                to="/contact" 
                className="btn-outline border-white text-white hover:bg-white hover:text-college-blue interactive"
                onMouseEnter={() => setCursorText('Contact')}
                onMouseLeave={() => setCursorText('')}
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Add styling for the new animations */}
      <style>
        {`
        .ticker {
          position: relative;
          white-space: nowrap;
          overflow: hidden;
        }
        
        .ticker-content {
          display: inline-block;
          white-space: nowrap;
          animation: ticker 20s linear infinite;
        }
        
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .custom-cursor {
          position: fixed;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #d4af37;
          mix-blend-mode: difference;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s;
        }
        
        .cursor-hover {
          transform: scale(1.5);
          background-color: #fff;
        }
        
        .sticky-element {
          position: sticky;
          top: 90px;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(5px);
          z-index: 10;
          padding: 1rem 0;
        }
        
        .interactive {
          cursor: none;
        }
        
        @media (max-width: 768px) {
          .interactive {
            cursor: pointer;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Courses;
