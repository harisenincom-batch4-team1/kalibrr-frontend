import { Link } from "react-router-dom";

const SignUp = () => {
    return(
        <div className="flex flex-col gap-20 bg-stone-100 h-full">
            {/* area 1 */}
            <div className="flex flex-col gap-4 h-fit items-center mx-auto mt-28">
                <p className="text-center font-bold text-xl">Selamat datang di Kalibrr!</p>
                <p>Pertama-tama, apa tujuan Anda di sini?</p>
            </div>

            {/* area 2 */}
            <div className="flex flex-row gap-[57px]">
                {/* client */}
                <div className="flex flex-col gap-7 w-96 px-5 py-5 ml-44 bg-white">
                    <div className="w-fit font-semibold text-2xl mt-5 mx-5">
                        <p>Saya sedang mencari pekerjaan</p>
                    </div>

                    <div className="w-fit text-base mx-auto">
                        <p>Buat akun <text className="italic font-semibold">pencari kerja</text></p>
                    </div>

                    <Link to="/user/register" className="mx-auto">
                        <button className="bg-blue-600 text-white py-2 w-72 rounded hover:bg-blue-300 hover:text-blue-700" type="button">
                            MULAI MELIHAT-LIHAT LOWONGAN
                        </button>
                    </Link>

                    <div className="w-fit text-sm mx-5 mb-5">
                        <text>
                            Anda juga dapat mendaftar menggunakan <a href="" className="text-blue-500">Google</a>, <a href="" className="text-blue-500">Apple</a>, atau <a href="" className="text-blue-500">Facebook</a>
                        </text>
                    </div>
                </div>

                {/* divide */}
                <div className="flex flex-col">
                    <div className="flex relative left-1/2 -ml-0.5 w-0.5 h-[139px] bg-gray-300"></div>
                    <div class="flex items-center my-4 mx-5">
                        <p class="text-center font-semibold mx-4 my-0 mb-0">ATAU</p>
                    </div>
                    <div className="flex relative left-1/2 -ml-0.5 w-0.5 h-[139px] bg-gray-300"></div>
                </div>

                {/* company */}
                <div className="flex flex-col gap-7 w-96 px-5 py-5 bg-white">
                    <div className="w-fit font-semibold text-2xl mt-5 mx-5">
                        <p>Saya sedang mencari kandidat</p>
                    </div>

                    <div className="w-fit text-base mx-auto">
                        <p>Buat akun <text className="italic font-semibold">perusahaan</text></p>
                    </div>

                    <Link to="/company/register" className="mx-auto">
                        <button className="bg-green-400 text-white py-2 w-60 rounded mx-auto hover:bg-blue-300 hover:text-blue-700" type="submit">
                            PERMINTAAN UNTUK DEMO
                        </button>
                    </Link>
                </div>
            </div>

            {/* area 3 */}
            <div className="flex flex-col gap-3 h-fit items-center mx-auto">
                <p className="text-center">Sudah mempunyai akun?
                <Link to="/user/login" className="text-blue-500 ml-1 hover:underline">
                    Masuk
                </Link></p>
                <p className="text-xs mb-28">Dengan membuat akun Kalibrr, Anda setuju dengan Syarat dan Ketentuan, Kebijakan Privasi, dan persetujuan pengguna kami.</p>
            </div>
        </div>
    )
}

export default SignUp;