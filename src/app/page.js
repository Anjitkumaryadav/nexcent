import Banner from "@/components/banner/Banner";
import Client from "@/components/Client/Client";
import Community from "@/components/Community/Community";
import Design from "@/components/Design/Design";
import Footer from "@/components/Footer/Footer";
import Helping from "@/components/Helping/Helping";
import Marketing from "@/components/Marketing/Marketing";
import Navbar from "@/components/Navbar/Navbar";
import Suscipit from "@/components/Suscipit/Suscipit";
import Tim from "@/components/Tim/Tim";
import Unseen from "@/components/Unseen/Unseen";
import Image from "next/image";

export default function Home() {
  return (
    <div className="dark:bg-dark ">
      <Navbar/>

      <Banner/>
      
      <Client/>
      <Community/>
      <Unseen/>
      <Helping/>
      <Design/>
      <Tim/>
      <Marketing/>
      <Suscipit/>
      <Footer/>
    </div>
  );
}
