/* eslint-disable jsx-a11y/anchor-is-valid */
import logo_pnj from ".././view/img/4.png";
import academic from "./academic";
function header() {
  return (
    <div className="relative z-50">
      <div className="bg-blue-500/30 backdrop-blur-md text-white Poppins fixed top-0 left-0 right-0  overflow-hidden  ">
        <div className="flex justify-between items-center top-0 left-0 right-0 py-1 ">
          <div className="ml-10">
            <img src={logo_pnj} alt="" className="w-20 rounded-full" />
          </div>
          <a href="#" className="text-l text-left p-5">
            Departemen
            <br /> Teknik Informatika dan Komputer
          </a>
          <div className="inline-block text-l ml-auto ">
            <a
              className="mx-4  hover:bg-white rounded-xl p-3 transition-all hover:text-blue-600 hover:ring-4 ring-blue cursor-pointer"
              href="/"
            >
              Home
            </a>
            <a
              className="mx-4 hover:bg-white rounded-xl p-3 transition-all hover:text-blue-600 hover:ring-4 ring-blue cursor-pointer"
              href="academic"
            >
              Academic
            </a>
            <a
              className="mx-4  hover:bg-white rounded-xl p-3 transition-all hover:text-blue-600 hover:ring-4 ring-blue cursor-pointer"
              href="/about"
            >
              About Us
            </a>
            <a
              className="mx-4 hover:bg-white rounded-xl p-3 transition-all hover:text-blue-600 hover:ring-4 ring-blue cursor-pointer"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
