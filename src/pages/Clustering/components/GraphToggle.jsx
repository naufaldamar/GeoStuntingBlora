import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

// STYLE
import "./graphtoggle.css";

const GraphToggle = ({ onChangeLayer }) => {
  const handleClick = (layerType) => {
    onChangeLayer(layerType);
  };

  return (
    <div>
      <ButtonGroup
        className="button-toggle shadow"
        aria-label="topic-navigation"
      >
        <Button
          variant="outline-success"
          onClick={() => handleClick("Pendidikan")}
        >
          Pendidikan
        </Button>
        <Button
          variant="outline-success"
          onClick={() => handleClick("Kesehatan")}
        >
          Kesehatan
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default GraphToggle;
