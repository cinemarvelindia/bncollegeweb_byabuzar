
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { FileImage, Home, Info, GraduationCap, Users, CalendarDays, Phone, Layout } from 'lucide-react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Mock data - in a real app, this would come from a database
const initialContent = {
  home: {
    title: "Welcome to Bluestone National College",
    subtitle: "Empowering Students for Tomorrow",
    description: "Bluestone National College provides world-class education through innovative teaching methods and practical learning experiences.",
    featuredImage: "/placeholder.svg",
    cta: "Apply Now",
  },
  about: {
    title: "About Bluestone National College",
    description: "Founded in 1980, Bluestone National College has been a beacon of academic excellence for over 40 years. Our mission is to empower students with knowledge, skills, and values to excel in their careers and contribute meaningfully to society.",
    vision: "To be a leading institution of higher learning, recognized globally for academic excellence and innovation.",
    mission: "To provide quality education that nurtures critical thinking, creativity, and ethical leadership.",
    featuredImage: "/placeholder.svg",
  },
  courses: {
    title: "Our Academic Programs",
    description: "Discover a wide range of undergraduate and graduate programs designed to prepare you for success in your chosen field.",
  }
}

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  subtitle: z.string().optional(),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  cta: z.string().optional(),
  vision: z.string().optional(),
  mission: z.string().optional(),
});

const ContentEditor = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [content, setContent] = useState(initialContent);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: content[activeTab as keyof typeof content],
  });

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    form.reset(content[value as keyof typeof content]);
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Update the content state with new data
    setContent({
      ...content,
      [activeTab]: {
        ...content[activeTab as keyof typeof content],
        ...data,
      },
    });

    toast({
      title: "Content updated",
      description: `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} page content has been updated.`,
    });
  };

  // Function to get the appropriate icon for each tab
  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'home':
        return <Home className="h-4 w-4 mr-2" />;
      case 'about':
        return <Info className="h-4 w-4 mr-2" />;
      case 'courses':
        return <GraduationCap className="h-4 w-4 mr-2" />;
      case 'faculty':
        return <Users className="h-4 w-4 mr-2" />;
      case 'events':
        return <CalendarDays className="h-4 w-4 mr-2" />;
      case 'contact':
        return <Phone className="h-4 w-4 mr-2" />;
      default:
        return <Layout className="h-4 w-4 mr-2" />;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Content Management</h1>
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="mb-6 flex flex-wrap">
          <TabsTrigger value="home" className="flex items-center">
            {getTabIcon('home')} Home
          </TabsTrigger>
          <TabsTrigger value="about" className="flex items-center">
            {getTabIcon('about')} About
          </TabsTrigger>
          <TabsTrigger value="courses" className="flex items-center">
            {getTabIcon('courses')} Courses
          </TabsTrigger>
        </TabsList>

        {['home', 'about', 'courses'].map((tab) => (
          <TabsContent key={tab} value={tab} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {getTabIcon(tab)} 
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Page Content
                </CardTitle>
                <CardDescription>
                  Edit the content for the {tab} page of your website.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Page Title</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Enter page title" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {tab === 'home' && (
                      <FormField
                        control={form.control}
                        name="subtitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subtitle</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Enter subtitle" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              placeholder="Enter page description" 
                              className="min-h-[150px]" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {tab === 'home' && (
                      <FormField
                        control={form.control}
                        name="cta"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Call to Action Text</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Enter CTA text" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    {tab === 'about' && (
                      <>
                        <FormField
                          control={form.control}
                          name="vision"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Vision</FormLabel>
                              <FormControl>
                                <Textarea 
                                  {...field} 
                                  placeholder="Enter vision statement" 
                                  className="min-h-[100px]" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="mission"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mission</FormLabel>
                              <FormControl>
                                <Textarea 
                                  {...field} 
                                  placeholder="Enter mission statement" 
                                  className="min-h-[100px]" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}
                    
                    <div>
                      <Label htmlFor="image-upload">Featured Image</Label>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="border rounded-md p-2 h-32 w-32 flex items-center justify-center bg-gray-50">
                          <FileImage className="h-8 w-8 text-gray-400" />
                        </div>
                        <Button type="button" variant="outline">
                          Upload New Image
                        </Button>
                      </div>
                    </div>
                    
                    <Button type="submit">Save Changes</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ContentEditor;
