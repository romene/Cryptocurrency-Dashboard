import React from 'react';
import './App.css';
import AppLayout from './Layout/AppLayout'
import DashBar from './Layout/DashBar'

function App() {
  return (
    <AppLayout>
      <DashBar>
        <h1>Welcome to CryptoDash</h1>
      </DashBar>
    </AppLayout>
  );
}

export default App;
