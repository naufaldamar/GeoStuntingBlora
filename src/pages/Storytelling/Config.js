const config = {
  accessToken:
    "pk.eyJ1IjoibmF1ZmFsZGFtYXJpbWFuIiwiYSI6ImNsc3ZheXM5cTJqNmMyanA3MGVrd2IyOWkifQ.bkzhrAeFaltqKtHP5CDW6g",
    
  theme: "light",
  use3dTerrain: false,
  auto: false,
  chapters: [
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      style: "mapbox://styles/naufaldamariman/cm7ulm4w800e801scgbs9cuyr",
      description: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            fontSize: "14px",
            color: "#27374D",
          }}
        >
          <b>Kabupaten Blora</b> merupakan salah satu wilayah yang berada di perbatasan
          antara Jawa Timur dan Jawa Tengah  dimana <b>Luas Kab.Blora 1820,59 Km2.</b>
          Kab.Blora terbagi menjadi 16 Kecamatan dan 295 Desa/Kelurahan dimana kecamatan
          terpadat berada di kecamatan Blora Dan Cepu. pertumbuhan penduduk juga meningkat 1%
          per-tahunnya yang mencatatkan kenaikan ini menjadikan kepadatan penduduk mencapai 506,14 
          jiwa per km² pada tahun 2023 selain itu juga dari total <b>populasi penduduk kabupaten Blora 
          6% dari total penduduk merupakan Balita</b>. 
          
        </div>
      ),
      location: {
        center: [111.393451, -7.061907],
        zoom: 9.5,
        pitch: 37.50,
        bearing: 6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "demografi-layer",
          opacity: 0,
          duration: 5000,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "second-identifier",
      alignment: "right",
      hidden: false,
      style: "mapbox://styles/naufaldamariman/cm816zf8j00zi01s8bl8g5faf",
      title: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            color: "#27374D",
            textAlign: "left",
            fontSize: "10px",
          }}
        >
          <h2>Penduduk Kab.Blora</h2>
        </div>
      ),
      description: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            fontSize: "14px",
            color: "#27374D",
          }}
        >
          Perkembangan Sumber Daya Manusia merupakan satu hal yang penting dalam 
          suatu rencana pembangunan jangka panjang, Dimana mencakup tiga aspek yang penting yaitu kualitas, 
          kuantitas dan mobilitas. perhatian khusus tersebut tertuju pada penduduk usia 0 sampai 4 tahun (balita) 
          atau usia 1000 hari pertama. Penduduk Kab.Blora terlihat pada 3DMap di samping dimana beberapa kecamatan 
          yang mempunyai balita yang perlu di perhatian Khusus agar tidak terjadinya gizi buruk pada masa anak - anak
        </div>
      ),
      location: {
        center: [111.659394, -7.050260],
        zoom: 9.4,
        pitch: 37.50,
        bearing: 6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "third-identifier",
      alignment: "left",
      hidden: false,
      style: "mapbox://styles/naufaldamariman/cm817q41500v601s55gjj435l",
      title: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            color: "#27374D",
            textAlign: "left",
            fontSize: "10px",
          }}
        >
          <h2>Gambaran Umum Stunting Kab.Blora</h2>
        </div>
      ),
      description: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            fontSize: "14px",
            color: "#27374D",
          }}
        >
          Kabupaten Blora merupakan salah satu kabupaten yang ada di Jawa tengah yang memiliki 
          kasus stunting yang cukup banyak di Jawa tengah menurut penilaian <b>Studi Status Gizi Indonesia (SSGI)</b>{" "}pada tahun 2021 kasus 
          stunting mencapai <b>21,5%</b>{" "} namun pada tahun 2023 malah kasus stunting ini malah 
          meningkat menjadi <b>25,8%</b>{" "} ini merupakan masalah yang serius karena stunting dapat menyebabkan pengaruh untuk suatu pengembangan Sumber Daya Manusia 
          yang berjangka panjang.
        </div>
      ),
      location: {
        center: [111.115205, -7.085290],
        zoom: 9.3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: "fourth-chapter",
      alignment: "right",
      hidden: false,
      style: "mapbox://styles/naufaldamariman/cm7u8suu5018j01s2bkcre9xi",
      title: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            color: "#27374D",
            textAlign: "left",
            fontSize: "10px",
          }}
        >
          <h2>Trend Stunting Kab.Blora</h2>
        </div>
      ),
      description: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            fontSize: "14px",
            color: "#27374D",
          }}
        >
          Dari data yang telah dikumpulkan oleh peneliti dimana Data Stunting ini memiliki rentang 3 tahun 
          yaitu pada rentang 2021-2023 dari situ dapat dilakukan analisis trend stunting di Kabupaten Blora.
          dimana pengelompokan trend stunting ini dapat dibagi menjadi 4 trend dengan di tandai warna yaitu trend Stable "Kuning", trend Decreasing "Hijau", 
          trend Increasing "Merah" dan trend  Fluctuating "Abu-abu"
        </div>
      ),
      location: {
        center: [111.659394, -7.050260],
        zoom: 9.4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: "fiveth-chapter",
      alignment: "fully",
      hidden: false,
      style: "mapbox://styles/naufaldamariman/cm84ngmrh003k01qzb1ep3tu4",
      title: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            color: "#27374D",
            textAlign: "left",
            fontSize: "10px",
          }}
        >
          <h2>Fitur GeoStunting</h2>
        </div>
      ),
      description: (
        <div
          style={{
            padding: "1px",
            margin: "0px",
            fontSize: "14px",
            color: "#27374D",
          }}
        >
          <b> GeoStunting </b> memiliki fitur utama <b>Visualisasi 3D</b> yang
          menampilkan Data Stunting, data sanitasi dan demografi. Selain itu, WebGIS ini
          mempunyai fitur tambahan berupa{" "}
          <b>
            <i>StoryTelling</i>
          </b>
          , yaitu penjelasan singkat terkait apa tema yang di angkat dan di jadikan WebGIS
          di Kabupaten Blora. WebGIS juga dilengkapi dengan fitur{" "}
          <b>
            <i>compare maps</i>
          </b>{" "}
          untuk menyajikanan analisis agregasi suatu proses mengelompokkan atau merangkum data spasial berdasarkan 
          suatu karakteristik tertentu. Agregasi dapat digunakan untuk menganalisis pola, 
          mengurangi kompleksitas data, atau menyajikan informasi dalam skala yang lebih besar..
        </div>
        
      ),
      location: {
        center: [109.1972, -6.9999],
        zoom: 7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};

export default config;
