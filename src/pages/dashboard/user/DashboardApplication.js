import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import NavbarUserLayout from "./components/NavbarUserLayout";

const DashboardApplication = () => {
  return (
    <NavbarUserLayout>
      <div className="w-full flex justify-center bg-[#fafafa]">
        <div className="w-full h-fit border-b-[1px] flex items-center py-3 md:py-0 md:px-5">
          <h1 className="text-3xl font-bold py-5 hidden md:block w-64">
            Lamaran
          </h1>
          <div className="w-full px-5 mx-auto">
            <div className="w-auto bg-[#edf2f7] flex justify-between rounded-full rouded-full overflow-hidden">
              <input
                type="text"
                className="w-full bg-[#edf2f7] py-3 px-5 outline-none"
                placeholder="Cari Status Lamaran Pekerjaan"
              />
              <MagnifyingGlassIcon className="w-6 mr-5" />
            </div>
          </div>
        </div>
      </div>
    </NavbarUserLayout>
  );
};

export default DashboardApplication;
