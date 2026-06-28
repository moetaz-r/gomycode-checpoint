// Import required dependencies
import React from 'react';
import { Card, Badge } from 'react-bootstrap';

// Player component that displays individual player information in a card
// Uses destructuring to extract props: name, team, nationality, jerseyNumber, age, imageUrl
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  
  // Inline styles for the component
  const cardStyle = {
    width: '18rem',
    margin: '15px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease-in-out',
    borderRadius: '15px',
    overflow: 'hidden'
  };

  const imageStyle = {
    height: '250px',
    objectFit: 'cover',
    borderBottom: '3px solid #007bff'
  };

  const badgeStyle = {
    fontSize: '0.8rem',
    margin: '2px'
  };

  const headerStyle = {
    backgroundColor: '#f8f9fa',
    borderBottom: '2px solid #dee2e6',
    padding: '15px'
  };

  return (
    // Card component with hover effects
    <Card 
      style={cardStyle}
      className="player-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {/* Player image with error handling */}
      <Card.Img 
        variant="top" 
        src={imageUrl} 
        alt={name}
        style={imageStyle}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x400/cccccc/969696?text=Player+Image";
          e.target.alt = "Image not available";
        }}
      />
      
      {/* Player name in card header */}
      <Card.Header style={headerStyle}>
        <Card.Title style={{ color: '#2c3e50', margin: 0 }}>{name}</Card.Title>
      </Card.Header>
      
      {/* Player details in card body */}
      <Card.Body style={{ padding: '20px' }}>
        {/* Team information */}
        <div style={{ marginBottom: '10px' }}>
          <strong>Team:</strong> 
          <Badge bg="primary" style={badgeStyle} className="ms-2">
            {team}
          </Badge>
        </div>
        
        {/* Nationality information */}
        <div style={{ marginBottom: '10px' }}>
          <strong>Nationality:</strong> 
          <Badge bg="success" style={badgeStyle} className="ms-2">
            {nationality}
          </Badge>
        </div>
        
        {/* Jersey number information */}
        <div style={{ marginBottom: '10px' }}>
          <strong>Jersey Number:</strong> 
          <Badge bg="warning" text="dark" style={badgeStyle} className="ms-2">
            #{jerseyNumber}
          </Badge>
        </div>
        
        {/* Age information */}
        <div style={{ marginBottom: '10px' }}>
          <strong>Age:</strong> 
          <Badge bg="info" style={badgeStyle} className="ms-2">
            {age} years
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
};

// Default props for Player component
// These values will be used if props are not provided
Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/300x400/cccccc/969696?text=Player+Image"
};

// Export Player component as default
export default Player;