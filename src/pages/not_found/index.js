const NotFound = () => {
  return (
    <div className="flex flex-col mx-auto w-screen h-screen bg-slate-300 items-center justify-center px-2">
      <img 
      src={"/assets/404.png"} 
      alt="Halaman tidak ditemukan" />
      <p className="text-xl md:text-4xl text-center font-bold">Ups! Halaman yang kamu akses tidak ditemukan.</p>
      <p className="md:text-2xl text-center mt-2">Silahkan periksa URL kamu, atau kembali ke
        <a 
        href="/"
        className="text-blue-700 hover:underline"> beranda</a>
      </p>
    </div>
  );
};

export default NotFound;
