import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import layericon from "../../../assets/icon/MapboxSection/layer.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const ChangeBasemaps = ({ onStyleChange }) => {
  const [selectedStyle, setSelectedStyle] = useState(
    "mapbox://styles/amaliaarifahh/clw3im14102kh01qp24y8594p"
  );

  const handleStyleSelection = (style) => {
    console.log("Selected style:", style);
    setSelectedStyle(style);
    onStyleChange(style);
  };

  return (
    <DropdownButton
      id="dropdown-basemaps"
      title={
        <img src={layericon} alt="layer-icon" style={{ height: "1.5em" }} />
      }
      variant="light"
      size="sm"
    >
      <Dropdown.Item
        active={
          selectedStyle ===
          "mapbox://styles/amaliaarifahh/clw3im14102kh01qp24y8594p"
        }
        onClick={() =>
          handleStyleSelection(
            "mapbox://styles/amaliaarifahh/clw3im14102kh01qp24y8594p"
          )
        }
      >
        Default
      </Dropdown.Item>

      <Dropdown.Item
        active={selectedStyle === "mapbox://styles/mapbox/navigation-night-v1"}
        onClick={() =>
          handleStyleSelection("mapbox://styles/mapbox/navigation-night-v1")
        }
      >
        Dark Navigation
      </Dropdown.Item>
      <Dropdown.Item
        active={selectedStyle === "mapbox://styles/mapbox/navigation-day-v1"}
        onClick={() =>
          handleStyleSelection("mapbox://styles/mapbox/navigation-day-v1")
        }
      >
        Light Navigation
      </Dropdown.Item>
      <Dropdown.Item
        active={selectedStyle === "mapbox://styles/mapbox/light-v9"}
        onClick={() => handleStyleSelection("mapbox://styles/mapbox/light-v9")}
      >
        Light
      </Dropdown.Item>
      <Dropdown.Item
        active={selectedStyle === "mapbox://styles/mapbox/dark-v9"}
        onClick={() => handleStyleSelection("mapbox://styles/mapbox/dark-v9")}
      >
        Dark
      </Dropdown.Item>
      <Dropdown.Item
        active={selectedStyle === "mapbox://styles/mapbox/streets-v12"}
        onClick={() =>
          handleStyleSelection("mapbox://styles/mapbox/streets-v12")
        }
      >
        Streets
      </Dropdown.Item>
      <Dropdown.Item
        active={selectedStyle === "mapbox://styles/mapbox/satellite-v9"}
        onClick={() =>
          handleStyleSelection("mapbox://styles/mapbox/satellite-v9")
        }
      >
        Satellite
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default ChangeBasemaps;
