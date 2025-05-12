
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeDefaultAdmin } from './utils/adminSetup.ts';

// Initialize default admin in development mode
initializeDefaultAdmin();

// Add meta viewport tag programmatically to ensure proper rendering on all devices
const meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
document.getElementsByTagName('head')[0].appendChild(meta);

createRoot(document.getElementById("root")!).render(<App />);
