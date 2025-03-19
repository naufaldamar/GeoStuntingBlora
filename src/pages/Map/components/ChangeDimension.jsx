import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const ChangeDimension = ({
  mapDimension,
  onDimensionChange,
  onFlyFunction,
}) => {
  const handleDimensionSelection = (dimension) => {
    if (dimension === "2D") {
      const location = {
        longitude: 109.15,
        latitude: -7.085,
        pitch: 0,
        bearing: 0,
        zoom: 9.3,
        duration: 2000,
      };
      onDimensionChange(dimension);
      onFlyFunction(location);
    } else {
      const location = {
        longitude: 109.15,
        latitude: -7.12,
        pitch: 47,
        bearing: -5,
        zoom: 9.3,
        duration: 2000,
      };
      onDimensionChange(dimension);
      onFlyFunction(location);
    }
  };

  return (
    <DropdownButton
      id="dropdown-basemaps"
      title={mapDimension === "3D" ? "3D" : "2D"}
      variant="light"
      size="sm"
    >
      <Dropdown.Item
        active={mapDimension === "2D"}
        onClick={() => handleDimensionSelection("2D")}
      >
        2D
      </Dropdown.Item>
      <Dropdown.Item
        active={mapDimension === "3D"}
        onClick={() => handleDimensionSelection("3D")}
      >
        3D
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default ChangeDimension;
