
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-coastal-navy/80 z-0">
       <div className="w-full h-full bg-[url('/image4.png')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="heading-xl text-white mb-6">Transform Your Body, Transform Your Life</h1>
          <p className="text-white/90 text-xl mb-8">
            Join CoastalFit Studio where fitness meets community. Our expert trainers and diverse classes 
            will help you achieve your goals in a supportive, energizing environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <a href="#classes">
              <Button size="lg" className="bg-coastal-teal hover:bg-coastal-teal/90 text-white">
                Explore Classes
              </Button>
            </a>
            <a href="#booking">
              <Button size="lg" className="bg-coastal-coral hover:bg-coastal-coral/90 text-white">
                Book a Session
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
