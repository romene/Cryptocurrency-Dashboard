import React from 'react';
import './App.css';
import AppLayout from './Layout/AppLayout'
import DashBar from './Layout/DashBar'
import Settings from './Settings' 
import AppProvider from './AppProvider'
import Content from './Shared/Content'

function App() {
  return (
    // Wrap up App Component on the App Provider Component
      <AppLayout>
       <AppProvider>
      <DashBar/>
        <Content>
          <Settings />
        </Content>
      
      </AppProvider>
      </AppLayout>
   
  );
}

export default App;
