// import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function GridExample({ recette }) {
  const [showInstructions, setShowInstructions] = useState(false);

  const handleClick = () => {
    setShowInstructions(!showInstructions);
  };

  const renderInstructions = () => {
    const instructions = recette.strInstructions.split('. '); // Diviser les instructions en phrases

    return instructions.map((instruction, index) => (
      <p key={index}>{instruction}</p> // Créer un élément <p> pour chaque phrase
    ));
  };

  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={recette.strMealThumb} />
          <Card.Body>
            <Card.Title>
              <h4>{recette.strMeal}</h4>
            </Card.Title>
            <Card.Title>
              <h5>{recette.strArea}</h5>
            </Card.Title>
            <Card.Text>
              {showInstructions
                ? renderInstructions() // Appeler la fonction renderInstructions pour afficher les phrases avec un retour à la ligne
                : `${recette.strInstructions.slice(0, 100)}...`}
            </Card.Text>
            <button className="btn-card" onClick={handleClick}>
              {showInstructions ? "Cacher" : "Afficher"} les instructions
            </button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default GridExample;
