
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
  
  console.log('User set as admin successfully:', userId);
  return true;
}

// Helper to create an admin user (to be used in development only)
export async function createAdminUser(email: string, password: string, firstName: string = 'Admin', lastName: string = 'User') {
  // First check if the user already exists
  const existingUser = await checkUserExists(email);
  
  if (existingUser) {
    // If user exists but is not admin, set as admin
    if (existingUser.role !== 'admin') {
      console.log('User exists but not an admin, updating role...');
      return await setUserAsAdmin(existingUser.id);
    }
    console.log('Admin user already exists');
    return true; // User exists and is already an admin
  }
  
  console.log('Creating new admin user...');
  
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
    console.log('New admin user created, setting role...');
    return await setUserAsAdmin(data.user.id);
  }
  
  return false;
}

// Auto-login function for development purposes
export async function autoLoginAdmin() {
  const email = 'akabuzar9@gmail.com';
  const password = '12345678';
  
  try {
    console.log('Attempting auto-login for admin...');
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) {
      console.error('Auto-login failed, creating admin user instead:', error);
      await createAdminUser(email, password);
      const loginResult = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (loginResult.error) {
        console.error('Second login attempt failed:', loginResult.error);
        return false;
      }
      
      console.log('Admin created and logged in successfully');
      return true;
    }
    
    console.log('Admin logged in successfully');
    return true;
  } catch (error) {
    console.error('Failed to auto-login admin:', error);
    return false;
  }
}

// Function to initialize an admin user with predefined credentials
export async function initializeDefaultAdmin() {
  console.log('Initializing default admin user...');
  // This should only be used in development environments
  const email = 'akabuzar9@gmail.com';
  const password = '12345678';
  
  try {
    await createAdminUser(email, password);
    console.log('Default admin user setup completed');
    
    // Try auto-login after creating admin
    await autoLoginAdmin();
  } catch (error) {
    console.error('Failed to initialize default admin:', error);
  }
}
