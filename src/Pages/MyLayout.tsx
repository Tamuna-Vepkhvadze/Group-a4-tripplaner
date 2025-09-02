import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const MyLayout = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-8">
        <Outlet />
      </div>
    </main>
  );
};

export default MyLayout;
