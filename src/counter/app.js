import React from 'react';
import { DataForwordProvider } from './counter/Context'; 
import Home from './counter/Home';

const App = () => {
  return (
    <DataForwordProvider> 
      <Home />
    </DataForwordProvider>
  );
};

export default App;