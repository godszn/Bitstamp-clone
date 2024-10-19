'use client'
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
import Notif from "../../Components/Notif";
import { useState } from "react";

export default function Home() {
  const [showNotif, setNotif] = useState(false);
  const [isMenuOpen , setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((!isMenuOpen));
  }

  const handleNotif = () => {
    setNotif((!showNotif));
  }
  return (
    <main className="main" style={{backgroundColor:' white'}}>
    <HeaderComponent buttonCLick = {handleNotif} menuOpen = {isMenuOpen} toggleMenu={handleMenu}/>
    <SliderComponent buttonClick = {handleNotif}/>
    <SwiperComponent buttonClick = {handleNotif}/>
    <GuaranteeComponent buttonClick = {handleNotif}/>
    <ExplorerComponent buttonClick = {handleNotif}/>
    <PlatformComponent buttonClick = {handleNotif}/>
    <TradingComponent buttonClick = {handleNotif}/>
    <CryptoComponent buttonClick = {handleNotif}/>
    <InstitutionComponent buttonClick = {handleNotif}/>
    <StepsComponent buttonClick = {handleNotif}/>
    <FooterComponent/>
    { showNotif &&  <Notif buttonClick ={handleNotif}/> }
    </main>
  );
}
