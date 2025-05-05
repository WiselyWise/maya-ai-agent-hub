
import React from 'react';

const testimonials = [
  {
    content: "The Presentation Generator AI saved me hours of work. I created a compelling pitch deck in just 15 minutes that helped us secure funding.",
    author: "Sarah Johnson",
    role: "Startup Founder",
  },
  {
    content: "Prompt Genius has transformed how I interact with AI. The quality of outputs I get now is on another level entirely.",
    author: "Michael Chen",
    role: "Marketing Director",
  },
  {
    content: "As a small business owner, the Viral Post Generator has been a game-changer for our social media presence. Our engagement is up 300%!",
    author: "Emily Rodriguez",
    role: "Small Business Owner",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 relative">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-coral-500 mb-3 block">TESTIMONIALS</span>
          <h2 className="text-3xl font-bold text-white mb-4">What Our <span className="text-gradient-coral">Customers Say</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what professionals like you have achieved using our AI tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-6 backdrop-blur-md relative hover:shadow-glow-coral hover:border-coral-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-coral-500 to-transparent" />
              <svg className="w-10 h-10 text-coral-500/30 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.722 6.065c-5.598 0-10.178 4.58-10.178 10.178 0 5.598 4.58 10.178 10.178 10.178 5.598 0 10.178-4.58 10.178-10.178 0-5.598-4.58-10.178-10.178-10.178zM6.441 19.79c-1.966 0-3.559-1.593-3.559-3.559s1.593-3.559 3.559-3.559 3.559 1.593 3.559 3.559c0 1.966-1.593 3.559-3.559 3.559zM15.013 19.79c-1.966 0-3.559-1.593-3.559-3.559s1.593-3.559 3.559-3.559 3.559 1.593 3.559 3.559c0 1.966-1.593 3.559-3.559 3.559z" />
              </svg>
              <div className="text-white/80 mb-6">
                "{testimonial.content}"
              </div>
              <div>
                <p className="font-medium text-white">{testimonial.author}</p>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
