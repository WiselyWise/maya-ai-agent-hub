
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
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

type FormValues = z.infer<typeof formSchema>;

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = 'Subscribe to our newsletter',
  description = 'Get the latest AI productivity tips and updates',
  buttonText = 'Subscribe',
  className = '',
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('marketing_newsletter')
        .insert({
          email: values.email,
          source: window.location.pathname,
          subscribed_at: new Date().toISOString(),
        });

      if (error) throw error;

      toast({
        title: 'Subscribed!',
        description: 'Thank you for subscribing to our newsletter.',
      });
      
      form.reset();
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
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
    <div className={`${className}`}>
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {description && <p className="text-muted-foreground mb-4">{description}</p>}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : buttonText}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewsletterSignup;
