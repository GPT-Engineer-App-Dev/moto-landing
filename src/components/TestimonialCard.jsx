import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TestimonialCard({ name, testimonial }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{testimonial}</p>
      </CardContent>
    </Card>
  );
}