
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

// Define form schema with Zod
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  dob: z.date({
    required_error: "Date of birth is required.",
  }),
  gender: z.string({
    required_error: "Please select a gender.",
  }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(2, { message: "State must be at least 2 characters." }),
  zipCode: z.string().min(5, { message: "Zip code must be at least 5 characters." }),
  country: z.string().min(2, { message: "Country must be at least 2 characters." }),
  course: z.string({
    required_error: "Please select a course.",
  }),
  highSchool: z.string().min(2, { message: "High school name must be at least 2 characters." }),
  graduationYear: z.string().min(4, { message: "Please enter a valid graduation year." }),
  statement: z.string().min(50, { message: "Personal statement must be at least 50 characters." }),
});

const courses = [
  { label: "Bachelor of Computer Science", value: "bcs" },
  { label: "Bachelor of Business Administration", value: "bba" },
  { label: "Bachelor of Arts in English", value: "ba-eng" },
  { label: "Master of Business Administration", value: "mba" },
  { label: "Master of Science in Data Science", value: "ms-ds" },
];

const Apply = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "United States",
      highSchool: "",
      graduationYear: "",
      statement: "",
    },
  });
  
  // Get form state
  const { formState } = form;
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    
    toast({
      title: "Application Submitted",
      description: "Your application has been submitted successfully. We will contact you shortly.",
    });
    
    // Reset form
    form.reset();
    setStep(1);
  };
  
  const nextStep = () => {
    const fieldNames = step === 1 
      ? ["firstName", "lastName", "email", "phone", "dob", "gender"] 
      : step === 2 
        ? ["address", "city", "state", "zipCode", "country"] 
        : ["course", "highSchool", "graduationYear"];
    
    const isValid = fieldNames.every(fieldName => {
      const field = form.getValues(fieldName as keyof z.infer<typeof formSchema>);
      return field !== undefined && field !== "";
    });
    
    if (isValid) {
      setStep(step + 1);
    } else {
      // Trigger validation for the current step's fields
      fieldNames.forEach(fieldName => {
        form.trigger(fieldName as keyof z.infer<typeof formSchema>);
      });
    }
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Apply for Admission</h1>
          <p className="text-gray-600">Complete the application form below to begin your journey with us.</p>
        </div>
        
        <div className="mb-10">
          <div className="flex justify-between items-center">
            <div className={`font-medium ${step >= 1 ? 'text-college-blue' : 'text-gray-500'}`}>Personal Information</div>
            <Separator className="flex-1 mx-4" />
            <div className={`font-medium ${step >= 2 ? 'text-college-blue' : 'text-gray-500'}`}>Contact Information</div>
            <Separator className="flex-1 mx-4" />
            <div className={`font-medium ${step >= 3 ? 'text-college-blue' : 'text-gray-500'}`}>Academic Information</div>
            <Separator className="flex-1 mx-4" />
            <div className={`font-medium ${step >= 4 ? 'text-college-blue' : 'text-gray-500'}`}>Review & Submit</div>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && "Personal Information"}
              {step === 2 && "Contact Information"}
              {step === 3 && "Academic Information"}
              {step === 4 && "Review Your Application"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Please enter your personal details."}
              {step === 2 && "Please provide your contact information."}
              {step === 3 && "Tell us about your academic background."}
              {step === 4 && "Please review your information before submitting."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john.doe@example.com" {...field} />
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
                              <Input placeholder="(123) 456-7890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Date of Birth</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your gender" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="New York" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State/Province</FormLabel>
                            <FormControl>
                              <Input placeholder="NY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Zip/Postal Code</FormLabel>
                            <FormControl>
                              <Input placeholder="10001" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                              <Input placeholder="United States" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}
                
                {step === 3 && (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="course"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Program of Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a course" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {courses.map((course) => (
                                <SelectItem key={course.value} value={course.value}>
                                  {course.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="highSchool"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>High School/College</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your previous school name" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="graduationYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Graduation Year</FormLabel>
                            <FormControl>
                              <Input placeholder="YYYY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="statement"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Personal Statement</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about yourself and why you want to join this program." 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Minimum 50 characters
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Personal Information</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Name</p>
                          <p>{form.getValues("firstName")} {form.getValues("lastName")}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Email</p>
                          <p>{form.getValues("email")}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Phone</p>
                          <p>{form.getValues("phone")}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Date of Birth</p>
                          <p>{form.getValues("dob") ? format(form.getValues("dob"), "PPP") : ""}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Gender</p>
                          <p>{form.getValues("gender")}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-semibold mb-2">Contact Information</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Address</p>
                          <p>{form.getValues("address")}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">City</p>
                          <p>{form.getValues("city")}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">State</p>
                          <p>{form.getValues("state")}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Zip Code</p>
                          <p>{form.getValues("zipCode")}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Country</p>
                          <p>{form.getValues("country")}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-semibold mb-2">Academic Information</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Program of Interest</p>
                          <p>{courses.find(c => c.value === form.getValues("course"))?.label || form.getValues("course")}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Previous School</p>
                          <p>{form.getValues("highSchool")}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Graduation Year</p>
                          <p>{form.getValues("graduationYear")}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-gray-500 mb-1">Personal Statement</p>
                        <p className="text-sm">{form.getValues("statement")}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Previous
                    </Button>
                  )}
                  {step < 4 ? (
                    <Button 
                      type="button" 
                      className="ml-auto" 
                      onClick={nextStep}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" className="ml-auto">
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Need help with your application? Contact our admissions office at <span className="font-medium">admissions@bluestonecollege.edu</span></p>
        </div>
      </div>
    </div>
  );
};

export default Apply;
