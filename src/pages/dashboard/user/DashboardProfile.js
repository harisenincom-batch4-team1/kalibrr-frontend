import NavbarUserLayout from "./components/NavbarUserLayout";

const DashboardProfile = () => {
  return (
    <NavbarUserLayout>
      <div className="w-full flex justify-center  bg-[#fafafa]">
        <div className="w-full">
          <h1 className="text-3xl font-bold py-5 px-3 border-b-[1px]">
            Profil
          </h1>
        </div>
      </div>
    </NavbarUserLayout>
  );
};

export default DashboardProfile;
