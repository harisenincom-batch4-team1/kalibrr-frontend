import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Halaman Tidak Ditemukan - Kalibrr</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        ></link>
      </Helmet>
      <div className="flex flex-col mx-auto w-screen h-screen bg-slate-300 items-center justify-center px-2">
        <img src={"/assets/404.png"} alt="Halaman tidak ditemukan" />
        <p className="text-xl md:text-4xl text-center font-bold">
          Ups! Halaman yang kamu akses tidak ditemukan.
        </p>
        <p className="md:text-2xl text-center mt-2">
          Silahkan periksa URL kamu, atau kembali ke
          <Link to="/" className="text-blue-700 hover:underline">
            {" "}
            beranda
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
