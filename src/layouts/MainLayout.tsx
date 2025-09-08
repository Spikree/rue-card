import MainComponent from "@/components/MainComponent";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <MainComponent/>

      <div className="flex-grow bg-gray-100 p-4 sm:p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
