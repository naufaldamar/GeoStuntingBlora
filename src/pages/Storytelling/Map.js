import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Hardcode Mapbox token
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibmF1ZmFsZGFtYXJpbWFuIiwiYSI6ImNsc3ZheXM5cTJqNmMyanA3MGVrd2IyOWkifQ.bkzhrAeFaltqKtHP5CDW6g";

const Map = ({ coordinates, style }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!MAPBOX_ACCESS_TOKEN) {
      console.error("Mapbox access token is required");
      return;
    }

    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: style,
      center: coordinates,
      zoom: 12,
    });

    return () => map.remove();
  }, [coordinates, style]);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
  );
};

export default Map;
