/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import foto9 from "../view/img/9.jpg";
import foto10 from "../view/img/10.jpg";
import foto11 from "../view/img/11.jpg";
import foto12 from "../view/img/12.jpg";
import foto13 from "../view/img/13.jpg";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
function academic() {
  const texts = [
    "Kehidupan Akademik Departemen Teknik Informatika dan Komputer PNJ",
  ];
  const speed = 130; // Kecepatan pengetikan dalam milidetik

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = index % texts.length;
      const currentText = texts[currentIndex];

      if (!isDeleting) {
        setText((prevText) => prevText + currentText.charAt(text.length));
        if (text === currentText) {
          setIsDeleting(true);
          clearInterval(interval);
          setTimeout(() => setIsDeleting(false), speed);
        }
      } else {
        if (text === "") {
          setIndex((prevIndex) => prevIndex + 1);
          setIsDeleting(false);
          clearInterval(interval);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, text, isDeleting, speed, texts]);

  return (
    <div className="Poppins">
      <div className="bg2 relative bg-center bg-fixed overflow-hidden">
        <div className=" bg-gradient-to-t from-black/100 via-black/10 to-transparent mix-blend-multiply h-full "></div>
        <div className="font-bold absolute bottom-16 left-14 font-Poppins text-left text-4xl  box-decoration-clone bg-gradient-to-r from-blue-600 to-transparent text-white px-2 backdrop-blur-sm rounded-md pl-4 border-l-4 border-white w-[80%]">
          <p className="bg-gradient-to-br from-white  to-yellow-300 bg-clip-text text-transparent w-[70%] p-4">
            {text}
            <span className={classNames("opacity-50", "animate-blink")}>|</span>
          </p>
        </div>
      </div>

      <div>
        <div className="border-b-4 mt-14 border-black text-left ml-24 mb text-blue-950 text-2xl font-semibold max-w-[50%]">
          <h1>SEPUTAR AKADEMIK TIK PNJ</h1>
        </div>
        <div className="flex justify-between mt-10 w-full">
          <div className="ml-24 text-xl mr-20 w-[70%]">
            <p className="text-blue-950 text-justify">
              Bila anda senang dengan ilmu komputer terapan dan bagaimana ilmu
              tersebut langsung diimplementasikan dalam dunia industri, TIK PNJ
              adalah tempat yang cocok untuk anda. <br />
              <br />
              Sejak tahun 2010, kami telah menerapkan pendidikan vokasional di
              bidang ilmu komputer dengan porsi pembelajaran praktik 60% dan
              teori 40% sehingga Mahasiswa TIK PNJ hanya difokuskan dengan mata
              kuliah yang to the point sesuai dengan program studi nya dan
              disesuaikan dengan perkembangan industri
            </p>
            <div className="text-left font-bold text-xl my-6">
              <h1>Program Studi</h1>
            </div>
            <div className="bg-blue-500/40 px-9 rounded-lg py-5 mt-4 text-sm shadow-md shadow-black hover:shadow-yellow-900 hover:border-t-4 hover:border-yellow-800 transition-all hover:bg-gradient-to-bl hover:from-blue-400 hover:via-white/40 hover:to-yellow-400">
              <h1 className="text-left text-xl underline ">
                SARJANA TERAPAN TEKNIK INFORMATIKA
              </h1>
              <p className="text-justify p-2">
                Program studi sarjana terapan teknik informatika merupakan
                program studi yang berfokus pada pengembangan teknologi rekayasa
                perngkat lunak. ranah dari prodi ini adalah berfokus pada
                pengembangan seperti aplikasi, sistem operasi dan website maupun
                data engineer. lulusan dari prodi teknik informatika PNJ
                tersebar di berbagai sektor seperti Software Engineer, Website
                Developer, maupun QA IT.
              </p>
            </div>
            <div className="bg-blue-500/40 px-9 rounded-lg py-5 mt-4 text-sm shadow-md shadow-black hover:shadow-yellow-900 hover:border-t-4 hover:border-yellow-800 transition-all hover:bg-gradient-to-t hover:from-blue-400 hover:via-white/40 hover:to-yellow-400">
              <h1 className="text-left text-xl underline">
                SARJANA TERAPAN TEKNIK MULTIMEDIA JARINGAN{" "}
              </h1>
              <p className="text-justify p-2">
                SARJANA TERAPAN TEKNIK MULTIMEDIA JARINGAN Program studi sarjana
                terapan teknik multimedia jaringan berfokus pada pengembangan
                infrastruktur jaringan atau interkonektivtas antar komputer.
                ranah dari prodi ini terbagi menjadi beberapa peminatan seperti
                embeded system, machine learning, cyber security, dan lain lain.
                lulusan dari prodi ini tersebar diberbagai sektor seperti cyber
                security, Telekomunikasi, teknisi sistem komputer,dsb
              </p>
            </div>
            <div className="bg-blue-500/40 px-9 rounded-lg py-5 mt-4 text-sm shadow-md shadow-black hover:shadow-yellow-900 hover:border-t-4 hover:border-yellow-800 transition-all hover:bg-gradient-to-br hover:to-blue-400 hover:via-white/40 hover:from-yellow-400">
              <h1 className="text-left text-xl underline">
                SARJANA TERAPAN TEKNIK MULTIMEDIA DIGITAL{" "}
              </h1>
              <p className="text-justify p-2">
                Program studi sarjana terapan teknik multimedia digital berfokus
                pada pengembangan Multimedia seperti animasi, user interface,
                user experience, game, sampai pada pengembangan teknologi
                metaverse seperti avatar dsb. lulusan dari prodi ini tersebar di
                berbagai sektor seperti web designer, game developer, animation
                engineer, dsb.
              </p>
            </div>
          </div>
          <div className=" w-[30%] p-6 box-border ">
            <div className="bg-slate-300 flex items-center w-full h-20 text-left p-4 rounded-xl border-l-4 border-r-4 border-blue-500 mb-4 font-bold">
              Penerimaan Mahasiswa
            </div>
            <div className="bg-white flex items-center w-full h-20 text-left p-4 rounded-xl border-b-2  border-yellow-500 text-l  mb-3 shadow-md transition-all hover:shadow-black hover:underline">
              <p>➡ SNBT</p>
            </div>
            <div className="bg-white flex items-center w-full h-20 text-left p-4 rounded-xl border-b-2 border-yellow-500 text-l  mb-3 shadow-md transition-all hover:shadow-black hover:underline">
              <p>➡ SNBP</p>
            </div>
            <div className="bg-white flex items-center w-full h-20 text-left p-4 rounded-xl border-b-2 border-yellow-500 text-l  mb-3 shadow-md  transition-all hover:shadow-black hover:underline">
              <p className=" ">➡ Simak PNJ</p>
            </div>
            <div className="bg-white flex items-center w-full h-20 text-left p-4 rounded-xl border-b-2 border-yellow-500 text-l  mb-3 shadow-md  transition-all hover:shadow-black hover:underline">
              <p className=" ">➡ Jalur Kerja Sama</p>
            </div>
          </div>
        </div>

        <div className="ml-24 mr-96 ">
          <div className="text-left font-bold text-xl mt-10">
            <h1>Capaian Lulusan</h1>
          </div>

          <div className="mt-4 text-md">
            <p className="text-justify">
              lulusan Teknik informatika dan Komputer untuk program studi
              sarjana terapan, mereka dibekali sertifikasi profesi yang sesuai
              dengan KKNI level IV yang setara dengan lulusan sarjana akademik.
              tidak hanya itu, lulusan juga dibekali dengan sertifikat tes
              bahasa inggris TOEIC yang menjadi syarat kelulusan.
            </p>
          </div>
          <div className="mt-9 text-md">
            <p className="text-justify">
              masa studi sarjana terapan adalah setara dengan 144 SKS yang dapat
              selsaikan dalam waktu 4 tahun atau selama lamanya adalah 5 tahun.
              Mahasiswa lulusan TIK PNJ yang sah secara sidang yudisium berhak
              menyadang gelar Sarjana terapan ilmu komputer atau S.Tr.Kom
            </p>
          </div>

          <div className="text-left font-bold text-xl mt-10">
            <h1>Kehidupan Mahasiswa</h1>
          </div>

          <div className="mt-4 text-md">
            <p className="text-justify">
              Selama berkuliah, mahasiswa tidak hanya dibekali pembelajaran
              dalam kampus tetapi PNJ juga menyediakan wadah bagi mahasiswa
              untuk bersosialisasi dan berorganisasi antar sesama mahasiswa.
              mahasiswa TIK juga diberikan kesempatan untuk mengajar, magang,
              dan studi independent melalui program MBKM yang dimulai pada
              semester 5
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="my-20 rounded-md shadow-md shadow-black w-[60%] mx-auto ">
          <div className="p-10">
            <div>
              <h1 className="text-xl font-bold text-blue-600 mb-4">
                ORGANISASI
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-44 mx-5">
                <img src={foto10} alt="" />
              </div>
              <div className="w-44 mx-5">
                <img src={foto13} alt="" />
              </div>
              <div className="w-36 mx-5">
                <img src={foto9} alt="" />
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-xl font-bold text-blue-600 mb-4">
                KELOMPOK STUDI MAHASISWA
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-36 mx-5">
                <img src={foto11} alt="" />
              </div>
              <div className="w-44 mx-5">
                <img src={foto12} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default academic;
