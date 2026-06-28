// Import required dependencies
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Import Player component and players data
import Player from './Player';
import players from '../data/players';

// PlayersList component that displays all players
const PlayersList = () => {
  
  // Inline styles for the container
  const containerStyle = {
    padding: '30px 0',
    backgroundColor: '#f5f6fa'
  };

  // Inline styles for the title
  const titleStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '30px',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    // Main container with background styling
    <Container fluid style={containerStyle}>
      {/* Page title */}
      <h1 style={titleStyle}>⚽ World Class Football Players ⚽</h1>
      
      {/* Responsive grid row */}
      <Row className="justify-content-center">
        {/* Map through each player in the players array */}
        {players.map((player, index) => (
          // Responsive column for different screen sizes
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            {/* Render Player component with spread operator to pass all props */}
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Export PlayersList component as default
export default PlayersList;