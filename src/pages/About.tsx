
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-college-darkBlue to-college-blue text-white py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About B.N. College Bhagalpur</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A premier institution of higher education in Eastern India committed to excellence in teaching, research and holistic development since 1889.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* College History */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-6 text-college-blue heading-underline">Our History</h2>
              <p className="text-gray-600 mb-4">
                B.N. College, Bhagalpur was established in 1889 with a commitment to provide quality education to the people of Bhagalpur and the surrounding regions. Started as Tej Narayan Jubilee College, it was later renamed as Bhagalpur National College and then finally as B.N. College, Bhagalpur.
              </p>
              <p className="text-gray-600 mb-4">
                The college began with just a few departments and a handful of students, and has now grown into a premier institution with various undergraduate and postgraduate programs across multiple disciplines. It gained the status of a constituent unit of Tilka Manjhi Bhagalpur University in 1960.
              </p>
              <p className="text-gray-600">
                Throughout its rich history spanning over 130 years, B.N. College has maintained its commitment to academic excellence while continuously evolving to meet the changing educational needs of society and the nation.
              </p>
            </div>
            <div className="w-full md:w-1/2 animate-fade-in-right">
              <img 
                src="https://bncollegebgp.ac.in/wp-content/uploads/2022/09/bn-new-web.jpg" 
                alt="B.N. College Bhagalpur Main Building" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
              <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto text-college-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-college-blue text-center">Our Mission</h3>
                <p className="text-gray-600 text-center">
                  To impart quality education, promote academic excellence and foster holistic development of students by creating an environment conducive to learning, research, and character building.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Provide accessible and affordable education to all sections of society</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Promote research and innovation in academic disciplines</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Develop skilled human resources for national development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Inculcate ethical values and social responsibility</span>
                  </li>
                </ul>
              </div>
              
              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto text-college-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-college-blue text-center">Our Vision</h3>
                <p className="text-gray-600 text-center">
                  To emerge as a premier institution of higher learning that creates enlightened citizens with strong ethical values and contributes to nation-building through excellence in teaching, research, and extension activities.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Achieve excellence in academic and administrative functioning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Become a leading research-focused institution in Eastern India</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Create global citizens rooted in Indian values</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Strengthen industry-academia partnerships for knowledge exchange</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Principal */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 bg-college-blue">
                <div className="h-full flex flex-col justify-center items-center p-8 text-center">
                  <img 
                    src="https://bncollegebgp.ac.in/wp-content/uploads/2022/07/principal-1.jpg" 
                    alt="Principal" 
                    className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg animate-fade-in"
                  />
                  <h3 className="text-2xl font-bold text-white mt-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>Dr. Sanjay Prasad</h3>
                  <p className="text-lg text-college-gold animate-fade-in" style={{ animationDelay: '0.3s' }}>Principal</p>
                </div>
              </div>
              <div className="w-full md:w-3/5 p-8 md:p-12 animate-fade-in-right">
                <h2 className="text-3xl font-bold mb-6 text-college-blue heading-underline">Message from the Principal</h2>
                <blockquote className="text-gray-600 italic">
                  <p className="mb-4">
                    "Welcome to the official website of B.N. College, Bhagalpur. Founded in 1889, our institution has been a beacon of knowledge and excellence for over 130 years, serving the educational needs of this region with distinction.
                  </p>
                  <p className="mb-4">
                    At B.N. College, we are committed to providing quality education that nurtures intellectual growth, fosters innovation, and instills ethical values in our students. Our diverse academic programs, dedicated faculty, and state-of-the-art facilities create an environment conducive to learning and personal development.
                  </p>
                  <p>
                    As we move forward in this digital age, we remain steadfast in our mission to produce responsible citizens who can contribute meaningfully to society and nation-building. I invite you to explore our website and learn more about the opportunities that await you at B.N. College."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAAC Accreditation */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">NAAC Accreditation</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              B.N. College, Bhagalpur is proud to be accredited by the National Assessment and Accreditation Council (NAAC) with 'A' Grade, reflecting our commitment to quality education and academic excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Accreditation */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover animate-fade-in">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">NAAC 'A' Grade</h3>
              <p className="text-gray-600">
                Accredited with 'A' Grade by NAAC, recognizing our commitment to quality education.
              </p>
            </div>
            
            {/* Infrastructure */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Modern Infrastructure</h3>
              <p className="text-gray-600">
                Well-equipped laboratories, smart classrooms, and extensive library resources.
              </p>
            </div>
            
            {/* Quality Education */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Quality Education</h3>
              <p className="text-gray-600">
                Committed to providing high-quality education through innovative teaching methodologies.
              </p>
            </div>
            
            {/* Research Focus */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Research Excellence</h3>
              <p className="text-gray-600">
                Promoting research culture with numerous projects and publications by faculty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Begin Your Journey with B.N. College</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Take the first step towards a bright future by joining our distinguished academic community with over 130 years of educational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/admissions" className="btn-gold">
              Apply for Admission
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-college-blue">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
