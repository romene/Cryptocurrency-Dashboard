import React from 'react';
import './App.css';
import AppLayout from './Layout/AppLayout'
import DashBar from './Layout/DashBar'
import AppProvider from './AppProvider'

function App() {
  return (
    // Wrap up App Component on the App Provider Component
    <AppProvider>
      <AppLayout>
      <DashBar>
        <h1>Welcome to CryptoDash</h1>
      </DashBar>
      </AppLayout>
    </AppProvider>
   
  );
}

export default App;
