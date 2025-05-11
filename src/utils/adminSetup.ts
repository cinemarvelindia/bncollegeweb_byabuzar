
import { supabase } from '@/integrations/supabase/client';

// Function to check if a user exists by email
export async function checkUserExists(email: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, email, role')
    .eq('email', email)
    .single();
  
  if (error && error.code !== 'PGRST116') {
    console.error('Error checking user:', error);
    return null;
  }
  
  return data;
}

// Function to set a user as an admin
export async function setUserAsAdmin(userId: string) {
  const { error } = await supabase
    .from('profiles')
    .update({ role: 'admin' })
    .eq('id', userId);
  
  if (error) {
    console.error('Error setting user as admin:', error);
    return false;
  }
  
  return true;
}

// Helper to create an admin user (to be used in development only)
export async function createAdminUser(email: string, password: string, firstName: string = 'Admin', lastName: string = 'User') {
  // First check if the user already exists
  const existingUser = await checkUserExists(email);
  
  if (existingUser) {
    // If user exists but is not admin, set as admin
    if (existingUser.role !== 'admin') {
      return await setUserAsAdmin(existingUser.id);
    }
    return true; // User exists and is already an admin
  }
  
  // Create new user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        role: 'admin'
      }
    }
  });
  
  if (error) {
    console.error('Error creating admin user:', error);
    return false;
  }
  
  // Set the user as admin in profiles table
  if (data.user) {
    return await setUserAsAdmin(data.user.id);
  }
  
  return false;
}

// Function to initialize an admin user with predefined credentials
export async function initializeDefaultAdmin() {
  // This should only be used in development environments
  if (process.env.NODE_ENV !== 'production') {
    const email = 'akabuzar9@gmail.com';
    const password = '12345678';
    
    try {
      await createAdminUser(email, password);
      console.log('Default admin user setup completed');
    } catch (error) {
      console.error('Failed to initialize default admin:', error);
    }
  }
}
