import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import mapboxgl from "mapbox-gl";

const Title = () => {
  useEffect(() => {
    // Initialize map
    mapboxgl.accessToken =
      "pk.eyJ1IjoibmF1ZmFsZGFtYXJpbWFuIiwiYSI6ImNsc3ZheXM5cTJqNmMyanA3MGVrd2IyOWkifQ.bkzhrAeFaltqKtHP5CDW6g";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/naufaldamariman/cm7ulm4w800e801scgbs9cuyr",
      center: [111.393451, -7.061907], //-7.000699868676796, 109.18485103626864
      zoom: 9.5,
        pitch: 37.50,
        bearing: 6,
    });

    return () => map.remove();
  }, []);

  return (
    <div>
      <section className="title">
        <div id="map"></div>
        <div id="hero-section">
          <h1>
            WebGIS Persebaran Stunting Anak
            <br />Kabupaten Blora
          </h1>
          <p>
          Visualisasi data stunting dan faktor-faktor yang mendukung penanggulangan kasus stunting
            <br />
            melalui 3D Maps & Dashboard interaktif berbasis WebGIS{" "}
          </p>
          <div id="button-cta">
            <Button className="button-mulai" href="#StoryTelling">
              Next
            </Button>
            <Button className="button-about" href="#About">
            About
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Title;
