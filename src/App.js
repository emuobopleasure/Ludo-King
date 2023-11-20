import ContactCard from "./components/ContactCard";
import DesktopSection from "./components/DesktopSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import SideBar from "./components/SideBar";


function App() {
  return (
    <>
      <div className="app mobile-section lg:hidden">
        <section className="upper-section bg-[#FEAD3A]">
          <Header />
          <HeroSection />
        </section>
        <section className="lower-section bg-[#0F002B] px-[29px] pb-[119px]">
          <MainSection />
          <ContactCard />
        </section>

      </div>
      <div className="desktop-section hidden lg:flex items-start">
        <SideBar />
        <div>
          <DesktopSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
