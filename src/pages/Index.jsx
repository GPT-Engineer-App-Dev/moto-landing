import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestimonialCard } from "@/components/TestimonialCard";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Welcome to Moto SaaS</h1>
        <p className="text-lg mb-6">The ultimate solution for motorcycle enthusiasts and businesses.</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detail about feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detail about feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detail about feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            name="John Doe"
            testimonial="This is the best motorcycle SaaS I've ever used!"
          />
          <TestimonialCard
            name="Jane Smith"
            testimonial="Amazing features and great support."
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-6">Join us today and take your motorcycle business to the next level.</p>
        <Button variant="primary" size="lg">Sign Up Now</Button>
      </section>
    </main>
  );
}

export default Index;