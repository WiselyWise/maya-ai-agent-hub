
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  company: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface LeadCaptureFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  title = 'Get Started',
  description = 'Enter your details to access our AI tools',
  buttonText = 'Submit',
  className = '',
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      company: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('marketing_leads')
        .insert({
          email: values.email,
          name: values.name,
          company: values.company || null,
          source: window.location.pathname,
          created_at: new Date().toISOString(),
        });

      if (error) throw error;

      toast({
        title: 'Thank you!',
        description: 'We\'ve received your information and will be in touch soon.',
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast({
        title: 'Something went wrong',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-card rounded-lg shadow-md p-6 ${className}`}>
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {description && <p className="text-muted-foreground mb-4">{description}</p>}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : buttonText}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LeadCaptureForm;
