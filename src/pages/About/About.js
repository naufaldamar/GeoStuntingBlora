import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <NavigationBar />
      <section className="about" id="about">
        <div className="about-container">
          <h1>Tentang GeoStunting</h1>
          <p>
            <b>WebGIS GeoStunting</b> dirancang sebagai platform untuk
            menyediakan informasi anak stanting pada kecamatan blora berbasis
            secara spasial. Data kependudukan sangat penting untuk perencanaan
            pembangunan berkelanjutan, termasuk dalam bidang pendidikan serta
            kesehatan. Informasi Data Stunting, sanitasi dan kependudukan
            masih terbatas pada format tabular sehingga belum dapat dilakukan
            analisis keruangan. Aplikasi ini memudahkan dalam melakukan analisis
            keruangan menggunakan Sistem Informasi Geografis (SIG). Melalui
            penelitian ini, diharapkan dapat meningkatkan pemahaman dan
            komunikasi visual pembaca mengenai informasi kasus stunting dan kependudukan di
            Kabupaten Blora.
          </p>
          <p>
            Data Stunting dan kependudukan yang digunakan dalam penelitian ini
            bersumber dari{" "}
            <b>Dinas Kesehatan, DINDALDUKKB, Dinas Kependudukan dan Pencatatan Sipil, BAPPEDA, dalam rentang tahun 2021 - 2023</b>.
            Data tersebut antara lain Data Stunting, Data Demografi, Sanitasi, 
            Data, dan Data Penanganan Stunting pada Ibu Hamil dan Anak Stunting.
            Selain itu terdapat 
            Kabupaten Blora bersumber dari publikasi{" "}
            <b>Badan Pusat Statistik</b> yaitu Kabupaten Blora dalam Angka Tahun 2021 - 
            2023. Data spasial batas administrasi wilayah kecamatan Kabupaten
            Blora bersumber dari
            inageoportal milik Badan Informasi Geospasial.
          </p>
          <p>
            WebGIS dibangun menggunakan framework <b>React JS</b> dan library{" "}
            <b>Mapbox GL JS</b> dengan tambahan dari mapboxgl Compare
            sebagai pembuat Compare pada maps.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
