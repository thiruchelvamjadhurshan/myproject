import React, { useState } from 'react';
import { Camera, Video, Mic, Users, Edit, Palette, Image, Play, Phone, Mail, Facebook, MessageCircle, Menu, X, ChevronRight, ArrowLeft } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courses = [
    { 
      icon: <Camera className="w-8 h-8" />, 
      title: "Photography", 
      description: "Master the art of capturing perfect moments with professional photography techniques",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: <Video className="w-8 h-8" />, 
      title: "Videography", 
      description: "Create cinematic videos with advanced filming and storytelling methods",
      image: "https://images.pexels.com/photos/2769654/pexels-photo-2769654.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: <Mic className="w-8 h-8" />, 
      title: "Recordings", 
      description: "Professional audio recording and sound engineering techniques",
      image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "Functions graphy", 
      description: "Specialize in event photography and videography for special occasions",
      image: "https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: <Edit className="w-8 h-8" />, 
      title: "Editing", 
      description: "Advanced video and photo editing using industry-standard software",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: <Palette className="w-8 h-8" />, 
      title: "Graphic Designing", 
      description: "Create stunning visual designs and branding materials",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: <Image className="w-8 h-8" />, 
      title: "Pre-shoots", 
      description: "Pre-production planning and conceptual photography sessions",
      image: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: <Play className="w-8 h-8" />, 
      title: "Shootings", 
      description: "Live shooting sessions with professional equipment and techniques",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/2769654/pexels-photo-2769654.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500"
  ];

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/94761149915?text=Hello%20ஆதிரை%20Graphics!%20I%27m%20interested%20in%20your%20courses.', '_blank');
  };

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigateToPage('home')}>
            <img 
              src="https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-1/519681986_122164954940571273_5134271342541481589_n.jpg?stp=c420.0.1080.1080a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=OiR4B3i4FmAQ7kNvwFmBhzf&_nc_oc=AdnINOHBeAbKrTjK51YDoYdgHhX8FS1nBT4TN3pt5-wTU_Q5sVcL5QkA8ONZVUQmaDZ54XRpfRtCR04dIV30LZNO&_nc_zt=24&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=fPtIFnVeqYABHdzhKk0SjA&oh=00_Afa_OJbwN76E6waiRvaZUAmz_-maqapPrV_DzQcAKB4IIg&oe=68CEF6CA"
              alt="ஆதிரை Graphics Logo"
              className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400/50"
            />
            <span className="text-white font-bold text-lg">ஆதிரை Graphics</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'courses'].map((page) => (
              <button
                key={page}
                onClick={() => navigateToPage(page)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  currentPage === page
                    ? 'text-emerald-300 bg-white/20'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-white/20 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-md border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'courses'].map((page) => (
              <button
                key={page}
                onClick={() => navigateToPage(page)}
                className="block w-full text-left px-3 py-2 text-white/80 hover:text-white hover:bg-white/20 rounded-md transition-colors"
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Master the Art of
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                    {" "}Visual Storytelling
                  </span>
                </h1>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Join ஆதிரை Graphics and discover professional photography, videography, and creative design techniques that will transform your artistic vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => navigateToPage('courses')}
                    className="btn-primary flex items-center justify-center space-x-2"
                  >
                    <span>Explore Courses</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61578550084918&_rdc=1&_rdr#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Follow Us</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="glass-card p-2">
              <img 
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="ஆதிரை Graphics Studio"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Work</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Browse through our portfolio showcasing the exceptional work created by our talented students and instructors
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="glass-card p-2 group hover:scale-105 transition-all duration-300">
                <img 
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to start your creative journey? Contact us today to learn more about our courses
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto mt-6"></div>
          </div>
          
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                  <Phone className="w-6 h-6 text-emerald-400" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a href="tel:+94761149915" className="text-white/80 hover:text-emerald-300 transition-colors">
                      +94 76 114 9915
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                  <Mail className="w-6 h-6 text-emerald-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:aadhiraigraphix@gmail.com" className="text-white/80 hover:text-emerald-300 transition-colors">
                      aadhiraigraphix@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                  <Facebook className="w-6 h-6 text-emerald-400" />
                  <div>
                    <p className="text-white font-medium">Facebook</p>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61578550084918&_rdc=1&_rdr#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-emerald-300 transition-colors"
                    >
                      Follow our Facebook Page
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-6">
                <button 
                  onClick={openWhatsApp}
                  className="btn-primary flex items-center justify-center space-x-2 mx-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About ஆதிரை Graphics</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="glass-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Founded by <strong className="text-emerald-300">mas.Thiruchelvam Jadhurshan</strong>, 
                ஆதிரை Graphics is a premier creative studio dedicated to nurturing artistic talent and 
                providing world-class education in visual arts and media production.
              </p>
              <p className="text-white/80 mb-6 leading-relaxed">
                With years of industry experience, we offer comprehensive courses that blend traditional 
                techniques with cutting-edge technology, ensuring our students are well-prepared for the 
                evolving creative industry.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                Our mission is to empower creative minds with the skills, knowledge, and confidence needed 
                to excel in the competitive world of visual storytelling and digital media production.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white/80">Professional Equipment & Studios</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white/80">Industry-Experienced Instructors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white/80">Hands-On Learning Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white/80">Career Placement Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white/80">Small Class Sizes for Personal Attention</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white/80">Flexible Learning Schedules</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-2">
              <img 
                src="https://images.pexels.com/photos/2769654/pexels-photo-2769654.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Studio"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Owner Section */}
          <div className="glass-card p-8 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Our Founder</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="glass-card p-2 max-w-sm mx-auto">
                  <img 
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="mas.Thiruchelvam Jadhurshan"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">mas.Thiruchelvam Jadhurshan</h3>
                <p className="text-emerald-300 font-semibold mb-6">Founder & Creative Director</p>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  With over a decade of experience in the creative industry, mas.Thiruchelvam Jadhurshan 
                  has established ஆதிரை Graphics as a leading institution for visual arts education. 
                  His passion for photography, videography, and graphic design has inspired countless 
                  students to pursue their creative dreams.
                </p>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  As a professional photographer and videographer, he has worked on numerous high-profile 
                  projects, bringing real-world experience directly into the classroom. His teaching 
                  philosophy focuses on combining technical excellence with creative vision.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl">
                    <h4 className="text-white font-semibold mb-2">Specializations</h4>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• Wedding Photography</li>
                      <li>• Commercial Videography</li>
                      <li>• Brand Design</li>
                      <li>• Event Documentation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-xl">
                    <h4 className="text-white font-semibold mb-2">Achievements</h4>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• 500+ Students Trained</li>
                      <li>• 10+ Years Experience</li>
                      <li>• Award-Winning Projects</li>
                      <li>• Industry Recognition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-white/70">
                We strive for excellence in every aspect of our teaching and creative work, 
                ensuring our students receive the highest quality education.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community</h3>
              <p className="text-white/70">
                We foster a supportive community where students can learn, grow, and 
                collaborate with fellow creatives and industry professionals.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-white/70">
                We embrace new technologies and creative approaches, keeping our 
                curriculum current with industry trends and innovations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const CoursesPage = () => (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Courses</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover our comprehensive range of creative courses designed to unleash your artistic potential 
              and prepare you for a successful career in the creative industry.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {courses.map((course, index) => (
              <div key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                <div className="p-2 mb-4">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <div className="p-6">
                  <div className="text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{course.description}</p>
                  <button className="w-full bg-gradient-to-r from-emerald-500/20 to-green-600/20 hover:from-emerald-500/30 hover:to-green-600/30 border border-emerald-400/30 text-emerald-300 font-medium px-4 py-2 rounded-lg transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Course Features */}
          <div className="glass-card p-8 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What You'll Get</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-green-600/20 border border-emerald-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Professional Equipment</h3>
                <p className="text-white/70 text-sm">Access to industry-standard cameras, lighting, and editing software</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-green-600/20 border border-emerald-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Expert Instructors</h3>
                <p className="text-white/70 text-sm">Learn from experienced professionals with real industry experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-green-600/20 border border-emerald-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Edit className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Hands-On Projects</h3>
                <p className="text-white/70 text-sm">Build a professional portfolio with real-world projects</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-green-600/20 border border-emerald-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Career Support</h3>
                <p className="text-white/70 text-sm">Job placement assistance and career guidance after completion</p>
              </div>
            </div>
          </div>

          {/* Enrollment CTA */}
          <div className="glass-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Creative Journey?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful graduates who have transformed their passion into a thriving career. 
              Contact us today to learn more about enrollment and course schedules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openWhatsApp}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enroll Now via WhatsApp</span>
              </button>
              <a 
                href="mailto:aadhiraigraphix@gmail.com"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const Footer = () => (
    <footer className="py-8 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-1/519681986_122164954940571273_5134271342541481589_n.jpg?stp=c420.0.1080.1080a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=OiR4B3i4FmAQ7kNvwFmBhzf&_nc_oc=AdnINOHBeAbKrTjK51YDoYdgHhX8FS1nBT4TN3pt5-wTU_Q5sVcL5QkA8ONZVUQmaDZ54XRpfRtCR04dIV30LZNO&_nc_zt=24&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=fPtIFnVeqYABHdzhKk0SjA&oh=00_Afa_OJbwN76E6waiRvaZUAmz_-maqapPrV_DzQcAKB4IIg&oe=68CEF6CA"
              alt="ஆதிரை Graphics Logo"
              className="w-8 h-8 rounded-full object-cover border border-emerald-400/50"
            />
            <span className="text-white font-bold text-lg">ஆதிரை Graphics</span>
          </div>
          <p className="text-white/60">
            © 2024 ஆதிரை Graphics. All rights reserved. | Owner: mas.Thiruchelvam Jadhurshan
          </p>
        </div>
      </div>
    </footer>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'courses':
        return <CoursesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-green-900 to-teal-900">
      <Navigation />
      {renderCurrentPage()}
      <Footer />

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center space-x-2"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default App;