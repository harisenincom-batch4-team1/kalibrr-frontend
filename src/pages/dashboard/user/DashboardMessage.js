import NavbarUserLayout from "./components/NavbarUserLayout";

const DashboardMessage = () => {
  return (
    <NavbarUserLayout>
      <div className="w-full flex justify-center  bg-[#fafafa]">
        <div className="w-full">
          <h1 className="text-3xl font-bold py-5 px-3 border-b-[1px]">
            Pesan
          </h1>
        </div>
      </div>
    </NavbarUserLayout>
  );
};

export default DashboardMessage;
