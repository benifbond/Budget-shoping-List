import React from "react";
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

function HomePage() {
  return (
   
    <div bg-color="red">
    {[
      
      'Success',
      
    ].map((variant) => (
      <Card
        bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '50rem' }}
        className="mb-2"
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>{variant} Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    ))}
  </div>
  )
}

export default HomePage
