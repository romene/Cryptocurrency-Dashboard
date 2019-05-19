import React from 'react';
import './App.css';
import AppLayout from './Layout/AppLayout'
import DashBar from './Layout/DashBar'
import {AppProvider} from './AppProvider'


function App() {
  return (
    
    <AppLayout>
    <AppProvider>

      <DashBar>
        <h1>Welcome to CryptoDash</h1>
      </DashBar>
    </AppProvider>

    </AppLayout>
   
  );
}

export default App;
