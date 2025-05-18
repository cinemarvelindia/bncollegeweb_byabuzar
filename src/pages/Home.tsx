
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-college-darkBlue to-college-blue text-white py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0 animate-fade-in-left">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                Welcome to <span className="text-college-gold">Bhagalpur National College</span>
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Empowering students with quality education and 
                building future leaders since 1965
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/admissions" className="btn-gold">
                  Apply Now
                </Link>
                <Link to="/courses" className="btn-outline border-white text-white hover:bg-white hover:text-college-blue">
                  Explore Courses
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 animate-fade-in-right">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="College campus with students"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Bhagalpur National College</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              We provide a nurturing environment where academic excellence meets character development
              to prepare students for success in their careers and life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white p-6 rounded-lg shadow-md card-hover animate-fade-in">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-college-blue">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be a premier institution recognized for academic excellence, innovative teaching methodologies, and holistic development of students.
              </p>
            </div>
            
            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-md card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-college-blue">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide quality education that nurtures critical thinking, fosters innovation, and prepares students to meet global challenges.
              </p>
            </div>
            
            {/* Values */}
            <div className="bg-white p-6 rounded-lg shadow-md card-hover animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-college-blue">Our Values</h3>
              <p className="text-gray-600 mb-4">
                Excellence, integrity, inclusivity, innovation and social responsibility guide our approach to education and community engagement.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about" className="btn-primary inline-flex items-center">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Highlights */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Programs</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of undergraduate and postgraduate programs designed to provide comprehensive knowledge and practical skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Science Laboratory"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-college-blue">Bachelor of Science</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive programs in Physics, Chemistry, Biology, Mathematics, and Computer Science.
                </p>
                <Link to="/courses" className="text-college-blue hover:text-college-gold transition-colors inline-flex items-center font-medium">
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Program 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Arts and Humanities"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-college-blue">Bachelor of Arts</h3>
                <p className="text-gray-600 mb-4">
                  Diverse programs in Literature, History, Economics, Political Science, and Psychology.
                </p>
                <Link to="/courses" className="text-college-blue hover:text-college-gold transition-colors inline-flex items-center font-medium">
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Program 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Commerce and Business"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-college-blue">Bachelor of Commerce</h3>
                <p className="text-gray-600 mb-4">
                  Specialized programs in Accounting, Finance, Business Administration, and Economics.
                </p>
                <Link to="/courses" className="text-college-blue hover:text-college-gold transition-colors inline-flex items-center font-medium">
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses" className="btn-primary inline-flex items-center">
              Explore All Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Life</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Experience a vibrant campus life with diverse activities, events, and facilities that enhance your educational journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 animate-fade-in-left">
              <h3 className="text-2xl font-bold mb-4 text-college-blue">Vibrant Student Community</h3>
              <p className="text-gray-600 mb-6">
                Our campus buzzes with energy as students engage in various academic and extracurricular activities. From cultural festivals to sports tournaments, there's always something happening at BNC.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Modern classrooms and laboratories</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Well-equipped library with digital resources</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Sports facilities including cricket and football grounds</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cultural center for performances and events</span>
                </li>
              </ul>
              <Link to="/gallery" className="btn-primary inline-flex items-center">
                Explore Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4 animate-fade-in-right">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Campus Life" className="rounded-lg shadow-md w-full h-full object-cover" />
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Campus Life" className="rounded-lg shadow-md mt-8 w-full h-full object-cover" />
              <img src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Campus Life" className="rounded-lg shadow-md -mt-4 w-full h-full object-cover" />
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" alt="Campus Life" className="rounded-lg shadow-md w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest events, workshops, and seminars designed to enrich your educational experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 card-hover animate-fade-in">
              <div className="bg-college-blue text-white rounded-lg p-4 inline-block mb-4">
                <div className="text-2xl font-bold">15</div>
                <div>May</div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Annual Science Exhibition</h3>
              <p className="text-gray-600 mb-4">
                A showcase of innovative projects by science students with participation from other colleges.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>09:00 AM - 05:00 PM</span>
              </div>
              <Link to="/events" className="text-college-blue hover:text-college-gold transition-colors inline-flex items-center font-medium">
                More Details
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Event 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-college-blue text-white rounded-lg p-4 inline-block mb-4">
                <div className="text-2xl font-bold">22</div>
                <div>May</div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Literature Festival</h3>
              <p className="text-gray-600 mb-4">
                Celebrating literary works with book discussions, poetry sessions, and author talks.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>10:00 AM - 04:00 PM</span>
              </div>
              <Link to="/events" className="text-college-blue hover:text-college-gold transition-colors inline-flex items-center font-medium">
                More Details
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Event 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 card-hover animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-college-blue text-white rounded-lg p-4 inline-block mb-4">
                <div className="text-2xl font-bold">30</div>
                <div>May</div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Career Counseling Workshop</h3>
              <p className="text-gray-600 mb-4">
                Expert guidance on career options, resume building, and interview preparation for students.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>11:00 AM - 03:00 PM</span>
              </div>
              <Link to="/events" className="text-college-blue hover:text-college-gold transition-colors inline-flex items-center font-medium">
                More Details
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/events" className="btn-primary inline-flex items-center">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-college-blue text-white section-padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-8 lg:mb-0 animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Educational Journey?</h2>
              <p className="text-lg md:text-xl opacity-90">
                Join Bhagalpur National College to experience quality education in a nurturing environment.
              </p>
            </div>
            <div className="animate-fade-in-right">
              <Link to="/admissions" className="btn-gold">
                Apply for Admission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
