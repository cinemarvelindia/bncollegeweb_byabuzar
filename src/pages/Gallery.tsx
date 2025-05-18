
import React, { useState, useEffect } from 'react';
import { Dialog } from '@/components/ui/dialog';

// Gallery types and data from actual B.N. College website
interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "B.N. College Main Building",
    category: "Campus",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2022/09/bn-new-web.jpg",
    description: "Historic main building of B.N. College, Bhagalpur, established in 1889."
  },
  {
    id: 2,
    title: "College Library",
    category: "Campus",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2023/04/library.jpg",
    description: "The central library houses over 100,000 books and provides digital resources for students and faculty."
  },
  {
    id: 3,
    title: "Science Block",
    category: "Campus",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2023/04/science-block.jpg",
    description: "The science block houses well-equipped laboratories for Physics, Chemistry, Botany, and Zoology departments."
  },
  {
    id: 4,
    title: "Computer Lab",
    category: "Campus",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2023/04/computer-lab.jpg",
    description: "Modern computer laboratory with high-speed internet and latest software for students."
  },
  {
    id: 5,
    title: "Annual Cultural Function",
    category: "Events",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2023/04/cultural-function.jpg",
    description: "Students performing at the annual cultural function, showcasing their talent in music and dance."
  },
  {
    id: 6,
    title: "Annual Sports Meet",
    category: "Sports",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2023/04/sports-day.jpg",
    description: "Students participating in various athletic events during the Annual Sports Meet."
  },
  {
    id: 7,
    title: "Science Exhibition",
    category: "Events",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2023/04/science-exhibition.jpg",
    description: "Students presenting innovative projects at the annual science exhibition."
  },
  {
    id: 8,
    title: "College Cricket Team",
    category: "Sports",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2023/04/cricket-team.jpg",
    description: "B.N. College cricket team, champions of the inter-college tournament."
  },
  {
    id: 9,
    title: "National Science Day",
    category: "Events",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2023/02/national-science-day.jpg",
    description: "Celebration of National Science Day with special lectures and demonstrations."
  },
  {
    id: 10,
    title: "College Auditorium",
    category: "Campus",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2023/04/auditorium.jpg",
    description: "The spacious auditorium hosts various academic and cultural events throughout the year."
  },
  {
    id: 11,
    title: "Convocation Ceremony",
    category: "Events",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2023/04/convocation.jpg",
    description: "Students receiving their degrees at the annual convocation ceremony."
  },
  {
    id: 12,
    title: "NAAC Team Visit",
    category: "Events",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2023/04/naac-visit.jpg",
    description: "NAAC peer team visiting the college for accreditation purposes."
  }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [filteredGallery, setFilteredGallery] = useState<GalleryItem[]>(galleryData);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  
  // Get unique categories
  const categories = ['All', ...new Set(galleryData.map(item => item.category))];
  
  // Filter gallery based on selected category
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredGallery(galleryData);
    } else {
      setFilteredGallery(galleryData.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  // Open lightbox with selected image
  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Photo Gallery</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Explore images of our campus, events, and student activities at B.N. College, Bhagalpur.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-college-blue heading-underline mx-auto w-fit">B.N. College Gallery</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Take a visual tour of our historic campus, academic events, sports activities, and other memorable moments from college life.
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                className="gallery-image cursor-pointer animate-fade-in relative rounded-lg overflow-hidden shadow-md"
                onClick={() => openLightbox(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* No images found message */}
          {filteredGallery.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No images found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-college-blue">Video Gallery</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Watch videos of campus tours, academic events, and other college activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1 text-college-blue">B.N. College Campus Tour</h3>
                <p className="text-gray-600 text-sm">A virtual tour of our historic campus and modern facilities.</p>
              </div>
            </div>
            
            {/* Video 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1 text-college-blue">Annual Cultural Festival</h3>
                <p className="text-gray-600 text-sm">Highlights from our vibrant annual cultural festival.</p>
              </div>
            </div>
            
            {/* Video 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1 text-college-blue">Convocation Ceremony</h3>
                <p className="text-gray-600 text-sm">The annual convocation ceremony where graduates receive their degrees.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={closeLightbox}>
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox} 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="max-w-4xl w-full">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="text-white mt-4">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-300 mt-1">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </Dialog>

      {/* NAAC Photo Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-college-blue">NAAC Accreditation</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              B.N. College is proud to be accredited with 'A' grade by the National Assessment and Accreditation Council (NAAC).
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://bncollegebgp.ac.in/wp-content/uploads/2023/04/naac-certificate.jpg" 
                alt="NAAC Accreditation Certificate" 
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1 text-college-blue">NAAC Accreditation Certificate</h3>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://bncollegebgp.ac.in/wp-content/uploads/2023/04/naac-team-visit.jpg" 
                alt="NAAC Team Visit" 
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1 text-college-blue">NAAC Peer Team Visit</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Share Your College Memories</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Are you an alumnus or current student? We'd love to feature your photos in our gallery to showcase the rich heritage of B.N. College.
          </p>
          <button className="btn-gold animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Submit Your Media
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
