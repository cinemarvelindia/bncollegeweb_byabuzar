
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  Card,
  CardContent
} from '@/components/ui/card';
import { Image, Plus, Pencil, Trash2, FolderPlus, Upload } from 'lucide-react';

// Mock gallery data
const initialGalleryItems = [
  {
    id: 1,
    title: "Campus Library",
    description: "Our newly renovated library offers a modern study space.",
    image: "/placeholder.svg",
    category: "Campus"
  },
  {
    id: 2,
    title: "Graduation Ceremony",
    description: "Last year's graduation ceremony at Bluestone National College.",
    image: "/placeholder.svg",
    category: "Events"
  },
  {
    id: 3,
    title: "Science Lab",
    description: "State-of-the-art equipment in our science laboratory.",
    image: "/placeholder.svg",
    category: "Facilities"
  },
  {
    id: 4,
    title: "Student Life",
    description: "Students enjoying campus activities.",
    image: "/placeholder.svg",
    category: "Student Life"
  },
  {
    id: 5,
    title: "Sports Tournament",
    description: "Annual inter-college sports tournament.",
    image: "/placeholder.svg",
    category: "Sports"
  },
  {
    id: 6,
    title: "Arts Exhibition",
    description: "Student artwork from the Fine Arts department.",
    image: "/placeholder.svg",
    category: "Arts"
  }
];

// Categories
const initialCategories = [
  "All",
  "Campus",
  "Events",
  "Facilities",
  "Student Life",
  "Sports",
  "Arts"
];

const GalleryManager = () => {
  const [galleryItems, setGalleryItems] = useState(initialGalleryItems);
  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [currentItem, setCurrentItem] = useState<any>(null);
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    image: "/placeholder.svg",
    category: "Campus"
  });
  
  const { toast } = useToast();
  
  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);
  
  const handleAddItem = () => {
    const id = galleryItems.length ? Math.max(...galleryItems.map(item => item.id)) + 1 : 1;
    setGalleryItems([...galleryItems, { ...newItem, id }]);
    setNewItem({
      title: "",
      description: "",
      image: "/placeholder.svg",
      category: "Campus"
    });
    setIsAddDialogOpen(false);
    
    toast({
      title: "Image added",
      description: `${newItem.title} has been successfully added to the gallery.`
    });
  };
  
  const handleEditItem = () => {
    setGalleryItems(galleryItems.map(item => item.id === currentItem.id ? currentItem : item));
    setIsEditDialogOpen(false);
    
    toast({
      title: "Image updated",
      description: `${currentItem.title} has been successfully updated.`
    });
  };
  
  const handleDeleteItem = (id: number) => {
    setGalleryItems(galleryItems.filter(item => item.id !== id));
    
    toast({
      title: "Image deleted",
      description: "The image has been removed from the gallery."
    });
  };
  
  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
      setIsCategoryDialogOpen(false);
      
      toast({
        title: "Category added",
        description: `${newCategory} has been added to the categories.`
      });
    }
  };
  
  const openEditDialog = (item: any) => {
    setCurrentItem(item);
    setIsEditDialogOpen(true);
  };
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gallery Management</h1>
      
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-college-blue" : ""}
            >
              {category}
            </Button>
          ))}
          
          <Dialog open={isCategoryDialogOpen} onOpenChange={setIsCategoryDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost">
                <FolderPlus className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle>Add New Category</DialogTitle>
                <DialogDescription>
                  Create a new category for organizing gallery images.
                </DialogDescription>
              </DialogHeader>
              
              <div className="py-4">
                <Label htmlFor="category-name">Category Name</Label>
                <Input
                  id="category-name"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Enter category name"
                  className="mt-2"
                />
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCategoryDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleAddCategory}>Add Category</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Image
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Gallery Image</DialogTitle>
              <DialogDescription>
                Upload a new image to the gallery.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  placeholder="Enter image title"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  placeholder="Enter image description"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={newItem.category}
                  onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {categories.slice(1).map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="image">Image</Label>
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 border rounded flex items-center justify-center bg-gray-100">
                    <Image className="h-8 w-8 text-gray-400" />
                  </div>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Image
                  </Button>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleAddItem}>Add to Gallery</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="aspect-video relative group">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="text-white border-white hover:bg-white/20 hover:text-white"
                  onClick={() => openEditDialog(item)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="text-red-400 border-red-400 hover:bg-red-500/20 hover:text-red-400"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.description}</p>
              <div className="text-xs bg-gray-100 px-2 py-1 rounded-full inline-block">{item.category}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center p-10 bg-gray-50 rounded-lg mt-6">
          <Image className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium">No Images Found</h3>
          <p className="text-gray-500 mb-4">There are no images in this category yet.</p>
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add First Image
          </Button>
        </div>
      )}
      
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Gallery Image</DialogTitle>
            <DialogDescription>
              Update the image details.
            </DialogDescription>
          </DialogHeader>
          
          {currentItem && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input
                  id="edit-title"
                  value={currentItem.title}
                  onChange={(e) => setCurrentItem({ ...currentItem, title: e.target.value })}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Input
                  id="edit-description"
                  value={currentItem.description}
                  onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="edit-category">Category</Label>
                <select
                  id="edit-category"
                  value={currentItem.category}
                  onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {categories.slice(1).map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="edit-image">Image</Label>
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 border rounded overflow-hidden">
                    <img 
                      src={currentItem.image} 
                      alt={currentItem.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Change Image
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleEditItem}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryManager;
