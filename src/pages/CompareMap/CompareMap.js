import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import mapboxglCompare from "mapbox-gl-compare";
import NavigationBar from "../../components/NavigationBar";
import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl-compare/dist/mapbox-gl-compare.css";

import Bayi21Icon from "../../assets/icon/stunting/21b.png";
import Bayi22Icon from "../../assets/icon/stunting/22b.png";
import Bayi23Icon from "../../assets/icon/stunting/23b.png";
import Stunting21Icon from "../../assets/icon/stunting/21st.png";
import Stunting22Icon from "../../assets/icon/stunting/22st.png";
import Stunting23Icon from "../../assets/icon/stunting/23st.png";
import TrendStuntingIcon from "../../assets/icon/stunting/trd.png";
import DesaStunting21Icon from "../../assets/icon/stunting/des21.png";
import DesaStunting22Icon from "../../assets/icon/stunting/des22.png";
import DesaStunting23Icon from "../../assets/icon/stunting/des23.png";
import DesaStuntingTrendIcon from "../../assets/icon/stunting/trd.png";

mapboxgl.Compare = mapboxglCompare;

const mapStyles = [
  { name: "Bayi 2021", url: "mapbox://styles/naufaldamariman/cm84n9y0x003m01qrhbkb8qwv", legend: Bayi21Icon },
  { name: "Bayi 2022", url: "mapbox://styles/naufaldamariman/cm84ne51a000y01s8hqa02hfh", legend: Bayi22Icon },
  { name: "Bayi 2023", url: "mapbox://styles/naufaldamariman/cm84ngmrh003k01qzb1ep3tu4", legend: Bayi23Icon },
  { name: "Stunting 2021", url: "mapbox://styles/naufaldamariman/cm817q41500v601s55gjj435l", legend: Stunting21Icon },
  { name: "Stunting 2022", url: "mapbox://styles/naufaldamariman/cm7uhl64800g301qudzrfg5iv", legend: Stunting22Icon },
  { name: "Stunting 2023", url: "mapbox://styles/naufaldamariman/cm7ubhbyf018s01s26m4bbrah", legend: Stunting23Icon },
  { name: "Trend Stunting", url: "mapbox://styles/naufaldamariman/cm7u8suu5018j01s2bkcre9xi", legend: TrendStuntingIcon },
  { name: "Desa Stunting 2021", url: "mapbox://styles/naufaldamariman/cm84mhbl7003m01sah30vec9w", legend: DesaStunting21Icon },
  { name: "Desa Stunting 2022", url: "mapbox://styles/naufaldamariman/cm84mu2s9003i01qr6ckz7tbh", legend: DesaStunting22Icon },
  { name: "Desa Stunting 2023", url: "mapbox://styles/naufaldamariman/cm84n2rg0004401s3gidz61y5", legend: DesaStunting23Icon },
  { name: "Desa Stunting Trend", url: "mapbox://styles/naufaldamariman/cm84n54y3003j01si8x45eir1", legend: DesaStuntingTrendIcon },
];

const MapboxExample = () => {
  const mapRef = useRef();
  const beforeMapRef = useRef();
  const afterMapRef = useRef();
  const beforeMapContainerRef = useRef();
  const afterMapContainerRef = useRef();
  const comparisonContainerRef = useRef();

  const [beforeStyle, setBeforeStyle] = useState(mapStyles[0].url);
  const [afterStyle, setAfterStyle] = useState(mapStyles[1].url);

  useEffect(() => {
    if (mapRef.current) return;

    mapboxgl.accessToken = "pk.eyJ1IjoibmF1ZmFsZGFtYXJpbWFuIiwiYSI6ImNsc3ZheXM5cTJqNmMyanA3MGVrd2IyOWkifQ.bkzhrAeFaltqKtHP5CDW6g";

    beforeMapRef.current = new mapboxgl.Map({
      container: beforeMapContainerRef.current,
      style: beforeStyle,
      center: [111.461259, -7.100609],
      zoom: 9.5,
    });

    afterMapRef.current = new mapboxgl.Map({
      container: afterMapContainerRef.current,
      style: afterStyle,
      center: [111.461259, -7.100609],
      zoom: 9.5,
    });

    mapRef.current = new mapboxgl.Compare(beforeMapRef.current, afterMapRef.current, comparisonContainerRef.current);
  }, []);

  useEffect(() => {
    if (beforeMapRef.current) {
      beforeMapRef.current.setStyle(beforeStyle);
    }
  }, [beforeStyle]);

  useEffect(() => {
    if (afterMapRef.current) {
      afterMapRef.current.setStyle(afterStyle);
    }
  }, [afterStyle]);

  return (
    <div>
      <NavigationBar />

      <div style={{ marginTop: "90px", textAlign: "center" }}>
        <h2>Pilih Compare Peta</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
          <select onChange={(e) => setBeforeStyle(e.target.value)} value={beforeStyle}>
            {mapStyles.map((style, index) => (
              <option key={index} value={style.url}>
                {style.name}
              </option>
            ))}
          </select>
          <select onChange={(e) => setAfterStyle(e.target.value)} value={afterStyle}>
            {mapStyles.map((style, index) => (
              <option key={index} value={style.url}>
                {style.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div
        id="comparison-container"
        ref={comparisonContainerRef}
        style={{ height: "400px", width: "70%", position: "relative", margin: "0 auto" }}
      >
        <div id="before" ref={beforeMapContainerRef} style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}></div>
        <div id="after" ref={afterMapContainerRef} style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}></div>
      </div>

      {/* Legenda Peta Kiri */}
      <div className="legend left">
        <img src={mapStyles.find((style) => style.url === beforeStyle)?.legend} alt="Legenda Peta Kiri" />
      </div>

      {/* Legenda Peta Kanan */}
      <div className="legend right">
        <img src={mapStyles.find((style) => style.url === afterStyle)?.legend} alt="Legenda Peta Kanan" />
      </div>

      <style>
        {`
          .legend {
            position: absolute;
            bottom: 10px;
            background: white;
            padding: 5px;
            border-radius: 5px;
            width: 150px;
          }
          .legend.left {
            left: 10px;
          }
          .legend.right {
            right: 10px;
          }
          .legend img {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default MapboxExample;
