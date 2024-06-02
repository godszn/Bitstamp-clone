import Image from "next/image";
import './globals.css'
import HeaderComponent from "../../Components/HeaderComponent";
import SliderComponent from "../../Components/SliderComponent";
import SwiperComponent from "../../Components/SwiperComponent";
import GuaranteeComponent from "../../Components/GuaranteeComponent";
import ExplorerComponent from "../../Components/ExplorerComponent";
import PlatformComponent from "../../Components/PlatformComponent";
import TradingComponent from "../../Components/TradingComponent";
import CryptoComponent from "../../Components/CryptoComponent";
import InstitutionComponent from "../../Components/InstitutionComponent";
import StepsComponent from "../../Components/StepsComponent";
import FooterComponent from "../../Components/FooterComponent";

export default function Home() {
  return (
    <main className="main" style={{backgroundColor:' white'}}>
    <HeaderComponent/>
    <SliderComponent/>
    <SwiperComponent/>
   {/* <GuaranteeComponent/>
    <ExplorerComponent/>
    <PlatformComponent/>
    <TradingComponent/>
    <CryptoComponent/>
    <InstitutionComponent/>
    <StepsComponent/>
    <FooterComponent/> */}
    </main>
  );
}
