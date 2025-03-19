import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import TopicItem from "./TopicItem";
import "./topicsection.css";

const KesehatanSection = forwardRef(({ demografiData, activeCounty }, ref) => {
  const [pendidikan, setPendidikan] = useState(null);
  const [kesehatan, setKesehatan] = useState(null);

  const pendidikanRef = useRef(null);
  const kesehatanRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollToPendidikan: () => {
      pendidikanRef.current.scrollIntoView({ behavior: "smooth" });
    },
    scrollToKesehatan: () => {
      kesehatanRef.current.scrollIntoView({ behavior: "smooth" });
    },
  }));

  useEffect(() => {
    if (demografiData) {
      const grafikData = demografiData.features.find(
        (p) => p.properties["WADMKC"] === activeCounty
      );

      if (grafikData) {
        const {
          "Taman Kanak-Kanak (TK)": jml_TK,
          "Raudhatul Athfal (RA)": jml_RA,
          "Sekolah Dasar (SD)": jml_SD,
          "Madrasah Ibtidaiyah (MI)": jml_MI,
          "Sekolah Menengah Pertama (SMP)": jml_SMP,
          "Madrasah Tsanawiyah (MTs)": jml_MTS,
          "Sekolah Menengah Atas (SMA)": jml_SMA,
          "Sekolah Menengah Kejuruan (SMK)": jml_SMK,
          "Madrasah Aliyah (MA)": jml_MA,

          "Rumah Sakit": jml_rs,
          Poliklinik: jml_poli,
          Puskesmas: jml_puskesmas,
          "Puskesmas Pembantu": jml_puspem,
          Apotek: jml_apotek,
        } = grafikData.properties;

        const pendidikan = [
          jml_TK,
          jml_RA,
          jml_SD,
          jml_MI,
          jml_SMP,
          jml_MTS,
          jml_SMA,
          jml_SMK,
          jml_MA,
        ];
        const kesehatan = [
          jml_rs,
          jml_poli,
          jml_puskesmas,
          jml_puspem,
          jml_apotek,
        ];

        setPendidikan(pendidikan);
        setKesehatan(kesehatan);
      }
    }
  }, [demografiData, activeCounty]);

  return (
    <div>
      <section className="topic-container">
        <div className="pendidikan-kolom" ref={pendidikanRef}>
          <h2>Jumlah Fasilitas Pendidikan</h2>
          <TopicItem
            topicText={"Taman Kanak-Kanak (TK)"}
            data={pendidikan && pendidikan[0]}
            label={"titik"}
            layer={"Taman Kanak-Kanak (TK)"}
          />
          <TopicItem
            topicText={"Raudhatul Athfal (RA)"}
            data={pendidikan && pendidikan[1]}
            label={"titik"}
            layer={"Raudhatul Athfal (RA)"}
          />
          <TopicItem
            topicText={"Sekolah Dasar (SD)"}
            data={pendidikan && pendidikan[2]}
            label={"titik"}
            layer={"Sekolah Dasar (SD)"}
          />
          <TopicItem
            topicText={"Madrasah Ibtidaiyah (MI)"}
            data={pendidikan && pendidikan[3]}
            label={"titik"}
            layer={"Madrasah Ibtidaiyah (MI)"}
          />
          <TopicItem
            topicText={"Sekolah Menengah Pertama (SMP)"}
            data={pendidikan && pendidikan[4]}
            label={"titik"}
            layer={"Sekolah Menengah Pertama (SMP)"}
          />
          <TopicItem
            topicText={"Madrasah Tsanawiyah (MTs)"}
            data={pendidikan && pendidikan[5]}
            label={"titik"}
            layer={"Madrasah Tsanawiyah (MTs)"}
          />
          <TopicItem
            topicText={"Sekolah Menengah Atas (SMA)"}
            data={pendidikan && pendidikan[6]}
            label={"titik"}
            layer={"Sekolah Menengah Atas (SMA)"}
          />
          <TopicItem
            topicText={"Sekolah Menengah Kejuruan (SMK)"}
            data={pendidikan && pendidikan[7]}
            label={"titik"}
            layer={"Sekolah Menengah Kejuruan (SMK)"}
          />
          <TopicItem
            topicText={"Madrasah Aliyah (MA)"}
            data={pendidikan && pendidikan[8]}
            label={"titik"}
            layer={"Madrasah Aliyah (MA)"}
          />
        </div>
        <div className="kesehatan-kolom" ref={kesehatanRef}>
          <h2>Jumlah Fasilitas Kesehatan</h2>
          <TopicItem
            topicText={"Rumah Sakit"}
            data={kesehatan && kesehatan[0]}
            label={"titik"}
            layer={"Rumah Sakit"}
          />
          <TopicItem
            topicText={"Poliklinik"}
            data={kesehatan && kesehatan[1]}
            label={"titik"}
            layer={"Poliklinik"}
          />
          <TopicItem
            topicText={"Puskesmas"}
            data={kesehatan && kesehatan[2]}
            label={"titik"}
            layer={"Puskesmas"}
          />
          <TopicItem
            topicText={"Puskesmas Pembantu"}
            data={kesehatan && kesehatan[3]}
            label={"titik"}
            layer={"Puskesmas Pembantu"}
          />
          <TopicItem
            topicText={"Apotek"}
            data={kesehatan && kesehatan[4]}
            label={"titik"}
            layer={"Apotek"}
          />
        </div>
      </section>
    </div>
  );
});

export default KesehatanSection;
