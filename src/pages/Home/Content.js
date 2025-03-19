import ContentData from "../../pages/Home/ContentData";
import Map from "../../assets/image/map1.png";
import Dashboard from "../../assets/image/dashboard.png";

function Content() {
  return (
    <div>
      <section className="content" id="content">
        <h1> Fitur </h1>
        <div className="content-data">
          <ContentData
            image={Map}
            heading="Map"
            text="Page ini menampilkan sebuah 3D Map tentang kejadian stunting di kabupaten Blora dengan menarik "
          />
          <ContentData
            image={Dashboard}
            heading="Dashboard"
            text="Page ini menampilkan sebuah 3D Map tentang kejadian stunting di kabupaten Blora dengan menarik"
          />
        </div>
      </section>
    </div>
  );
}

export default Content;
