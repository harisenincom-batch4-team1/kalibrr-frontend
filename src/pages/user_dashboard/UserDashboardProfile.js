import HeaderTitle from "../../components/dashboard_user/header/HeaderTitle";
import UserDashboardLayout from "../../layouts/DashboardLayoutUser";
import CardBasicInformation from "../../components/dashboard_user/profile/CardBasicInformation";
import CardCV from "../../components/dashboard_user/profile/CardCV";

const UserDashboardProfile = () => {
  return (
    <UserDashboardLayout>
      <HeaderTitle title={"Profil"} />
      <div className="max-w-full h-[95%] pb-16 mx-auto px-5 py-5 space-y-5 overflow-hidden overflow-y-scroll scrollbar-hide">
        <CardBasicInformation />
        <CardCV />
      </div>
    </UserDashboardLayout>
  );
};

export default UserDashboardProfile;
