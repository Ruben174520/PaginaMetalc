import Link from "next/link"
import Image from "next/image";
import styles from "./Footer.module.css"
import face from "../icon/boxicons/svg/logos/bxl-facebook-circle.svg";
import insta from "../icon/boxicons/svg/logos/bxl-instagram.svg";
import twitter from "../icon/boxicons/svg/logos/bxl-twitter.svg";
import whats from "../icon/boxicons/svg/logos/bxl-whatsapp.svg";
import ubi from "../icon/boxicons/svg/regular/bx-mapGreen.svg";
import reloj from "../icon/boxicons/svg/regular/bx-time-fiveGreen.svg";
import tel from "../icon/boxicons/svg/regular/bx-phone-callGreen.svg";
import email from "../icon/boxicons/svg/regular/bx-envelopeGreen.svg";


function Footer(){
    return(
        <footer className={styles.footer}>
        <div className={styles.containerFather}>
          <div className={styles.bord}>
            <div className={styles.hijo}>
              <div className={styles.adaptar}>
                <li className={styles.titulo}><Image src={ubi} height={40} width={40} className="mx-2"/></li>
                <li><Link className={styles.a} href="#">Av. Seminario 256 Fracc, Las Mercedes, 78394 San Luis, S.L.P.</Link></li>
              </div>            
            </div>
            <div className={styles.hijo}>
              <div className={styles.adaptar}>
                <li className={styles.titulo}><Image src={reloj} height={35} width={35} className="mx-2"/></li>
                <li>Lun-Vie:8:00 hrs a 18:00 hrs Sabado: 8:00 hrs a 14:00 hrs</li>
              </div>
            </div>
            <div className={styles.hijo}>
              <div className={styles.adaptar}>
                <li className={styles.titulo}><Image src={tel} height={30} width={30} className="mx-2"/></li>
                <li className={"color: gray"}>Whatsapp: 444 655 5651 Oficina: 444 111 1111</li>
              </div>
            </div>
            <div className={styles.hijo}>
              <div className={styles.adaptar}>
                <li className={styles.titulo}><Image src={email} height={30} width={30} className="mx-2"/></li>
                <li>vero.metalc@gmail.com</li>
              </div>
            </div>
            </div>
          </div >
          
          <div className={styles.redes}>
            <div className={styles.redHijo}>
              <li className={styles.redHijoli}><Link href=""><Image src={face} typeof="logo" height={25} width={25} className={styles.logo} /></Link></li>
              <li className={styles.redHijoli}><Link href=""><Image src={insta} height={25} width={25} className={"color='#ffffff'"} /></Link></li>
              <li className={styles.redHijoli}><Link href=""><Image src={twitter} height={25} width={25} className={"color='#ffffff'"} /></Link></li>
              <li className={styles.redHijoli}><Link href=""><Image src={whats} height={25} width={25} className={"color='#ffffff'"} /></Link></li>            
            </div>
          </div>
          
        </footer>
    )
}

export default Footer

