import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
// alt route ların nereye gideceğini belli etmek

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900  dark:text-gray-100 transition-color flex flex-col">
      <Header />

      {/* Sayfa içeriği buraya gelicek */}
      <main className="container flex-1 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
