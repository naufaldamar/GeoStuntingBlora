import React, { useCallback, useEffect, useRef, useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import Dropdown from "./components/dropdown";
import KesehatanSection from "./components/KesehatanSection";
import "./Cgraphsection.css";

const GraphSection = ({
  demografiData,
  selectedLayer,
  onToggle,
  activeCounty,
  onChangeLayer,
}) => {
  const [selectedCounty, setSelectedCounty] = useState(
    activeCounty || demografiData?.features[0]?.properties["WADMKC"] || ""
  );

  const kesehatanSectionRef = useRef(null);

  const handleCountyChange = (county) => {
    setSelectedCounty(county);
  };

  const handleToggle = (layer) => {
    onToggle(layer);
    if (layer === "education") {
      kesehatanSectionRef.current.scrollToPendidikan();
    } else if (layer === "healthcare") {
      kesehatanSectionRef.current.scrollToKesehatan();
    }
  };

  // Mengambil daftar kecamatan dari properti "KECAMATAN" dari demografiData
  const kecamatanOptions = demografiData?.features.map(
    (feature) => feature.properties["WADMKC"]
  );

  return (
    <div id="graph-view">
      <header>
        <div>
          <ButtonGroup
            className="button-toggle shadow"
            aria-label="topic-navigation"
          >
            <Button
              onClick={() => handleToggle("education")}
              className={selectedLayer === "education" ? "active" : ""}
            >
              Pendidikan
            </Button>
            <Button
              onClick={() => handleToggle("healthcare")}
              className={selectedLayer === "healthcare" ? "active" : ""}
            >
              Kesehatan
            </Button>
          </ButtonGroup>
        </div>
        <div id="active-county">
          <label htmlFor="county-dropdown">Kecamatan:</label>
          <Dropdown
            id="county-dropdown"
            options={kecamatanOptions}
            selectedOption={selectedCounty}
            onChange={handleCountyChange}
            className="custom-dropdown"
          />
        </div>
      </header>
      <div id="graph-container">
        <section className="topic-section" id="kesehatan-section">
          <KesehatanSection
            ref={kesehatanSectionRef}
            demografiData={demografiData}
            activeCounty={selectedCounty}
            onChangeLayer={onChangeLayer}
          />
        </section>
      </div>
    </div>
  );
};

export default GraphSection;
