import React, { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
import KependudukanSection from "./components/KependudukanSection";
import Dropdown from "./components/dropdown";
import "./graphsection.css";

const GraphSection = ({
  demografiData,
  activeCounty,
  selectedCounty,
  activeLayer,
  onChangeLayer,
  onChangeCounty,
}) => {
  const [county, setCounty] = useState(selectedCounty || activeCounty);

  useEffect(() => {
    setCounty(selectedCounty || activeCounty);
  }, [selectedCounty, activeCounty]);

  // Mengambil daftar kecamatan dari properti "DESA ATAU KELURAHAN" dari demografiData
  const kecamatanOptions = demografiData?.features.map(
    (feature) => feature.properties["wadmkc"]
  );

  const handleCountyChange = (county) => {
    setCounty(county);
    onChangeCounty(county); // Panggil props.onChangeCounty
  };

  return (
    <div id="graph-view">
      <header>
        <div id="active-county">
          <label htmlFor="county-dropdown">Tahun 2023 di Kec:</label>
          <Dropdown
            id="county-dropdown"
            options={kecamatanOptions}
            selectedOption={county}
            onChange={handleCountyChange}
            className="custom-dropdown"
          />
        </div>
      </header>
      <div id="graph-container">
        <section className="topic-section" id="kependudukan-section">
          <KependudukanSection
            demografiData={demografiData}
            activeCounty={county} // Menggunakan nilai kecamatan yang dipilih
            activeLayer={activeLayer}
            onChangeLayer={onChangeLayer}
          />
        </section>
      </div>
    </div>
  );
};

export default GraphSection;
