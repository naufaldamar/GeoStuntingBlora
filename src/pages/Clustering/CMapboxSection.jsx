import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Cmapboxsection.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW1hbGlhYXJpZmFoaCIsImEiOiJjbDNsOTlrcXYwaWQxM2lxYWt2ZmU4eGUyIn0.n3MrJgj9gN8li-IiQJOluA";

const MapboxSection = ({ selectedLayer }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/amaliaarifahh/clw7e1jsm02s301qp77pfclw1",
      center: [109.16, -7.08], //longitude: 109.1972, latitude: -6.9999,
      zoom: 9.3,
    });

    // Add navigation control
    map.current.addControl(new mapboxgl.FullscreenControl(), "top-left");

    // Add fullscreen control
    map.current.addControl(new mapboxgl.NavigationControl(), "top-left");

    map.current.on("load", () => {
      map.current.addSource("education", {
        type: "geojson",
        data: "/tegal-spatial/data/Pendidikan.geojson",
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      map.current.addSource("healthcare", {
        type: "geojson",
        data: "/tegal-spatial/data/Kesehatan.geojson",
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      map.current.addLayer({
        id: "clusters-education",
        type: "circle",
        source: "education",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": "#51bbd6",
          "circle-radius": [
            "step",
            ["get", "point_count"],
            15, // Default size
            10, // Step 1
            15, // Circle size for clusters with 10-19 points
            25, // Step 2
            25, // Circle size for clusters with 30-39 points
            30, // Step 3
            30, // Circle size for clusters with 50 or more points
          ],
        },
      });

      map.current.addLayer({
        id: "clusters-healthcare",
        type: "circle",
        source: "healthcare",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": "#f28cb1",
          "circle-radius": [
            "step",
            ["get", "point_count"],
            20, // Default size
            10, // Step 1
            30, // Circle size for clusters with 10-19 points
            30, // Step 2
            40, // Circle size for clusters with 30-39 points
            50, // Step 3
            50, // Circle size for clusters with 50 or more points
          ],
        },
      });

      map.current.addLayer({
        id: "cluster-count-education",
        type: "symbol",
        source: "education",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-size": 12,
        },
      });

      map.current.addLayer({
        id: "cluster-count-healthcare",
        type: "symbol",
        source: "healthcare",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-size": 12,
        },
      });

      // Initially hide all layers
      map.current.setLayoutProperty("clusters-education", "visibility", "none");
      map.current.setLayoutProperty(
        "cluster-count-education",
        "visibility",
        "none"
      );
      map.current.setLayoutProperty(
        "clusters-healthcare",
        "visibility",
        "none"
      );
      map.current.setLayoutProperty(
        "cluster-count-healthcare",
        "visibility",
        "none"
      );

      // Set the visibility of the selected layer
      if (selectedLayer === "education") {
        map.current.setLayoutProperty(
          "clusters-education",
          "visibility",
          "visible"
        );
        map.current.setLayoutProperty(
          "cluster-count-education",
          "visibility",
          "visible"
        );
      } else if (selectedLayer === "healthcare") {
        map.current.setLayoutProperty(
          "clusters-healthcare",
          "visibility",
          "visible"
        );
        map.current.setLayoutProperty(
          "cluster-count-healthcare",
          "visibility",
          "visible"
        );
      }
    });
  }, []);

  useEffect(() => {
    if (!map.current) return;

    // Wait until the map's style is fully loaded
    if (map.current.isStyleLoaded()) {
      const layers = [
        "clusters-education",
        "cluster-count-education",
        "clusters-healthcare",
        "cluster-count-healthcare",
      ];
      layers.forEach((layer) => {
        map.current.setLayoutProperty(layer, "visibility", "none");
      });
      if (selectedLayer === "education") {
        map.current.setLayoutProperty(
          "clusters-education",
          "visibility",
          "visible"
        );
        map.current.setLayoutProperty(
          "cluster-count-education",
          "visibility",
          "visible"
        );
      } else if (selectedLayer === "healthcare") {
        map.current.setLayoutProperty(
          "clusters-healthcare",
          "visibility",
          "visible"
        );
        map.current.setLayoutProperty(
          "cluster-count-healthcare",
          "visibility",
          "visible"
        );
      }
    } else {
      map.current.on("load", () => {
        const layers = [
          "clusters-education",
          "cluster-count-education",
          "clusters-healthcare",
          "cluster-count-healthcare",
        ];
        layers.forEach((layer) => {
          map.current.setLayoutProperty(layer, "visibility", "none");
        });
        if (selectedLayer === "education") {
          map.current.setLayoutProperty(
            "clusters-education",
            "visibility",
            "visible"
          );
          map.current.setLayoutProperty(
            "cluster-count-education",
            "visibility",
            "visible"
          );
        } else if (selectedLayer === "healthcare") {
          map.current.setLayoutProperty(
            "clusters-healthcare",
            "visibility",
            "visible"
          );
          map.current.setLayoutProperty(
            "cluster-count-healthcare",
            "visibility",
            "visible"
          );
        }
      });
    }
  }, [selectedLayer]);

  return <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />;
};

export default MapboxSection;
