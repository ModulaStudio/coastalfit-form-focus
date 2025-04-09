
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ClassCardProps {
  title: string;
  description: string;
  time: string;
  duration: string;
  trainer: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
}

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-500";
    case "Intermediate":
      return "bg-yellow-500";
    case "Advanced":
      return "bg-red-500";
    default:
      return "bg-blue-500";
  }
};

const ClassCard = ({ title, description, time, duration, trainer, level }: ClassCardProps) => {
  return (
    <Card className="h-full transition-transform hover:scale-[1.02] hover:shadow-md">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-coastal-navy">{title}</CardTitle>
          <Badge className={`${getLevelColor(level)} text-white`}>{level}</Badge>
        </div>
        <CardDescription className="text-sm text-gray-500">{time} · {duration}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-sm">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">with {trainer}</span>
          <a href="#booking">
            <Button variant="outline" size="sm" className="border-coastal-teal text-coastal-teal hover:bg-coastal-teal hover:text-white">
              Book
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClassCard;
