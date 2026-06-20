import React, { useState, useEffect } from 'react'; 

import SignalForm from './components/SignalForm';
import SignalTable from './components/SignalTable';

function App() {
  useEffect(() => {
  const interval = setInterval(() => {
    // Call your fetch function here
    console.log("Refreshing data...");
  }, 15000);

  return () => clearInterval(interval); // Cleanup to prevent memory leaks
}, []);
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Trading Signal Tracker</h1>
    
     <SignalForm  />
      <SignalTable />
    </div>
  );
}
export default App;