import React, { useRef, useState } from "react";
import { Marker, Map as ReactMapGL } from "react-map-gl";
import useSupercluster from "use-supercluster";
import pendidikanData from "/tegal-spatial/data/Pendidikan.geojson";

const AnalisisClustering = ({ mapboxAccessToken }) => {
  const mapRef = useRef();
  const [viewport, setViewport] = useState({
    latitude: -6.9999,
    longitude: 109.1402,
    width: "100%",
    height: "100vh",
    zoom: 9,
  });

  const points = pendidikanData.features.map((feature) => ({
    type: "Feature",
    properties: { cluster: false, ...feature.properties },
    geometry: { type: "Point", coordinates: feature.geometry.coordinates },
  }));

  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  const { clusters } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 40, maxZoom: 20 },
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapboxAccessToken}
      onViewportChange={(newViewport) => setViewport(newViewport)}
      ref={mapRef}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      {clusters.map((cluster) => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const { cluster: isCluster, point_count: pointCount } =
          cluster.properties;

        return (
          <Marker key={cluster.id} latitude={latitude} longitude={longitude}>
            <div
              style={{
                width: `${10 + (pointCount / points.length) * 40}px`,
                height: `${10 + (pointCount / points.length) * 40}px`,
                backgroundColor: "#f28a25",
                color: "#fff",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {pointCount}
            </div>
          </Marker>
        );
      })}
    </ReactMapGL>
  );
};

export default AnalisisClustering;
