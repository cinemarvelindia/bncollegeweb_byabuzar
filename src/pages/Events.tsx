
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Event types and data
interface Event {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
}

const eventData: Event[] = [
  {
    id: 1,
    title: "Annual Science Exhibition",
    category: "Academic",
    date: "May 15, 2023",
    time: "09:00 AM - 05:00 PM",
    venue: "Science Block",
    description: "A showcase of innovative projects by science students with participation from other colleges.",
    image: "https://images.unsplash.com/photo-1561489401-fc2876ced162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "Literature Festival",
    category: "Cultural",
    date: "May 22, 2023",
    time: "10:00 AM - 04:00 PM",
    venue: "College Auditorium",
    description: "Celebrating literary works with book discussions, poetry sessions, and author talks.",
    image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
  },
  {
    id: 3,
    title: "Career Counseling Workshop",
    category: "Workshop",
    date: "May 30, 2023",
    time: "11:00 AM - 03:00 PM",
    venue: "Seminar Hall",
    description: "Expert guidance on career options, resume building, and interview preparation for students.",
    image: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    title: "Annual Sports Meet",
    category: "Sports",
    date: "June 05, 2023",
    time: "08:00 AM - 06:00 PM",
    venue: "College Grounds",
    description: "Annual sports competition featuring various indoor and outdoor sports activities.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    title: "Tech Symposium",
    category: "Academic",
    date: "June 12, 2023",
    time: "10:00 AM - 05:00 PM",
    venue: "Computer Science Block",
    description: "A technical symposium featuring the latest advancements in technology and informatics.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1565&q=80"
  },
  {
    id: 6,
    title: "Cultural Night",
    category: "Cultural",
    date: "June 20, 2023",
    time: "06:00 PM - 10:00 PM",
    venue: "Open Air Theatre",
    description: "An evening of music, dance, and cultural performances by college students.",
    image: "https://images.unsplash.com/photo-1508921108053-9f757ca2b24a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 7,
    title: "Research Methodology Workshop",
    category: "Workshop",
    date: "July 05, 2023",
    time: "10:00 AM - 03:00 PM",
    venue: "Conference Hall",
    description: "Workshop on research methodologies, paper publication, and academic writing.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 8,
    title: "Alumni Meet",
    category: "Networking",
    date: "July 15, 2023",
    time: "04:00 PM - 08:00 PM",
    venue: "College Auditorium",
    description: "Annual gathering of college alumni to reconnect and network with current students.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(eventData);
  
  // Get unique categories
  const categories = ['All', ...new Set(eventData.map(event => event.category))];
  
  // Filter events based on selected category
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredEvents(eventData);
    } else {
      setFilteredEvents(eventData.filter(event => event.category === activeFilter));
    }
  }, [activeFilter]);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Events & Workshops</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover academic, cultural, and professional events happening at Bhagalpur National College.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Events Listing */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-college-blue heading-underline mx-auto w-fit">Upcoming Events</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest events, workshops, and seminars designed to enrich your educational experience and provide valuable networking opportunities.
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-6 py-2 rounded-full transition-colors ${activeFilter === category ? 'bg-college-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-college-blue text-white px-3 py-1 m-3 rounded-full text-sm">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-college-blue">{event.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{event.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="text-college-blue hover:text-college-gold transition-colors font-medium text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No events found message */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No events found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Event */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-college-blue">Featured Event</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="College Cultural Fest" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12">
                <span className="inline-block bg-college-blue text-white px-3 py-1 rounded-full text-sm mb-4">Annual Event</span>
                <h3 className="text-3xl font-bold mb-4 text-college-blue">Annual College Cultural Fest</h3>
                <p className="text-gray-600 mb-6">
                  Join us for the most anticipated event of the year, our Annual College Cultural Fest "Rhythm 2023". The festival will feature music performances, dance competitions, theatrical plays, art exhibitions, and much more.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-college-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>August 10-12, 2023</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-college-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>10:00 AM - 09:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-college-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>College Campus</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-college-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>events@bnc.edu</span>
                  </div>
                </div>
                <button className="btn-primary">Register Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-college-blue">Past Events Gallery</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Take a look at the memorable moments from our previous events and activities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="gallery-image animate-fade-in">
                <img 
                  src={`https://source.unsplash.com/random/300x300?college,event&sig=${item}`} 
                  alt={`Event ${item}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-college-blue">Academic Calendar</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Stay updated with important dates, events, and academic schedules for the current academic year.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-college-blue">Important Dates</h3>
            <div className="space-y-4">
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-32 font-medium text-gray-600">January 5</div>
                <div>Classes Begin for Spring Semester</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-32 font-medium text-gray-600">March 15-19</div>
                <div>Mid-Semester Examinations</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-32 font-medium text-gray-600">April 10-15</div>
                <div>Annual Cultural Festival</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-32 font-medium text-gray-600">May 20</div>
                <div>Last Day of Classes</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-32 font-medium text-gray-600">June 1-15</div>
                <div>Final Examinations</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-32 font-medium text-gray-600">July 5</div>
                <div>Results Declaration</div>
              </div>
              <div className="flex border-b border-gray-200 pb-3">
                <div className="w-32 font-medium text-gray-600">August 10</div>
                <div>Admission for New Academic Year Begins</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="inline-flex items-center text-college-blue hover:text-college-gold transition-colors font-medium">
                Download Complete Academic Calendar
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Want to Organize an Event?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            If you're interested in organizing an event or workshop at our college, we'd love to hear from you.
          </p>
          <Link to="/contact" className="btn-gold animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;
