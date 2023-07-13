/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import lomba1 from "./7.jpg";
import lomba2 from "./6.jpg";
import msu from "./1.png";
import jgu from "./2.png";
import ui from "./3.png";
import logo_pnj from ".././view/4.png";

function home() {
  const texts = [
    "TIK PNJ IS WHERE THE IT ENGINEER PRACTITIONERS IS INVENTED ! 👨‍💻",
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
    <div className="Poppins text-white bg-gray-100">
      <div className="bg bg-fixed bg-top">
        <div className="font-extrabold text-4xl py-80">
          <div className="bg-blue-950 bg-opacity-60 py-5 mx-24 rounded-md backdrop-blur-md border-l-4 border-r-4 border-white">
            {text}
            <span className={classNames("opacity-50", "animate-blink")}>|</span>
          </div>
          <div className="text-2xl bg-gray-400 bg-opacity-60 mx-48 py-10 rounded-md backdrop-blur-md border-b-4 border-white text-blue-950">
            Dengan Pendidikan Vokasional, Mahasiswa TIK <br />
            Belajar langsung Dunia Industri IT sehingga Tercipta Lulusan Siap
            Kerja
          </div>
        </div>
      </div>

      <div className="text-xl bg-gray-500 font-extrabold py-14 px-14 backdrop-blur-md box-border">
        The PNJ Departement of IT Engineering’s mission is to educate the next
        generation of IT engineering leaders, to create new knowledge, and to
        serve society.
      </div>

      <div className="mx-48 my-10 flex justify-center rounded-l-md shadow-md shadow-blue-500">
        <div className="p-10">
          <div className=" bg-white flex justify-between items-center margin">
            <div className="">
              <img src={lomba1} alt="" className="max-w-md" />
            </div>
            <div className="mx-3">
              <a href="#" className="text-blue-500 underline text-xl">
                Mahasiswa Prodi TMJ Lakukan Studi Industri ke XL Axiata
              </a>
            </div>
          </div>

          <div className="bg-white flex justify-between items-center margin  ">
            <div className="mx-3">
              <a href="" className="text-blue-500 underline text-xl">
                Mahasiswa TIK PNJ juara 1 Perancangan Bisnis KMIPN 2019
              </a>
            </div>
            <div>
              <img src={lomba2} alt="" className="max-w-md" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 mx-20 my-24 rounded-md shadow-md shadow-black border-x-4 border-white">
        <div className="ml-10 py-6">
          <h1 className="underline flex text-left text-2xl">TIK NEWSLATTER</h1>
        </div>
        <div className="flex justify-between items-center mx-24 pt-10 py-12">
          <div className="max-w max ">
            <div className="group csfest rounded-3xl w-56 border-2 h-56 bg-cover bg-bottom overflow-hidden relative">
              <div className="group-hover:bg-gradient-to-t from-black to-transparent w-full h-full  transition-all"></div>
              <div className="">
                <p className="group-hover:text-white absolute bottom-2 p-2 box-border text-sm text-transparent">
                  CSFest berhasil satukan mahasiswa baru TIK 2022
                </p>
              </div>
            </div>
          </div>
          <div className="max-w max ">
            <div className="group csfest rounded-3xl w-56 border-2 h-56 bg-cover bg-bottom overflow-hidden relative">
              <div className="group-hover:bg-gradient-to-t from-black to-transparent w-full h-full  transition-all"></div>
              <div className="">
                <p className="group-hover:text-white absolute bottom-2 p-2 box-border text-sm text-transparent">
                  CSFest berhasil satukan mahasiswa baru TIK 2022
                </p>
              </div>
            </div>
          </div>
          <div className="max-w max ">
            <div className="group csfest rounded-3xl w-56 border-2 h-56 bg-cover bg-bottom overflow-hidden relative">
              <div className="group-hover:bg-gradient-to-t from-black to-transparent w-full h-full  transition-all"></div>
              <div className="">
                <p className="group-hover:text-white absolute bottom-2 p-2 box-border text-sm text-transparent">
                  CSFest berhasil satukan mahasiswa baru TIK 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="mb-4">
          <h1 className="text-blue-950 text-3xl font-semibold">
            UNIVERSITAS REKANAN
          </h1>
        </div>

        <div className="flex justify-between items-center mx-64 mb-6">
          <div>
            <img src={msu} alt="" />
          </div>
          <div>
            <img src={ui} alt="" className="w-72 ml-10" />
          </div>
          <div>
            <img src={jgu} alt="" className="w-72" />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default home;
