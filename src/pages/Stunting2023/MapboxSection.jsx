import React, { useState, useEffect, useCallback, useRef } from "react";
import Map, {
  Source,
  Layer,
  Popup,
  FullscreenControl,
  NavigationControl,
} from "react-map-gl";
import ChangeBasemaps from "./components/ChangeBasemaps";
import ChangeDimension from "./components/ChangeDimension";
import ToggleSwitch from "./components/ToggleSwitch";

// || STYLE
import "./mapboxsection.css";

const MapboxSection = (props) => {
  //Akses Mapbox GL JS menggunakan Mapbox Token
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibmF1ZmFsZGFtYXJpbWFuIiwiYSI6ImNsc3ZheXM5cTJqNmMyanA3MGVrd2IyOWkifQ.bkzhrAeFaltqKtHP5CDW6g";

  //Referensi Map
  const mapRef = useRef();

  // Menyimpan state viewport
  const [viewport, setViewport] = useState({
    longitude: 111.454991, //109.1972, -6.9999
    latitude: -7.030281,
    pitch: 47,
    bearing: -5,
    zoom: 9.3,
  });

  // State Hover
  const [hoverCounty, setHoverCounty] = useState(null);
  // Callback saat melakukan hover pada peta
  const onHover = useCallback(
    (event) => {
      const county = event.features && event.features[0];
      setHoverCounty({
        longitude: event.lngLat.lng,
        latitude: event.lngLat.lat,
        countyName: county && county.properties["wadmkc"],
        countyProperties: county && county.properties,
      });
    },
    [setHoverCounty]
  );
  const selectedCounty = (hoverCounty && hoverCounty.countyName) || "";
  const filter = ["in", "wadmkc", selectedCounty];

  // Fungsi Pergantian Kecamatan
  const onClickCounty = (event) => {
    if (event.features && event.features.length > 0) {
      const clickedCounty = event.features && event.features[0];
      const countyName = clickedCounty.properties["wadmkc"];
      props.onChangeCounty(countyName);
    }
  };

  // Fungsi Kalkulasi Min-Max
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    if (props.demografiData) {
      let min = Number.MAX_VALUE;
      let max = Number.MIN_VALUE;
      props.demografiData.features.forEach((feature) => {
        const value = feature.properties[props.activeLayer];
        if (value < min) {
          min = value;
        }
        if (value > max) {
          max = value;
        }
      });

      setMinValue(min);
      setMaxValue(max);
    }
  }, [props.demografiData, props.activeLayer]);

  // Style halaman Mapbox GL JS dengan initial value style navigasi malam
  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/naufaldamariman/cm82ii80e00wr01s5736jcy8z"
  );

  //Fungsi mengubah basemap
  const handleStyleChange = (style) => {
    console.log("Style changed to:", style);
    setMapStyle(style);
  };

  //Dimensi Layer
  const [mapDimension, setMapDimension] = useState("3D");

  const handleDimensionChange = (dimension) => {
    setMapDimension(dimension);
  };

  const onFlyFunction = useCallback((location) => {
    mapRef.current?.flyTo({
      center: [location.longitude, location.latitude],
      bearing: location.bearing,
      zoom: location.zoom,
      pitch: location.pitch,
      duration: location.duration,
    });
  }, []);

  // Style Layer

  const twoDimensionStyle = {
    id: "demografi-layer",
    type: "fill",
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", props.activeLayer],
        minValue,
        "#a0fef6",
        maxValue,
        "#3f359c",
      ],
      "fill-outline-color": "#1e1e1e",
      "fill-opacity": props.inTransition ? 0 : 1,
    },
  };

  const hover2DStyle = {
    id: "demografi-hover-2D",
    type: "fill",
    paint: {
      "fill-color": "white",
      "fill-outline-color": "#1e1e1e",
      "fill-opacity": props.inTransition ? 0 : 1,
    },
  };

  const threeDimensionStyle = {
    id: "demografi-layer",
    type: "fill-extrusion",
    paint: {
      "fill-extrusion-color": [
        "interpolate",
        ["linear"],
        ["get", props.activeLayer],
        minValue,
        "#a0fef6",
        maxValue,
        "#3f359c",
      ],
      "fill-extrusion-height": [
        "interpolate",
        ["linear"],
        ["get", props.activeLayer],
        minValue,
        100,
        maxValue,
        5000,
      ],
      "fill-extrusion-base": 0,
      "fill-extrusion-opacity": props.inTransition ? 0 : 1,
    },
  };

  const hover3DStyle = {
    id: "demografi-hover-3D",
    type: "fill-extrusion",
    paint: {
      "fill-extrusion-color": "white",
      "fill-extrusion-height": [
        "interpolate",
        ["linear"],
        ["get", props.activeLayer],
        minValue,
        100,
        maxValue,
        5000,
      ],
      "fill-extrusion-base": 0,
      "fill-extrusion-opacity": props.inTransition ? 0 : 1,
    },
  };

  const labelStyle = {
    id: "county-label",
    type: "symbol",
    layout: {
      "text-field": ["get", "wadmkc"],
      "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
      "text-size": 9,
    },
    paint: {
      "text-color": "#202",
      "text-halo-color": "#fff",
      "text-halo-width": 1.5,
    },
  };

  const [showLabels, setShowLabels] = useState(true);

  const handleToggleLabels = () => {
    setShowLabels((prevState) => !prevState);
  };

  if (!props.demografiData) {
    return <div>Loading...</div>; // Add a loading state or error message
  }

  if (!props.demografiData.features[0].properties[props.activeLayer]) {
    return <div>Layer data is not available</div>; // Add a fallback UI if layer data is not available
  }

  return (
    <div id="mapbox-view">
      <Map
        initialViewState={viewport}
        ref={mapRef}
        onMove={(event) => setViewport(event.viewState)}
        mapStyle={mapStyle}
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={["demografi-layer"]}
        onMouseMove={onHover}
        onClick={onClickCounty}
        maxPitch={60}
      >
        {!mapDimension === "3D" && (
          <Source
            id="layer-demografi"
            type="geojson"
            data={props.demografiData}
          >
            <Layer {...threeDimensionStyle} />
            <Layer {...hover3DStyle} filter={filter} />
            {showLabels && <Layer {...labelStyle} />}
          </Source>
        )}

        {mapDimension === "2D" && (
          <>
            <Source
              id="layer-demografi"
              type="geojson"
              data={props.demografiData}
            >
              <Layer {...twoDimensionStyle} />
              <Layer {...hover2DStyle} filter={filter} />
              {showLabels && <Layer {...labelStyle} />}
            </Source>
          </>
        )}

        {mapDimension === "3D" && (
          <>
            <Source
              id="layer-demografi"
              type="geojson"
              data={props.demografiData}
            >
              <Layer {...threeDimensionStyle} />
              <Layer {...hover3DStyle} filter={filter} />
              {showLabels && <Layer {...labelStyle} />}
            </Source>
          </>
        )}

        {selectedCounty && (
          <Popup
            longitude={hoverCounty.longitude}
            latitude={hoverCounty.latitude}
            offset={[0, -10]}
            closeButton={false}
            className="county-info"
          >
            <h4>{selectedCounty}</h4>
            <p>
              {props.activeLayer} :{" "}
              {hoverCounty.countyProperties[props.activeLayer]}
            </p>
          </Popup>
        )}

        <div className="mapbox-control">
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
        </div>
        <div className="custom-control">
          <ChangeBasemaps onStyleChange={handleStyleChange} />
          <ChangeDimension
            mapDimension={mapDimension}
            onFlyFunction={onFlyFunction}
            onDimensionChange={handleDimensionChange}
          />
          <div className="toggle-switch">
            <ToggleSwitch
              label="Label"
              isChecked={showLabels}
              onToggle={handleToggleLabels}
            />
          </div>
        </div>
      </Map>
    </div>
  );
};

export default MapboxSection;
