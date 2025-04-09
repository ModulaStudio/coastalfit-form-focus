
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 shadow-sm z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-coastal-navy text-2xl font-bold">Coastal<span className="text-coastal-teal">Fit</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#classes" className="text-coastal-navy hover:text-coastal-teal transition-colors">Classes</a>
          <a href="#trainers" className="text-coastal-navy hover:text-coastal-teal transition-colors">Trainers</a>
          <a href="#testimonials" className="text-coastal-navy hover:text-coastal-teal transition-colors">Testimonials</a>
          <a href="#booking" className="text-coastal-navy hover:text-coastal-teal transition-colors">Book Now</a>
        </div>

        <div className="hidden md:block">
          <a href="#booking">
            <Button className="bg-coastal-coral hover:bg-coastal-coral/90 text-white">Get Started</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-coastal-navy focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-md">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a href="#classes" className="text-coastal-navy hover:text-coastal-teal transition-colors py-2" onClick={toggleMenu}>Classes</a>
            <a href="#trainers" className="text-coastal-navy hover:text-coastal-teal transition-colors py-2" onClick={toggleMenu}>Trainers</a>
            <a href="#testimonials" className="text-coastal-navy hover:text-coastal-teal transition-colors py-2" onClick={toggleMenu}>Testimonials</a>
            <a href="#booking" className="text-coastal-navy hover:text-coastal-teal transition-colors py-2" onClick={toggleMenu}>Book Now</a>
            <Button className="bg-coastal-coral hover:bg-coastal-coral/90 text-white w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
