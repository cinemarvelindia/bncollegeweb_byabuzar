
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube,
  Save,
  Upload
} from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SettingsManager = () => {
  const [activeTab, setActiveTab] = useState("general");
  const { toast } = useToast();
  
  // Mock settings data
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "Bluestone National College",
    siteTagline: "Excellence in Education",
    siteDescription: "A leading institution providing quality education since 1980.",
    logo: "/placeholder.svg",
    favicon: "/favicon.ico",
  });
  
  const [contactSettings, setContactSettings] = useState({
    email: "info@bluestonecollege.edu",
    phone: "+1 (555) 123-4567",
    address: "123 College Ave, Collegetown, CT 12345",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215457450067!2d-73.98516492396866!3d40.75838283646425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fecf664df5%3A0x33d224615176f7a3!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1683225265820!5m2!1sen!2sus",
    officeHours: "Monday - Friday: 9:00 AM - 5:00 PM",
  });
  
  const [socialSettings, setSocialSettings] = useState({
    facebook: "https://facebook.com/bluestonecollege",
    twitter: "https://twitter.com/bluestonecollege",
    instagram: "https://instagram.com/bluestonecollege",
    linkedin: "https://linkedin.com/company/bluestonecollege",
    youtube: "https://youtube.com/channel/bluestonecollege",
  });
  
  const [footerSettings, setFooterSettings] = useState({
    copyrightText: "© 2025 Bluestone National College. All rights reserved.",
    showSocialIcons: true,
    showQuickLinks: true,
    showContactInfo: true,
  });
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your changes have been successfully saved.",
    });
  };
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Website Settings</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-4 gap-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="footer">Footer</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage basic website information and branding.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input 
                  id="site-name" 
                  value={generalSettings.siteName}
                  onChange={(e) => setGeneralSettings({...generalSettings, siteName: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="site-tagline">Tagline</Label>
                <Input 
                  id="site-tagline" 
                  value={generalSettings.siteTagline}
                  onChange={(e) => setGeneralSettings({...generalSettings, siteTagline: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea 
                  id="site-description" 
                  value={generalSettings.siteDescription}
                  onChange={(e) => setGeneralSettings({...generalSettings, siteDescription: e.target.value})}
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label>Site Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-40 border rounded flex items-center justify-center bg-gray-50 p-2">
                      <img 
                        src={generalSettings.logo} 
                        alt="Logo" 
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Change Logo
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Label>Favicon</Label>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 border rounded flex items-center justify-center bg-gray-50 p-1">
                      <img 
                        src={generalSettings.favicon} 
                        alt="Favicon" 
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Change Favicon
                    </Button>
                  </div>
                </div>
              </div>
              
              <Button className="mt-4" onClick={handleSaveSettings}>
                <Save className="h-4 w-4 mr-2" />
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Manage your contact details displayed on the website.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="contact-email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email Address
                </Label>
                <Input 
                  id="contact-email" 
                  value={contactSettings.email}
                  onChange={(e) => setContactSettings({...contactSettings, email: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Phone Number
                </Label>
                <Input 
                  id="contact-phone" 
                  value={contactSettings.phone}
                  onChange={(e) => setContactSettings({...contactSettings, phone: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Address
                </Label>
                <Textarea 
                  id="contact-address" 
                  value={contactSettings.address}
                  onChange={(e) => setContactSettings({...contactSettings, address: e.target.value})}
                  rows={2}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="office-hours" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Office Hours
                </Label>
                <Input
                  id="office-hours" 
                  value={contactSettings.officeHours}
                  onChange={(e) => setContactSettings({...contactSettings, officeHours: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="google-maps" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Google Maps Embed URL
                </Label>
                <Input
                  id="google-maps" 
                  value={contactSettings.googleMapsEmbed}
                  onChange={(e) => setContactSettings({...contactSettings, googleMapsEmbed: e.target.value})}
                />
                <p className="text-xs text-gray-500">
                  Enter the embed URL from Google Maps to display a map on your contact page.
                </p>
              </div>
              
              <Button className="mt-4" onClick={handleSaveSettings}>
                <Save className="h-4 w-4 mr-2" />
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>Manage your social media presence links.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="social-facebook" className="flex items-center gap-2">
                  <Facebook className="h-4 w-4" /> Facebook URL
                </Label>
                <Input 
                  id="social-facebook" 
                  value={socialSettings.facebook}
                  onChange={(e) => setSocialSettings({...socialSettings, facebook: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="social-twitter" className="flex items-center gap-2">
                  <Twitter className="h-4 w-4" /> Twitter URL
                </Label>
                <Input 
                  id="social-twitter" 
                  value={socialSettings.twitter}
                  onChange={(e) => setSocialSettings({...socialSettings, twitter: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="social-instagram" className="flex items-center gap-2">
                  <Instagram className="h-4 w-4" /> Instagram URL
                </Label>
                <Input 
                  id="social-instagram" 
                  value={socialSettings.instagram}
                  onChange={(e) => setSocialSettings({...socialSettings, instagram: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="social-linkedin" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" /> LinkedIn URL
                </Label>
                <Input 
                  id="social-linkedin" 
                  value={socialSettings.linkedin}
                  onChange={(e) => setSocialSettings({...socialSettings, linkedin: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="social-youtube" className="flex items-center gap-2">
                  <Youtube className="h-4 w-4" /> YouTube URL
                </Label>
                <Input 
                  id="social-youtube" 
                  value={socialSettings.youtube}
                  onChange={(e) => setSocialSettings({...socialSettings, youtube: e.target.value})}
                />
              </div>
              
              <Button className="mt-4" onClick={handleSaveSettings}>
                <Save className="h-4 w-4 mr-2" />
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="footer">
          <Card>
            <CardHeader>
              <CardTitle>Footer Settings</CardTitle>
              <CardDescription>Configure the website footer appearance.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="copyright-text">Copyright Text</Label>
                <Input 
                  id="copyright-text" 
                  value={footerSettings.copyrightText}
                  onChange={(e) => setFooterSettings({...footerSettings, copyrightText: e.target.value})}
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-md font-medium">Footer Layout</h3>
                
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="social-icons" 
                    checked={footerSettings.showSocialIcons}
                    onCheckedChange={(checked) => setFooterSettings({...footerSettings, showSocialIcons: checked})}
                  />
                  <Label htmlFor="social-icons">Show Social Media Icons</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="quick-links" 
                    checked={footerSettings.showQuickLinks}
                    onCheckedChange={(checked) => setFooterSettings({...footerSettings, showQuickLinks: checked})}
                  />
                  <Label htmlFor="quick-links">Show Quick Links Menu</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="contact-info" 
                    checked={footerSettings.showContactInfo}
                    onCheckedChange={(checked) => setFooterSettings({...footerSettings, showContactInfo: checked})}
                  />
                  <Label htmlFor="contact-info">Show Contact Information</Label>
                </div>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="quick-links">
                  <AccordionTrigger>Quick Links Menu</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      <p className="text-sm text-gray-500">
                        Configure the quick links that appear in the footer. These links help visitors navigate to important pages on your website.
                      </p>
                      <Button variant="outline" size="sm">
                        Edit Quick Links
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Button className="mt-4" onClick={handleSaveSettings}>
                <Save className="h-4 w-4 mr-2" />
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsManager;
