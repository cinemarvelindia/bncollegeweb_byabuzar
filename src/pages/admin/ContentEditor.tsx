
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
    subtitle: "Pursuing Excellence in Education Since 1889",
    description: "B.N. College, Bhagalpur is a premier institution of higher education in Eastern India with a rich legacy of academic excellence spanning over 130 years. We offer a wide range of undergraduate and postgraduate programs across Science, Arts, and Commerce streams.",
    featuredImage: "https://bncollegebgp.ac.in/wp-content/uploads/2022/09/bn-new-web.jpg",
    cta: "Apply Now",
  },
  about: {
    title: "About B.N. College, Bhagalpur",
    description: "Established in 1889, B.N. College (originally named Tej Narayan Jubilee College) has been a beacon of knowledge and learning in this region for over 130 years. The college became a constituent unit of Tilka Manjhi Bhagalpur University in 1960 and has been continuously evolving to meet the changing educational needs while maintaining its rich academic traditions.",
    vision: "To emerge as a premier institution of higher learning that creates enlightened citizens with strong ethical values and contributes to nation-building through excellence in teaching, research, and extension activities.",
    mission: "To impart quality education, promote academic excellence and foster holistic development of students by creating an environment conducive to learning, research, and character building.",
    featuredImage: "https://bncollegebgp.ac.in/wp-content/uploads/2022/07/principal-1.jpg",
  },
  courses: {
    title: "Academic Programs at B.N. College",
    description: "B.N. College offers a diverse range of undergraduate and postgraduate programs across Science, Arts, and Commerce streams. Our programs are designed to provide students with both theoretical knowledge and practical skills to excel in their chosen fields.",
    programs: [
      {
        name: "Bachelor of Arts (B.A.)",
        subjects: "English, Hindi, History, Political Science, Economics, Philosophy, Geography, Psychology, Sociology"
      },
      {
        name: "Bachelor of Science (B.Sc.)",
        subjects: "Physics, Chemistry, Mathematics, Botany, Zoology, Computer Science"
      },
      {
        name: "Bachelor of Commerce (B.Com.)",
        subjects: "Accounting, Finance, Business Management, Taxation"
      },
      {
        name: "Master of Arts (M.A.)",
        subjects: "English, Hindi, History, Economics, Political Science"
      },
      {
        name: "Master of Science (M.Sc.)",
        subjects: "Physics, Chemistry, Mathematics, Botany, Zoology"
      },
      {
        name: "Master of Commerce (M.Com.)",
        subjects: "Advanced Accounting and Finance"
      }
    ]
  },
  faculty: {
    title: "Our Distinguished Faculty",
    description: "B.N. College takes pride in its highly qualified and dedicated faculty who are committed to academic excellence and student development. Our professors are actively engaged in teaching, research, and community service.",
    departments: "Physics, Chemistry, Botany, Zoology, Mathematics, Computer Science, English, Hindi, History, Political Science, Economics, Philosophy, Geography, Psychology, Sociology, Commerce"
  },
  events: {
    title: "Events & Activities",
    description: "B.N. College hosts numerous academic, cultural, and sports events throughout the year, providing students with opportunities to showcase their talents and develop leadership skills.",
    upcomingEvents: [
      {
        title: "Annual Cultural Festival",
        date: "March 15-17, 2023",
        description: "Cultural performances, competitions, and exhibitions"
      },
      {
        title: "National Science Day Celebration",
        date: "February 28, 2023",
        description: "Lectures, demonstrations, and competitions related to science"
      },
      {
        title: "Annual Sports Meet",
        date: "January 10-15, 2023",
        description: "Various sports and athletic competitions"
      }
    ]
  },
  contact: {
    title: "Contact Information",
    description: "Get in touch with B.N. College, Bhagalpur",
    address: "B.N. College, Bhagalpur, Bihar - 812007, India",
    email: "principal@bncollegebgp.ac.in",
    phone: "+91 641-2620211",
    website: "www.bncollegebgp.ac.in",
    socialMedia: {
      facebook: "https://www.facebook.com/bncollegebgp",
      twitter: "https://twitter.com/bncollegebgp"
    }
  }
}

// Create a general schema that includes all possible fields across all tabs
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
  address: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  website: z.string().optional(),
  // We're only including fields that will be directly edited in the form
  // Complex nested objects like programs, upcomingEvents, and socialMedia
  // will be handled separately if needed
});

// Define a type based on the schema for our form values
type FormValues = z.infer<typeof formSchema>;

const ContentEditor = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [content, setContent] = useState(initialContent);
  const { toast } = useToast();

  // Helper function to extract editable fields from content based on active tab
  const getEditableFields = (tab: string): FormValues => {
    const tabContent = content[tab as keyof typeof content] as any;
    
    // Extract only the fields that are defined in our formSchema
    const editableFields: Partial<FormValues> = {};
    
    // Add only the fields that exist in both the tab content and our schema
    if (tabContent.title) editableFields.title = tabContent.title;
    if (tabContent.subtitle) editableFields.subtitle = tabContent.subtitle;
    if (tabContent.description) editableFields.description = tabContent.description;
    if (tabContent.cta) editableFields.cta = tabContent.cta;
    if (tabContent.vision) editableFields.vision = tabContent.vision;
    if (tabContent.mission) editableFields.mission = tabContent.mission;
    if (tabContent.address) editableFields.address = tabContent.address;
    if (tabContent.email) editableFields.email = tabContent.email;
    if (tabContent.phone) editableFields.phone = tabContent.phone;
    if (tabContent.website) editableFields.website = tabContent.website;
    
    return editableFields as FormValues;
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: getEditableFields(activeTab),
  });

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    form.reset(getEditableFields(value));
  };

  const onSubmit = (data: FormValues) => {
    // Update only the fields that exist in the form data
    const updatedTabContent = {
      ...content[activeTab as keyof typeof content],
      ...data,
    };

    // Update the content state with new data
    setContent({
      ...content,
      [activeTab]: updatedTabContent,
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

  // Helper function to render form fields based on the active tab
  const renderTabSpecificFields = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
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
          </>
        );
      case "about":
        return (
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
        );
      case "contact":
        return (
          <>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Enter address" className="min-h-[60px]" />
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
                    <Input {...field} type="email" placeholder="Enter email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter phone number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter website URL" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
      default:
        return null;
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
          <TabsTrigger value="faculty" className="flex items-center">
            {getTabIcon('faculty')} Faculty
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center">
            {getTabIcon('events')} Events
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center">
            {getTabIcon('contact')} Contact
          </TabsTrigger>
        </TabsList>

        {['home', 'about', 'courses', 'faculty', 'events', 'contact'].map((tab) => (
          <TabsContent key={tab} value={tab} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {getTabIcon(tab)} 
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Page Content
                </CardTitle>
                <CardDescription>
                  Edit the content for the {tab} page of B.N. College website.
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
                    
                    {renderTabSpecificFields()}
                    
                    <div>
                      <Label htmlFor="image-upload">Featured Image</Label>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="border rounded-md p-2 h-32 w-32 flex items-center justify-center bg-gray-50">
                          {activeTab === 'home' && (
                            <img 
                              src={content.home.featuredImage} 
                              alt="Featured" 
                              className="max-h-full max-w-full object-contain" 
                            />
                          )}
                          {activeTab === 'about' && (
                            <img 
                              src={content.about.featuredImage} 
                              alt="Featured" 
                              className="max-h-full max-w-full object-contain" 
                            />
                          )}
                          {!['home', 'about'].includes(activeTab) && (
                            <FileImage className="h-8 w-8 text-gray-400" />
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
