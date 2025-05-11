
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeDefaultAdmin } from './utils/adminSetup.ts';

// Initialize default admin in development mode
if (process.env.NODE_ENV !== 'production') {
  initializeDefaultAdmin();
}

createRoot(document.getElementById("root")!).render(<App />);
