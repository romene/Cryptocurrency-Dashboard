import React from 'react';
import './App.css';
import AppLayout from './Layout/AppLayout'
import styled from 'styled-components'
import DashBar from './Layout/DashBar'
import Settings from './Settings' 
import Dashboard from './Dashboard'
import AppProvider from './AppProvider'
import Content from './Shared/Content'

function App(props) {
  return (
    // Wrap up App Component on the App Provider Component
       <AppProvider>
      <AppLayout>
      <DashBar/>
          <Content>
            <Settings />
        <CenterContent>
            <Dashboard />
        </CenterContent>
          </Content>
      </AppLayout>
      </AppProvider>
   
  );
}

export default App;


const CenterContent = styled.div`
width: 100%;
display: flex;
justify-content: center;
`