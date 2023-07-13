/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import logo_pnj from ".././view/4.png";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

const SejarahCard = () => {
  return (
    <div className="grid-cols-6 w-full transition-opacity duration-500 ease-in-out">
      <div className="bg-white rounded-lg p-4 mt-5 text-black w-[80%] mx-auto ring-2 shadow-md shadow-black box-border">
        <ol class="relative border-l-2 border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-4 rounded border-b-4 border-blue-500 hover:border-b-0 hover:border-t-4 shadow-md transition-all p-4 hover:shadow-slate-500">
            <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-blue-900 dark:bg-blue-700"></div>
            <time class="mb-1 text-xl font-bold leading-none text-black">
              1982
            </time>
            <h3 class="text-lg font-bold text-blue-700 ">
              Berdirinya Departemen Teknik Elektro Politeknik Universitas
              Indonesia
            </h3>
            <p class="mb-4   text-gray-500 dark:text-gray-500 font-thin pt-3 text-sm">
              Sejarah perjalanan Teknik Informatika dan Komputer PNJ tidak lepas
              dari dibentuknya Teknik Elektro Politeknik UI yang sebelumnya
              adalah Politeknik Mekanika Swiss - ITB pada tahun 1972
            </p>
          </li>
          <li class="mb-10 ml-4 rounded border-b-4 border-blue-500 hover:border-b-0 hover:border-t-4 shadow-md transition-all p-4 hover:shadow-slate-500">
            <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-blue-900 dark:bg-blue-700"></div>
            <time class="mb-1 text-xl font-bold leading-none text-black">
              2010
            </time>
            <h3 class="text-lg font-bold text-blue-700 ">
              Program Studi Teknik Informatika Menjadi Prodi Baru Departemen
              Teknik Elektro PNJ
            </h3>
            <p class="mb-4   text-gray-500 dark:text-gray-500 font-thin pt-3 text-sm">
              Program studi teknik informatika mulanya adalah bagian dari teknik
              elektro dengan 4 konsentrasi, rekayasa perangkat lunak, jaringan,
              animasi dan multimedia, serta teknologi perangkat keras
            </p>
          </li>
          <li class="mb-10 ml-4 rounded border-b-4 border-blue-500 hover:border-b-0 hover:border-t-4 shadow-md transition-all p-4 hover:shadow-slate-500">
            <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-blue-900 dark:bg-blue-700"></div>
            <time class="mb-1 text-xl font-bold leading-none text-black">
              2015
            </time>
            <h3 class="text-lg font-bold text-blue-700 ">
              Program Studi Teknik Informatika Memisahkan Diri dari Jurusan
              Teknik Elektro PNJ
            </h3>
            <p class="mb-4   text-gray-500 dark:text-gray-500 font-thin pt-3 text-sm">
              setelah hampir 5 tahun terbentuk, karena banyaknya antusias
              peminat dan adanya dorongan untuk berkembang menjadi lebih massif,
              prodi teknik informatika memisahkan diri menjadi Departemen
              tersendiri
            </p>
          </li>
          <li class="mb-10 ml-4 rounded border-b-4 border-blue-500 hover:border-b-0 hover:border-t-4 shadow-md transition-all p-4 hover:shadow-slate-500">
            <div class="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-blue-900 dark:bg-blue-700"></div>
            <time class="mb-1 text-xl font-bold leading-none text-black">
              Sekarang
            </time>
            <h3 class="text-lg font-bold text-blue-700 ">
              TIK Memiliki 3 kampus Satelit di Indonesia dan Malaysia
            </h3>
            <p class="mb-4   text-gray-500 dark:text-gray-500 font-thin pt-3 text-sm">
              Sekarang, TIK PNJ memiliki kelas kerja sama, yaitu pada program
              CCIT-Fakultas Teknik Universitas Indonesia, Computer Science of
              MSU university Malaysia, JGU university
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

function about() {
  const texts = [
    "Teknik Informatika dan Komputer Politeknik Negeri Jakarta (TIK PNJ) adalah tempat yang menantang orang orang dengan rasa ingin tahu yang tinggi dan bersemangat dalam berimajinasi dan berkarya di bidang ilmu rekayasa teknologi jaringan, teknologi perangkat keras, teknologi perangkat lunak, dan pengembangan animasi.",
  ];
  const speed = 50; // Kecepatan pengetikan dalam milidetik

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

  const [showCard, setShowCard] = useState(false);
  const handleClick = () => {
    if (showCard === true) {
      setShowCard(false);
    } else {
      setShowCard(true);
    }
  };
  return (
    <div className="font-Poppins text-white bg-white  ">
      <div className="gsg h-[750px] w-full overflow-hidden bg-top bg-cover bg-no-repeat relative max-w-10xl">
        <div className=" bg-gradient-to-t from-black/100 via-white/10 to-transparent mix-blend-multiply h-full "></div>
        <div className="font-bold absolute bottom-16 left-14 font-Poppins text-left text-4xl  box-decoration-clone bg-gradient-to-r from-blue-600 to-transparent text-white px-2 backdrop-blur-sm rounded-md pl-4 border-l-4 border-white">
          <p className="bg-gradient-to-br from-white  to-yellow-300 bg-clip-text text-transparent">
            Tentang Departemen <br /> Teknik Informatika dan Komputer
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row p-4 text-black box-border w-full">
          <div className=" w-[70%] text-justify p-5 box-border text-md">
            <div className="container">
              <div className=" underline mb-2 backdrop-blur-sm  bg-white/30 ">
                {text}
                <span className={classNames("opacity-50", "animate-blink")}>
                  |
                </span>
              </div>
              <p>
                TIK PNJ telah menjalin berbagai kerja sama dengan dunia
                industri, bahkan menghadirkan kembali alumni TIK PNJ yang telah
                bekerja di perusahaan nasional maupun internasional sebagai
                dosen tamu praktisi. dengan demikian, mahasiswa belajar langsung
                dengan ahli nya
              </p>

              <div className="flex flex-row mt-10 w-full p-6 overflow-hiden box-border relative ">
                <div className="  ml-auto w-[60%] overflow-hidden rounded-l-md shadow-xl shadow-black/60 ">
                  <div className="jahim h-[350px] w-[500px] overflow-hidden bg-right bg-cover bg-no-repeat relative "></div>
                </div>
                <div className="  mr-auto w-[60%] rounded-r-md  shadow-xl shadow-black/60">
                  <div className="gsg h-[350px] w-[500px] overflow-hidden bg-bottom bg-fixed bg-no-repeat  opacity-100 rounded-r-md relative">
                    <div className=" bg-white mix-blend-multiply h-full w-full ">
                      <div className="bg-blue-800 mix-blend-multiply h-full w-full"></div>
                    </div>
                    <div className="font-bold absolute top-0 p-5 font-Poppins text-center text-md text-white  h-full mb-4 box-border rounded-r">
                      <p className="mb-4">
                        TEKNIK INFORMATIKA & KOMPUTER PNJ ADALAH JURUSAN PALING
                        DIMINATI PADA SELEKSI NASIONAL
                      </p>
                      <p className="text-white font-Poppins text-sm  text-justify mb-4">
                        Sejak tahun 2020 PNJ bergabung pada skema penerimaan
                        mahasiswa baru dibawah naungan LTMPT. semenjak itu, dari
                        tahun 2020 - 2023 TIK PNJ Selalu menjadi jurusan paling
                        diminati di PNJ.
                      </p>
                      <p className="text-white font-Poppins  text-justify mb-4">
                        setiap tahun, sekurang-kurangnya, terdapat 1000 Calon
                        mahasiswa yang mendaftar melalui jalur nasional.
                      </p>
                      <div className="absolute bottom-10 left-[22%] ">
                        <a
                          href="https://penerimaan.pnj.ac.id"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="bg-white block mx-auto rounded-full p-2 font-poppins text-blue-700 transition-all hover:bg-yellow-500 hover:text-black active:bg-yellow-800 ring-2 ring-blue-200 text-sm ">
                            Jadwal Penerimaan Mahasiswa 2023 🚀
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[30%] p-6 box-border">
            <div className="bg-slate-300 w-full h-14 text-left p-4 rounded-xl border-l-4 border-r-4 border-blue-500 mb-4 font-bold">
              Main Page
            </div>
            <div className="bg-white w-full h-14 text-left p-4 rounded-xl border-b-2  border-yellow-500 text-l  mb-3 shadow-md transition-all hover:shadow-black hover:underline">
              <p>➡ Tentang TIK</p>
            </div>
            <div className="bg-white w-full h-14 text-left p-4 rounded-xl border-b-2 border-yellow-500 text-l  mb-3 shadow-md transition-all hover:shadow-black hover:underline">
              <p>➡ Fasilitas</p>
            </div>
            <div className="bg-white w-full h-14 text-left p-4 rounded-xl border-b-2 border-yellow-500 text-l  mb-3 shadow-md  transition-all hover:shadow-black hover:underline">
              <p className=" ">➡ Tenaga Pendidik</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row w-full bg-slate-300 px-10  my-4 overflow-hidden box-border justify-center">
            <div className="ml-auto w-[46%] overflow-hidden py-7">
              <div className="object-cover">
                <iframe
                  width="530"
                  height="315"
                  src="https://www.youtube.com/embed/SoFPffnwyGQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="mr-auto w-[40%] p-7 text-black">
              <div className="flex flex-col justify-center gap-y-4">
                <div className="bg-gradient-to-r from-white/40 to-transparent  w-full rounded-md mb-4 p-2 transition-all shadow-md hover:shadow-black hover:bg-white/40">
                  <p className="font-bold">800+ Mahasiswa</p>
                  <p>Terbaik dari seluruh penjuru nusantara</p>
                </div>
                <div className="bg-gradient-to-r from-white/40 to-transparent  w-full rounded-md mb-4 p-2 transition-all shadow-md hover:shadow-black hover:bg-white/40">
                  <p className="font-bold">60+ Dosen</p>
                  <p>Dari perguruan tinggi negeri terbaik di Indonesia</p>
                </div>
                <div className="bg-gradient-to-r from-white/40 to-transparent  w-full rounded-md mb-4 p-2 transition-all shadow-md hover:shadow-black hover:bg-white/40">
                  <p className="font-bold">2400+ Alumni</p>
                  <p>
                    yang tersebar ke seluruh perusahaan nasional dan
                    multinasional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div
            onClick={() => handleClick()}
            className="mx-auto text-center bg-white font-Poppins rounded-md border-b-2 border-solid border-blue-800 w-40 mt-10 text-black font-bold p-2 shadow-md transition-all hover:border-2 hover:shadow-black focus:ring active:bg-blue-400 active:text-white cursor-pointer duration-300 ease-in-out"
          >
            <p> Sejarah </p>
          </div>
        </div>
        <div className="text-center text-slate-500 mt-4 p-2 ">
          <p className="my-2">
            "14 tahun bakti kami pada negeri, inilah sejarah perjalanan kami.
            Klik button diatas"
          </p>
          <hr />
        </div>
        <div>
          {showCard && (
            <div className="transition-opacity duration-500 ease-in-out">
              <SejarahCard />
            </div>
          )}
        </div>
        <div className="mb-40"></div>
      </div>
      
    </div>
  );
}

export default about;
