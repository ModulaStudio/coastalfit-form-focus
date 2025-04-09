
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClassCard from "@/components/ClassCard";
import TrainerCard from "@/components/TrainerCard";
import TestimonialCard from "@/components/TestimonialCard";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { Calendar, Activity, Users } from "lucide-react";

const Index = () => {
  const classes = [
    {
      title: "HIIT Training",
      description: "High-intensity interval training designed to burn calories and improve cardiovascular health through short bursts of intense exercise.",
      time: "Mon/Wed/Fri 6:00 AM",
      duration: "45 min",
      trainer: "Alex Thompson",
      level: "Intermediate" as const,
    },
    {
      title: "Yoga Flow",
      description: "A dynamic practice that connects breath with movement through a flowing sequence of yoga postures to build strength and flexibility.",
      time: "Tue/Thu 7:30 AM",
      duration: "60 min",
      trainer: "Maya Patel",
      level: "All Levels" as const,
    },
    {
      title: "Strength Training",
      description: "Build muscle, increase bone density, and improve overall physical performance through progressive resistance training.",
      time: "Tue/Thu 5:30 PM",
      duration: "50 min",
      trainer: "Chris Reynolds",
      level: "Beginner" as const,
    },
    {
      title: "Pilates",
      description: "Core-focused exercises that improve flexibility, posture, and mental awareness with precise movements and controlled breathing.",
      time: "Mon/Wed 9:00 AM",
      duration: "55 min",
      trainer: "Sarah Chen",
      level: "All Levels" as const,
    },
    {
      title: "CrossTrain Elite",
      description: "Challenging combination of strength and conditioning exercises designed to build functional fitness through varied high-intensity movements.",
      time: "Sat 8:00 AM",
      duration: "75 min",
      trainer: "Chris Reynolds",
      level: "Advanced" as const,
    },
    {
      title: "Recovery & Stretch",
      description: "Gentle stretching and mobility work to improve flexibility, reduce muscle tension, and promote recovery after intense training.",
      time: "Sun 10:00 AM",
      duration: "45 min",
      trainer: "Maya Patel",
      level: "All Levels" as const,
    },
  ];

  const trainers = [
    {
      name: "Alex Thompson",
      title: "Head Trainer & HIIT Specialist",
      bio: "With over 10 years of experience, Alex specializes in high-intensity training and athletic performance. Certified in multiple training methodologies.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      specialties: ["HIIT", "Functional Training", "Sports Performance"]
    },
    {
      name: "Maya Patel",
      title: "Yoga & Pilates Instructor",
      bio: "Maya brings a holistic approach to fitness with her extensive background in yoga, meditation, and body awareness practices.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      specialties: ["Yoga", "Pilates", "Meditation", "Flexibility"]
    },
    {
      name: "Chris Reynolds",
      title: "Strength & Conditioning Coach",
      bio: "Former competitive athlete turned coach, Chris helps clients build strength, power, and confidence through evidence-based training approaches.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      specialties: ["Strength Training", "Olympic Lifting", "CrossTraining"]
    },
    {
      name: "Sarah Chen",
      title: "Pilates & Rehabilitation Specialist",
      bio: "With a background in physical therapy, Sarah specializes in corrective exercise and helping clients recover from injuries through mindful movement.",
      image: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
      specialties: ["Pilates", "Rehabilitation", "Corrective Exercise"]
    },
  ];

  const testimonials = [
    {
      quote: "CoastalFit transformed my approach to fitness. The trainers really care about your goals and the community keeps me motivated!",
      author: "Jamie L.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "I've tried many studios, but none compare to the personal attention and results I've gotten at CoastalFit. The variety of classes keeps things interesting.",
      author: "Michael T.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "After having my baby, I needed a supportive environment to get back in shape. The trainers created a program just for me that fit my schedule and goals.",
      author: "Sophia R.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 bg-coastal-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="p-4 bg-coastal-teal/10 rounded-full mb-4">
                  <Activity size={32} className="text-coastal-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Diverse Programs</h3>
                <p className="text-gray-600">
                  From high-intensity workouts to mindful yoga sessions, our diverse class offerings ensure there's something for everyone.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="p-4 bg-coastal-teal/10 rounded-full mb-4">
                  <Users size={32} className="text-coastal-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
                <p className="text-gray-600">
                  Our certified trainers bring years of expertise to guide you through safe, effective workouts tailored to your needs.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="p-4 bg-coastal-teal/10 rounded-full mb-4">
                  <Calendar size={32} className="text-coastal-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  With early morning to evening classes throughout the week, we make it easy to fit fitness into your busy life.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Classes Section */}
        <section id="classes" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-lg text-coastal-navy mb-4">Our Classes</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover our range of classes designed to challenge, energize and transform. 
                Whether you're just starting your fitness journey or looking to push your limits, 
                we have the perfect class for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((classItem, index) => (
                <ClassCard key={index} {...classItem} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Trainers Section */}
        <section id="trainers" className="py-16 bg-coastal-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-lg text-coastal-navy mb-4">Meet Our Trainers</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our team of certified professionals are passionate about helping you achieve your fitness goals.
                With diverse specialties and years of experience, they're here to guide, motivate, and transform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainers.map((trainer, index) => (
                <TrainerCard key={index} {...trainer} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-coastal-navy text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">What Our Members Say</h2>
              <p className="text-white/80 max-w-3xl mx-auto">
                Don't just take our word for it. Hear from our community of members who have transformed their lives with CoastalFit.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Booking Section */}
        <section id="booking" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-lg text-coastal-navy mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Book your first session today and take the first step towards a healthier, stronger you.
                Our team is ready to welcome you to the CoastalFit community.
              </p>
            </div>
            
            <BookingForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
