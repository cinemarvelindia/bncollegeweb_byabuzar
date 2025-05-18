
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

// Real content from B.N. College website
const initialContent = {
  home: {
    title: "Welcome to B.N. College, Bhagalpur",
    subtitle: "Excellence in Education Since 1889",
    description: "B.N. College, Bhagalpur is one of the oldest and most prestigious higher education institutions in Bihar. Our college is committed to providing quality education through innovative teaching methods, practical learning experiences, and holistic development of students. With a rich history of over 133 years, we continue to shape futures and create responsible citizens.",
    featuredImage: "https://bncollegebgp.ac.in/userfiles/image/slider2.jpg",
    cta: "Apply Now",
  },
  about: {
    title: "About B.N. College, Bhagalpur",
    description: "Founded in 1889, B.N. College has been a beacon of academic excellence for over 133 years. The college was established by the great philanthropist Babu Brajnandan Prasad Singh to provide quality higher education to the people of this region. Today, it continues to be a premier institution affiliated with Tilka Manjhi Bhagalpur University, offering diverse undergraduate and postgraduate programs across Arts, Science, and Commerce streams.",
    vision: "To be a leading institution of higher learning, recognized globally for academic excellence, innovation, research contributions, and holistic development of students. We strive to create an ecosystem that nurtures intellectual curiosity, ethical values, and responsible citizenship among our students.",
    mission: "To impart quality education that nurtures critical thinking, creativity, ethical leadership, and prepares students to meet the challenges of a rapidly changing world while contributing meaningfully to the social and economic development of the region. We aim to foster an inclusive learning environment that respects diversity and promotes access to education for all sections of society.",
    featuredImage: "https://bncollegebgp.ac.in/userfiles/image/slider5.jpg",
  },
  courses: {
    title: "Academic Programs at B.N. College",
    description: "B.N. College offers a wide range of undergraduate and postgraduate programs across Arts, Science, and Commerce streams. Our curriculum is regularly updated to meet current academic standards and industry requirements, preparing students for successful careers and higher education. The college is known for its excellent faculty, modern teaching methodologies, and strong industry connections.",
    featuredImage: "https://bncollegebgp.ac.in/userfiles/image/slider3.jpg",
    departments: "The college has well-established departments in Arts, Science, and Commerce disciplines, each with qualified faculty members and necessary infrastructure for effective teaching and learning.",
    facilities: "Our academic infrastructure includes well-equipped laboratories, a modern library with extensive collection of books and journals, computer labs, smart classrooms, and dedicated spaces for co-curricular activities.",
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
                        <div className="relative border rounded-md h-32 w-32 bg-gray-50 overflow-hidden">
                          {content[tab as keyof typeof content].featuredImage ? (
                            <img 
                              src={content[tab as keyof typeof content].featuredImage} 
                              alt="Featured" 
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-32 w-32 flex items-center justify-center">
                              <FileImage className="h-8 w-8 text-gray-400" />
                            </div>
                          )}
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

