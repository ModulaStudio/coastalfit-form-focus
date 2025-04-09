
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ quote, author, rating, image }: TestimonialCardProps) => {
  const stars = Array(5).fill(0);
  
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardContent className="pt-6 flex-grow">
        <div className="flex mb-4">
          {stars.map((_, index) => (
            <Star
              key={index}
              size={16}
              className={`${
                index < rating ? "fill-coastal-coral text-coastal-coral" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-lg italic mb-4">"{quote}"</p>
      </CardContent>
      <CardFooter className="flex items-center border-t pt-4">
        {image && (
          <div className="mr-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src={image} alt={author} className="w-full h-full object-cover" />
            </div>
          </div>
        )}
        <div>
          <p className="font-semibold">{author}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
