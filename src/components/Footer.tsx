
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coastal-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Coastal<span className="text-coastal-teal">Fit</span></h3>
            <p className="text-gray-300 mb-4">
              Transform your body, transform your life at CoastalFit Studio. Join our fitness community today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-coastal-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-coastal-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-coastal-teal transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-coastal-teal transition-colors">Home</a></li>
              <li><a href="#classes" className="text-gray-300 hover:text-coastal-teal transition-colors">Classes</a></li>
              <li><a href="#trainers" className="text-gray-300 hover:text-coastal-teal transition-colors">Trainers</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-coastal-teal transition-colors">Testimonials</a></li>
              <li><a href="#booking" className="text-gray-300 hover:text-coastal-teal transition-colors">Book Now</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li><span className="font-medium">Monday - Friday:</span> 6am - 9pm</li>
              <li><span className="font-medium">Saturday:</span> 7am - 7pm</li>
              <li><span className="font-medium">Sunday:</span> 8am - 5pm</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Fitness Way</p>
              <p>Coastal Beach, CA 92101</p>
              <p className="mt-4">info@coastalfit.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} CoastalFit Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
