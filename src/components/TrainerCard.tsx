
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TrainerCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
}

const TrainerCard = ({ name, title, bio, image, specialties }: TrainerCardProps) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={`${name}, ${title}`}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-coastal-navy">{name}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{bio}</p>
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty, index) => (
            <Badge key={index} variant="secondary" className="bg-coastal-teal/10 text-coastal-teal">
              {specialty}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainerCard;
