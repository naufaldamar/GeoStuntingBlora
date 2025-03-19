import React, { useCallback, useEffect, useState, useRef } from "react";
import { Col } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import MapboxSection from "./MapboxSection";
import GraphSection from "./GraphSection";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";

import "./Map.css";

// || DATA
import demografi from "../../data/stunting22.geojson";

const Map = () => {
  const [demografiData, setDemografiData] = useState(null);
  const [activeLayer, setActiveLayer] = useState("stunting");
  const [activeCounty, setActiveCounty] = useState("Blora");
  const [inTransition, setInTransition] = useState(false);

  const mapboxSectionRef = useRef(null);
  const graphSectionRef = useRef(null);

  // Fetch Demografi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const demo_response = await fetch(demografi);
        const demo_data = await demo_response.json();
        setDemografiData(demo_data);
        // console.log("data demografi:", demo_data);
        const initialCounty = demo_data.features[104].properties["wadmkc"];
        setActiveCounty(initialCounty);
      } catch (error) {
        console.error("Gagal mengambil data Demografi GeoJSON :", error);
      }
    };
    fetchData();
  }, []);

  // Shepherd Tour
  useEffect(() => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: "shepherd-theme-custom",
        scrollTo: { behavior: "smooth", block: "center" },
        useModalOverlay: true,
      },
    });

    setTimeout(() => {
      tour.start();
    }, 500); // Delay to ensure elements are in the DOM

    return () => {
      tour.cancel();
    };
  }, []);

  // Fungsi Pergantian Field Layer
  const onChangeLayer = useCallback(
    (selectedLayer) => {
      setInTransition(true);
      setTimeout(() => {
        setActiveLayer(selectedLayer);
      }, 500);
      setTimeout(() => {
        setInTransition(false);
      }, 500);
    },
    [setInTransition, setActiveLayer]
  );

  // Fungsi untuk Memperbaharui Poligon Kelurahan Aktif
  const onChangeCounty = useCallback(
    (selectedCounty) => {
      setActiveCounty(selectedCounty);
    },
    [setActiveCounty]
  );

  return (
    <div>
      <NavigationBar id="navigation-bar" />
      <section className="map-page" id="map-page">
        <Col xs={12} lg={8} id="mapbox-section" ref={mapboxSectionRef}>
          <div>
            <MapboxSection
              demografiData={demografiData}
              activeLayer={activeLayer}
              activeCounty={activeCounty}
              onChangeCounty={onChangeCounty}
              onChangeLayer={onChangeLayer}
              inTransition={inTransition}
              selectedCounty={activeCounty}
            />
          </div>
        </Col>
        <Col xs={12} lg={8} id="graph-section" ref={graphSectionRef}>
          <div>
            <GraphSection
              demografiData={demografiData}
              activeCounty={activeCounty}
              activeLayer={activeLayer}
              onChangeLayer={onChangeLayer}
              onChangeCounty={onChangeCounty}
            />
          </div>
        </Col>
      </section>
    </div>
  );
};

export default Map;
