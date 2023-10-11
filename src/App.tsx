import React from 'react';
import './App.css';
import AppContextProvider from "./utils/providers/AppContextProvider";
import Index from "./pages";

function App() {
  return (
    <AppContextProvider>
      <Index/>
    </AppContextProvider>
  );
}

export default App;
