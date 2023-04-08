import Link from "next/link"
import Image from "next/image";
import styles from "./Footer.module.css"
import face from "../icon/boxicons/svg/logos/bxl-facebook-circle.svg";
import insta from "../icon/boxicons/svg/logos/bxl-instagram.svg";
import twitter from "../icon/boxicons/svg/logos/bxl-twitter.svg";


function Footer(){
    return(
        <footer className="font-bmw">
        <div className={styles.containerFather}>
            <div className={styles.hijo}>
              <li className={styles.titulo + "font-weight:bold" }>MENU</li>
                <li><Link href="#">Inicio</Link></li>
                <li><Link href="#">Servicios</Link></li>
                <li><Link href="#">Cotizador</Link></li>
            </div>
            <div className={styles.hijo}>
              <li className={styles.titulo + "font-weight:bold" }>ACERCA DE</li>
                <li><Link href="#">¿Quienes somos?</Link></li>
                <li><Link href="#">Preguntas Frecuentes</Link></li>
                <li><Link href="#">Ubicacion</Link></li>
            </div>
            <div className={styles.hijo}>
              <li className={styles.titulo + "font-weight:bold" }>CONTACTO</li>
              <li className={"color: gray"}>Email: vero.metalce@gmail.com</li>
              <li className={"color: gray"}><Link href="https://metalc.com.mx">Metalc San Luis Potosí</Link></li>
            </div>
          </div>
          <div className={styles.redes}>
            Siguenos en nuestras redes:
            <div className={styles.redHijo}>
              <li><Link href=""><Image src={face} typeof="logo" height={25} width={25} className={styles.logo} /></Link></li>
              <li><Link href=""><Image src={insta} height={25} width={25} className={"color='#ffffff'"} /></Link></li>
              <li><Link href=""><Image src={twitter} height={25} width={25} className={"color='#ffffff'"} /></Link></li>
            </div>
          </div>
        </footer>
    )
}

export default Footer

