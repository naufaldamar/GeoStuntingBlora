import React, { useEffect, useState } from "react";
import TopicItem from "./TopicItem";

// || STYLE
import "./topicsection.css";

//|| ICON
import desaIcon from "../../../assets/icon/stunting/desa.png";
import luasIcon from "../../../assets/icon/stunting/luas.png";
import bayiiIcon from "../../../assets/icon/stunting/bayi.png";
import spendekIcon from "../../../assets/icon/stunting/spendek.png";
import pendekIcon from "../../../assets/icon/stunting/pendek.png";
import jstanIcon from "../../../assets/icon/stunting/stunting.png";
import persenIcon from "../../../assets/icon/stunting/persen.png";
import puskIcon from "../../../assets/icon/stunting/puskesmas.png";
import pmtIcon from "../../../assets/icon/stunting/pmt.png";
import jumlahkkIcon from "../../../assets/icon/stunting/jkk.png";
import skIcon from "../../../assets/icon/stunting/wc.png";
import jspIcon from "../../../assets/icon/stunting/jsemi.png";
import jpIcon from "../../../assets/icon/stunting/toilet.png";
import lakiIcon from "../../../assets/icon/stunting/man.png";
import womenIcon from "../../../assets/icon/stunting/woman.png";
import pendudukIcon from "../../../assets/icon/stunting/jpenduduk.png";
import kepIcon from "../../../assets/icon/stunting/jiwa.png";
import tidaksdIcon from "../../../assets/icon/stunting/tidaksd.png";
import sdIcon from "../../../assets/icon/stunting/sdasar.png";
import schoolIcon from "../../../assets/icon/stunting/school.png";
import sarjanaIcon from "../../../assets/icon/stunting/sarjana.png";


const KependudukanSection = ({
  demografiData,
  activeCounty,
  activeLayer,
  onChangeLayer,
}) => {
  // State Data Kependudukan
  const [geografis, setGeografis] = useState([null]);
  const [stunting, setStunting] = useState([null]);
  const [pmt, setPMT] = useState([null]);
  const [sanitasi, setSanitasi] = useState([null]);
  const [kependudukan, setKependudukan] = useState([null]);
  const [pendidikan, setPendidikan] = useState([null]);
  


  useEffect(() => {
    if (demografiData) {
      //Fungsi event listener active County
      const grafikData = demografiData.features.find(
        (p) => p.properties["wadmkc"] === activeCounty
      );
      // Destructuring Properti Kependudukan
      if (grafikData) {
        const {
          //Geografis
          "desa": Desa,
          "luas": Luas,

          //stunting
          "bayi": Bayi,
          "sangatpendek": Sangatpendek,
          "pendek": Pendek,
           "stunting": Stunting,
           "prevalensi": Prevalensi,
           "puskesmas": Puskesmas,
        
          //PMT
          "weight": Weightt,
          "underweight": Underweight,
          "wasting": Wasting,
          "stun": Stun,
          "bumilkek": Bumilkek,
         

          //Sanitasi
         "jumlahkk": Jumlahkk,
         "sk": Sk,
          "jssp": Jssp,
          "jsp": Jsp,

         
         //kependudukan umum 
         "laki": Laki,
        "perempuan": Perempuan,
         "penduduk": Penduduk,
         "kepadatan": Kepadatan,
         
          // Pendidikan
          "belumsekolah": Tidak_sekolah,
          "tidaksd": Belum_SD,
          "tamatsd": SD,
          sltp: Smp,
          slta: Sma,
          "d1": D1,
          d3: D3,
          d4: D4,
          s2: S2,
          s3: S3,
        } = grafikData.properties;

          const geografis = [Desa, Luas];

          const stunting = [Bayi, Sangatpendek, Pendek, Stunting, Prevalensi, Puskesmas];
          
          const pmt = [Weightt, Underweight, Wasting, Stun, Bumilkek];
          
          const sanitasi = [Jumlahkk, Sk, Jssp, Jsp];
          
          const kependudukan = [Laki, Perempuan, Penduduk, Kepadatan];
          
          const pendidikan = [
            Tidak_sekolah, 
            Belum_SD, 
            SD, 
            Smp, 
            Sma, 
            D1, 
            D3, 
            D4, 
            S2, 
            S3
          ];
          
        //Set variabel data dalam state
        setGeografis(geografis);
        setStunting(stunting);
        setPMT(pmt);
        setSanitasi(sanitasi);
        setKependudukan(kependudukan);
        setPendidikan(pendidikan);
      }
    }
  }, [demografiData, activeCounty]);

  return (
    <div>
      <section className="topic-container">
        <h2>Geografis</h2>
        {/* <TopicItem
          topicText={"Jumlah Kelurahan"}
          data={geografis && geografis[0]}
          label={"Kelurahan"}
          layer={"Jumlah Kelurahan"}
          icon={desaIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        /> */}
        <TopicItem
          topicText={"Jumlah Desa/Kelurahan"}
          data={geografis && geografis[0]}
          label={"Desa"}
          layer={"desa"}
          icon={desaIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <TopicItem
          topicText={"Luas Wilayah"}
          data={geografis && geografis[1]}
          label={"km2"}
          layer={"luas"}
          icon={luasIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <h2>Stunting</h2>
        <TopicItem
          topicText={"Jumlah Balita "}
          data={stunting && stunting[0]}
          label={"balita"}
          layer={"bayi"}
          icon={bayiiIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <TopicItem
          topicText={"Balita Sangat Pendek "}
          data={stunting && stunting[1]}
          label={"balita"}
          layer={"sangatpendek"}
          icon={spendekIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <TopicItem
          topicText={"Balita Pendek "}
          data={stunting && stunting[2]}
          label={"balita"}
          layer={"pendek"}
          icon={pendekIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <TopicItem
          topicText={"Jumlah Stunting "}
          data={stunting && stunting[3]}
          label={"balita"}
          layer={"stunting"}
          icon={jstanIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <TopicItem
          topicText={"Prevalensi Stunting"}
          data={stunting && stunting[4]}
          label={"%"}
          layer={"prevalensi"}
          icon={persenIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
          />
        <TopicItem
          topicText={"Wilayah Puskesmas"}
          data={stunting && stunting[5]}
          label={" "}
          layer={"puskesmas"}
          icon={puskIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
      </section>
      <section className="topic-container">
        <h2>Pemberian Makanan Tambahan</h2>
        <div className="two-column">
          <TopicItem
          topicText={"Jumlah weight faltering"}
          data={pmt && pmt[0]}
          label={"orang"}
          layer={"weight"}
          icon={pmtIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />

        <TopicItem
          topicText={"Jumlah underweight"}
          data={pmt && pmt[1]}
          label={"orang"}
          layer={"underweight"}
          icon={pmtIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />

        <TopicItem
          topicText={" Jumlah wasting"}
          data={pmt && pmt[2]}
          label={"orang"}
          layer={"wasting"}
          icon={pmtIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />

        <TopicItem
          topicText={"Jumlah stunted"}
          data={pmt && pmt[3]}
          label={"orang"}
          layer={"stun"}
          icon={pmtIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />

        <TopicItem
          topicText={"Jumlah Bumil kek"}
          data={pmt && pmt[4]}
          label={"orang"}
          layer={"bumilkek"}
          icon={pmtIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
      </div>
      </section>

      <div>
      <section className="topic-container"> 
      <h2>Sanitasi</h2>
        <TopicItem
          topicText={"Jumlah Kartu Keluarga"}
          data={sanitasi && sanitasi[0]}
          label={"KK"}
          layer={"jumlahkk"}
          icon={jumlahkkIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <TopicItem
          topicText={"Sharing Komunal"}
          data={sanitasi && sanitasi[1]}
          label={"KK"}
          layer={"sk"}
          icon={skIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <TopicItem
          topicText={"Jamban Sehat Semi Permanen"}
          data={sanitasi && sanitasi[2]}
          label={"KK"}
          layer={"jssp"}
          icon={jspIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
        <TopicItem
          topicText={"Jamban Sehat Permanen"}
          data={sanitasi && sanitasi[3]}
          label={"KK"}
          layer={"jsp"}
          icon={jpIcon}
          onChangeLayer={onChangeLayer}
          activeLayer={activeLayer}
        />
      </section>
      </div>

      <section className="topic-container">
        <h2>Kependudukan</h2>
        <div className="two-column">
          <TopicItem
            topicText={"Laki-Laki"}
            data={kependudukan && kependudukan[0]}
            label={"orang"}
            layer={"laki"}
            icon={lakiIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Perempuan"}
            data={kependudukan && kependudukan[1]}
            label={"orang"}
            layer={"perempuan"}
            icon={womenIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Jumlah Penduduk"}
            data={kependudukan && kependudukan[2]}
            label={"orang"}
            layer={"penduduk"}
            icon={pendudukIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Kepadatan"}
            data={kependudukan && kependudukan[3]}
            label={"Jiwa/KM2"}
            layer={"kepadatan"}
            icon={kepIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
        </div>
      </section>

      <section className="topic-container">
        <h2>Tingkat Pendidikan</h2>
        <div className="two-column">
          <TopicItem
            topicText={"Tidak/Belum Sekolah"}
            data={pendidikan && pendidikan[0]}
            label={"orang"}
            layer={"belumsekolah"}
            icon={tidaksdIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Belum Tamat SD"}
            data={pendidikan && pendidikan[1]}
            label={"orang"}
            layer={"tidaksd"}
            icon={sdIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"Tamat SD"}
            data={pendidikan && pendidikan[2]}
            label={"orang"}
            layer={"tamatsd"}
            icon={sdIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"SLTP"}
            data={pendidikan && pendidikan[3]}
            label={"orang"}
            layer={"sltp"}
            icon={schoolIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"SLTA"}
            data={pendidikan && pendidikan[4]}
            label={"orang"}
            layer={"slta"}
            icon={schoolIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"D1 dan D2"}
            data={pendidikan && pendidikan[5]}
            label={"orang"}
            layer={"d1"}
            icon={sarjanaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"D3"}
            data={pendidikan && pendidikan[6]}
            label={"orang"}
            layer={"d3"}
            icon={sarjanaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"D4 dan S1"}
            data={pendidikan && pendidikan[7]}
            label={"orang"}
            layer={"d4"}
            icon={sarjanaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"S2"}
            data={pendidikan && pendidikan[8]}
            label={"orang"}
            layer={"s2"}
            icon={sarjanaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
          <TopicItem
            topicText={"S3"}
            data={pendidikan && pendidikan[9]}
            label={"orang"}
            layer={"s3"}
            icon={sarjanaIcon}
            onChangeLayer={onChangeLayer}
            activeLayer={activeLayer}
          />
        </div>
      </section>
      

    </div>
  );
};

export default KependudukanSection;
