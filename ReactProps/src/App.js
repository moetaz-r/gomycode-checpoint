// Import required dependencies
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import PlayersList component
import PlayersList from './components/PlayersList';

// Main App component - root component of the application
function App() {
  return (
    <div className="App">
      {/* Render the PlayersList component */}
      <PlayersList />
    </div>
  );
}

// Export App component as default
export default App;
