import NavbarUserLayout from "./components/NavbarUserLayout";

const DashboardProfile = () => {
  return (
    <NavbarUserLayout>
      <div className="w-full flex justify-center bg-[#fafafa]">
        <div className="w-full">
          <h1 className="text-xl md:text-3xl font-bold py-5 px-5 border-b-[1px]">
            Halo Andrew Tate 👋
          </h1>
          <div className="max-w-[800px] h-[95%] pb-16 mx-auto px-5 py-5 space-y-5 overflow-hidden overflow-y-scroll scrollbar-hide">
            <div className="w-full rounded-lg overflow-hidden border-[1px] hover:shadow relative">
              <div className="text-white bg-[#0086FF] py-3 px-4 flex justify-between">
                <h1 className="font-semibold text-base md:text-xl">
                  Informasi Dasar
                </h1>
              </div>
              <button className="absolute right-0 top-0 py-3 px-4 text-white font-medium">
                Edit
              </button>
              <div className="bg-white py-3 px-4 md:flex gap-5">
                <div className="rounded-full w-24 h-24 overflow-hidden">
                  <img
                    className="rounded-full w-24"
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Andrew_Tate_on_%27Anything_Goes_With_James_English%27_in_2021.jpg"
                    alt="profile"
                  />
                </div>
                <div className="space-y-1 mt-5 md:mt-0">
                  <p className="font-medium text-2xl">Andrew Tate</p>
                  <p className="text-xl">Sumatera</p>
                  <p>andrew@tate.com</p>
                  <p>082300091823</p>
                </div>
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden border-[1px] hover:shadow">
              <h1 className="text-white font-semibold text-base md:text-xl bg-[#0086FF] py-3 px-4">
                CV
              </h1>
              <div className="bg-white px-4 md:flex gap-5">
                <div className="space-y-3 my-5 md:mt-0 w-full">
                  <label
                    className="block my-2 text-xl font-medium"
                    htmlFor="file_input"
                  >
                    Unggah CV Anda
                  </label>
                  <input
                    className="block w-full text-lg cursor-pointer text-gray-900 border-[1px]"
                    id="file_input"
                    type="file"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavbarUserLayout>
  );
};

export default DashboardProfile;
