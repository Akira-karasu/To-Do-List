import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style/main.css';
import './style/landingPage.css';
import './style/toDo_list.css';
import './style/list.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
