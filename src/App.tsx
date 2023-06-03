import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppProvider from './Context/AppContext';
import { MyComponent } from './Components/MyComponent';

function App() {
  return (
    <AppProvider>

      <MyComponent></MyComponent>
    </AppProvider>
  );
}

export default App;
