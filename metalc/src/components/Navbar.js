"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../icon/logo.png";
import lupa from "../icon/boxicons/svg/regular/bx-search-alt.svg";
import mapa from "../icon/boxicons/svg/regular/bx-map.svg";
import styles from "./Video.module.css"

export function Navbar() {
  return (
    <header className="flex justify-between py-4 border-b-2 border-white text-lg">
      <div className="flex">
        <div className="px-6">
          <Image src={logo} width={72} height={72} alt="Metalc Logo"/>
        </div>
        <div className="flex items-center px-6 mx-10  max-h-14">
          <Link href={"/"} className="px-6 hover:border-b-4 border-cyan-800 font-semibold">
            <h1 className="my-4">Servicios</h1>
          </Link>
          <Link href={"/"} className="px-6 hover:border-b-4 border-cyan-800 font-semibold">
            <h1 className="my-4">Cotizador</h1>
          </Link>
          <Link href={"/"} className="px-6 hover:border-b-4 border-cyan-800 font-semibold">
            <h1 className="my-4">¿Quienes somos?</h1>
          </Link>
          <Link href={"/"} className="px-6 hover:border-b-4 border-cyan-800 font-semibold">
            <h1 className="my-4">Preguntas frecuentes</h1>
          </Link>
        </div>
      </div>
      <div className="flex items-center mx-10">
        <Link href="/">
          <Image src={mapa} height={32} width={32} className="mx-2"/>
        </Link>
        <Link href="/">
          <Image src={lupa} height={32} width={32} />
        </Link>
      </div>
    </header>
    //   <nav class="menu">
    //   <div class="centralizar">
    //     <label class="logo">
    //       <img src="../img/logo.png" class="img-logo"></img>
    //     </label>
    //     <ul class="lista-nav">
    //       <li>Servicios</li>
    //       <li>Cotizador</li>
    //       <li>¿Quienes somos?</li>
    //       <li>Preguntas frecuentes</li>
    //     </ul>
    //     <div class="icons">
    //       <ul class="iconos">
    //         <li>
    //           <box-icon name="search-alt" size="md"></box-icon>
    //         </li>
    //         <li>
    //           <box-icon name="map" size="md"></box-icon>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    // <div class="vdmp4">
    //   <video
    //     src="../video/videoRecicle.mp4"
    //     width="100%"
    //     height="100%"
    //     autoplay
    //     loop
    //   ></video>
    // </div>
  );
}
// export function Navbar() {
//   const router = useRouter();

//   return (
//     <header>
//       <Link href="/">
//         <h1>Task App</h1>
//       </Link>
//       <div>
//         <button onClick={() => router.push("/new")}>Add Task</button>
//       </div>
//     </header>
//   );
// }
