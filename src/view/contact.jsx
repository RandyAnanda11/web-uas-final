import logo_pnj from ".././view/4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
function contact() {
  return (
    <div className="font-Poppins bg-white">
      <div className="pnj h-[750px] w-full overflow-hidden bg-bottom bg-fixed bg-no-repeat relative max-w-10xl">
        <div className=" bg-gradient-to-t from-black/100 via-white/10 to-transparent mix-blend-multiply h-full "></div>
        <div className="font-bold absolute bottom-40 left-[50%] -translate-x-[50%] font-Poppins text-left text-7xl  box-decoration-clone bg-gradient-to-t from-blue-600 to-transparent text-white p-6 backdrop-blur-sm rounded-md pl-4 border-b-4 border-white flex">
          <p className="text-white text-center mx-auto">Kontak Kami</p>
        </div>
      </div>

      <div className=" bg-slate-300 p-7 mb-6 w-full box-border text-white">
        <div class="flex justify-center ...">
          <div className="w-[45%] rounded-md bg-blue-500/40 transition-all backdrop-blur-md hover:shadow-md hover:shadow-black hover:bg-blue-500/70 mr-2 hover:text-blue-900 p-5 box-border">
            <p className="text-xl font-bold hover:underline mb-2">
              Gedung Praktik
            </p>
            <p className="text-md text-left text-white mb-2">
              Universitas Indonesia, Gedung AA PNJ, Jl. Prof.DR.G.A. Siwabessy,
              Beji, Depok, Jawa Barat, 16525
            </p>

            <div className="ml-2">
              <p className="text-sm text-left text-white">
                <span className="text-xl inline-block text-black">🏛</span>
                <p className="inline-block ml-4">Sekertariat HIMATIK</p>
              </p>
              <p className="text-sm text-left text-white">
                <span className="text-xl inline-block text-black">🏛</span>
                <p className="inline-block ml-4">
                  Administrasi Prodi Teknik Komputer & Jaringan
                </p>
              </p>
              <p className="text-sm text-left text-white">
                <span className="text-xl inline-block text-black">🏛</span>
                <p className="inline-block ml-4">
                  Administrasi Prodi Teknik Multimedia Digital
                </p>
              </p>
              <p className="text-sm text-left text-white">
                <span className="text-xl inline-block text-black">🏛</span>
                <p className="inline-block ml-4">Kantor Pimpinan TIK </p>
              </p>
            </div>
            <div className="text-white text-left mt-2">
              <span className="text-xl inline-block ">📞</span>
              <p className="inline-block ml-4">+62 812 4567 8976</p>
            </div>
          </div>
          <div className="w-[45%] rounded-md bg-blue-500/40 transition-all backdrop-blur-md hover:shadow-md hover:shadow-black hover:bg-blue-500/70 ml-2 hover:text-blue-900 p-5 box-border">
            <p className="text-xl font-bold hover:underline mb-2">
              Gedung Kuliah Bersama
            </p>
            <p className="text-md text-left text-white mb-2">
              Universitas Indonesia, Gedung Serba Guna PNJ, Jl. Prof.DR.G.A.
              Siwabessy, Beji, Depok, Jawa Barat, 16525
            </p>

            <div className="ml-2">
              <p className="text-sm text-left text-white">
                <span className="text-xl inline-block text-black">🏛</span>
                <p className="inline-block ml-4">Ruang Sidang & Konsultasi</p>
              </p>
              <p className="text-sm text-left text-white">
                <span className="text-xl inline-block text-black">🏛</span>
                <p className="inline-block ml-4">
                  Administrasi Prodi Teknik Informatika
                </p>
              </p>
              <p className="text-sm text-left text-white">
                <span className="text-xl inline-block text-black">🏛</span>
                <p className="inline-block ml-4">
                  Administrasi Prodi Teknik Multimedia Jaringan
                </p>
              </p>
              <p className="text-sm text-left text-white">
                <span className="text-xl inline-block text-black">🏛</span>
                <p className="inline-block ml-4">Aula Serba Guna </p>
              </p>
            </div>

            <div className="text-white text-left mt-2">
              <span className="text-xl inline-block ">📞</span>
              <p className="inline-block ml-4">+62 812 4567 8976</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center text-black box-border">
        <div className="mx-auto text-blue-900 font-bold text-2xl mb-5">
          Social Media Kami
        </div>
        <hr />
        <div className="flex flex-row place-content-evenly mx-auto p-4 my-5">
          <div className="rounded shadow-md border-l-4 border-blue-900 hover:border-l-0 hover:border-r-4 hover:shadow-black p-10 transition-all">
            <span className="text-7xl text-blue-800">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <p className="my-5 font-bold">Instagram</p>
            <p className="text-l  hover:text-blue-900">@jtik_pnj</p>
          </div>
          <div className="rounded shadow-md border-t-4 border-b-4 border-blue-900 hover:border-t-0 hover:border-b-0 hover:border-l-4 hover:border-r-4 hover:shadow-black p-10 transition-all">
            <span className="text-7xl text-blue-800">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <p className="my-5 font-bold">Twitter</p>
            <p className="text-l  hover:text-blue-900">@jtik_pnj</p>
          </div>
          <div className="rounded shadow-md border-r-4 border-blue-900 hover:border-r-0 hover:border-l-4 hover:shadow-black p-10 transition-all">
            <span className="text-7xl text-blue-800">
              <FontAwesomeIcon icon={faYoutube} />
            </span>
            <p className="my-5 font-bold">Youtube</p>
            <p className="text-l hover:text-blue-900">jtik_pnj</p>
          </div>
        </div>
      </div>

      <div className="Footer text-white">
        <div>
          <div className="bg-zinc-800 pt-5 mx-auto ">
            <div className="flex justify-between items-center mx-20 mb-10">
              <div className="flex justify-between items-center">
                <div className="ml-[-20px]">
                  <img src={logo_pnj} alt="" className="w-28" />
                </div>
                <div className="mx-3">
                  <h1 className="text-left text-l font-based">
                    Departemen <br /> Teknik Informatika dan <br />
                    Komputer
                  </h1>
                </div>
              </div>

              <div className="text-left">
                <div>
                  <h1 className="text-l font-based mb-2 border-b-2 border-white">
                    Akademik
                  </h1>
                </div>
                <ul className="font-based">
                  <li className="hover:underline transition-all">
                    Sarjana Terapan Teknik Informatika
                  </li>
                  <li>Sarjana Terapan Teknik Multimedia Digital</li>
                  <li className="hover:underline transition-all">
                    Sarjana Terapan Teknik Multimedia Digital dan Jaringan
                  </li>
                  <li className="hover:underline transition-all">
                    D1 Teknik Komputer dan Jaringan
                  </li>
                </ul>
              </div>

              <div className="text-left">
                <div className="text-l fon-based mb-2 border-b-2 border-white">
                  Akses Cepat
                </div>
                <ul className="font-based">
                  <li className="hover:underline transition-all">
                    Web Utama PNJ
                  </li>
                  <li className="hover:underline transition-all">
                    Siak Mahasiswa
                  </li>
                  <li className="hover:underline transition-all">E-Learning</li>
                  <li className="hover:underline transition-all">
                    Gudang Ilmu TIK
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              <hr className="text-slate-800" />
              <p className="p-2">
                Developed By Randy & Fajar, Calon Junior Web Devlopment 2022 -
                2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default contact;
