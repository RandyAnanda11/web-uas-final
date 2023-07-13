/* eslint-disable jsx-a11y/anchor-is-valid */
import logo_pnj from ".././view/4.png";

function header() {
  return (
    <div>
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

export default header;
