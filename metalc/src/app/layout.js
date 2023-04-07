"use client"
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { TaskProvider } from "@/context/TaskContext";
import Video from "@/components/Video";
import styles from "../components/Video.module.css"
import Mapa from "@/components/Mapa";
import Foot from "@/components/Footer"
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//Contiene todas las paginas, lo que se agregue aqui aparecera en todas las paginas
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-300">
        <div className={"mx-14"}>
          <TaskProvider>
            <Navbar />  
          </TaskProvider>
        </div>
        <Foot />
      </body>
    </html>
  );
}
