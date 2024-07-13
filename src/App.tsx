import React from 'react';
import './App.css';
import { ThemeProvider } from './providers/ThemeProviders';
import Routes from './routes/Routes';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
       
       <Routes/>
       
    </ThemeProvider>
  );  
}

export default App;
