import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import face from "../icon/boxicons/svg/logos/bxl-facebook-circle-black.svg";
import insta from "../icon/boxicons/svg/logos/bxl-instagram.svg";
import twitter from "../icon/boxicons/svg/logos/bxl-twitter.svg";
import whats from "../icon/boxicons/svg/logos/bxl-whatsapp-black.svg";
import ubi from "../icon/boxicons/svg/regular/bx-mapGreen.svg";
import reloj from "../icon/boxicons/svg/regular/bx-time-fiveGreen.svg";
import tel from "../icon/boxicons/svg/regular/bx-phone-callGreen.svg";
import email from "../icon/boxicons/svg/regular/bx-envelopeGreen.svg";
import logo from "../icon/logo.png";

function Footer() {
  return (
    <footer className="md:h-[150px] text-xs md:text-sm">
      <div className="w-[100%] bg-[#EEEE] flex justify-center align-center
      md:h-[120px]">
        <div className="flex flex-wrap border-b-[1px] border-b-black justify-between align-middle mt-5
        md:mx-24 md:mt-4 md:flex-nowrap" id="fid">
          <div className="text-center flex flex-wrap text-black justify-between w-[100%]
          md:w-[23%] md:flex-nowrap ">
            <div className="flex m-1 justify-center w-[100%] align-middle jus md:mt-5">
              <li className="pb-2 no-underline list-none">
                <Image
                  src={ubi}
                  height={40}
                  width={40}
                  className="mx-2"
                  alt="imagen"
                />
              </li>
              <li className="no-underline list-none mt-2">
                <Link className="no-underline list-none" href="#">
                   Boulevard Cd. Fernandez El refugio, 79657 Rio Verde, S.L.P.
                </Link>
              </li>
            </div>
          </div>
          <div className="text-center flex flex-wrap text-black  justify-between w-[100%]
          md:w-[23%] md:flex-nowrap">
            <div className="flex m-1 justify-center w-[100%] md:mt-5">
              <li className="pb-2 no-underline list-none">
                <Image
                  src={reloj}
                  height={35}
                  width={35}
                  className="mx-2"
                  alt="imagen"
                />
              </li>
              <li className="no-underline list-none mt-2
              md:mt-1">Lun-Vie:7:00-14:00 y 15:00-18:30 Sabado: 7:00 hrs a 13:00 hrs</li>
            </div>
          </div>
          <div className="text-center flex flex-wrap text-black justify-between w-[100%]
          md:w-[23%] md:flex-nowrap">
            <div className="flex m-1 justify-center w-[100%] md:mt-5">
              <li className="pb-2 no-underline list-none">
                <Image
                  src={tel}
                  height={30}
                  width={30}
                  className="mx-2"
                  alt="imagen"
                />
              </li>
              <li className="no-underline list-none mt-2">
                Whatsapp: 487 121 1657 
              </li>
            </div>
          </div>
          <div className="text-center flex flex-wrap text-black justify-evenly w-[100%]
          md:w-[23%] md:flex-nowrap">
            <div className="flex m-1 justify-center  w-[100%] md:mt-5">
              <li className="pb-2 no-underline list-none">
                <Image
                  src={email}
                  height={30}
                  width={30}
                  className="mx-2"
                  alt="imagen"
                />
              </li>
              <li className="no-underline list-none mt-2
              md:mt-1">metalc_yes@hotmail.com</li>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EEEE] text-black align-middle text-center px-5 flex md:flex-none md:w-[100%]">
        <div className="flex  w-[100%] py-1 md:text-base md:mx-24 md:py-3 md:w-[70%]">
          <Image src={logo} width={60} height={60} />
          <h1 className="font-bmw self-center text-xs md:text-base md:ml-6">
            Gente como tú, por un futuro sustentable
          </h1>
        </div>
        <div className="bg-[#EEEE] justify-end hidden md:mx-24 md:py-3 md:flex">
          <li className="list-none no-underline inline pr-2">
            <Link href="https://www.facebook.com/people/Metalc-San-Luis-Potosi/100010252508283/">
              <Image
                src={face}
                typeof="logo"
                height={25}
                width={25}
                className=""
                alt="imagen"
              />
            </Link>
          </li>
          <li className="list-none no-underline inline pr-2">
            <Link href="https://wa.link/q261l7">
              <Image
                src={whats}
                height={25}
                width={25}
                className={"fill-black]"}
                alt="imagen"
              />
            </Link>
          </li>
        </div>
      </div>
      <div className="bg-[#EEEE] justify-center flex md:mx-24 md:py-3 md:hidden">
          <li className="list-none no-underline inline pr-2">
            <Link href="">
              <Image
                src={face}
                typeof="logo"
                height={25}
                width={25}
                className=""
                alt="imagen"
              />
            </Link>
          </li>
          <li className="list-none no-underline inline pr-2">
            <Link href="">
              <Image
                src={whats}
                height={25}
                width={25}
                className={"fill-black]"}
                alt="imagen"
              />
            </Link>
          </li>
        </div>
    </footer>
  );
}

export default Footer;
