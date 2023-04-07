"use client";

import { TarjetaMaterial } from "@/components/TarjetaMaterial";
import Video from "@/components/Video";
import { useMaterials } from "@/context/MaterialContext";
// import { useTasks } from "@/context/TaskContext"
// import { TaskCard } from "@/components/TaskCard"
import styles from "../components/Video.module.css";
function page() {
  const { materials } = useMaterials();
  console.log(materials);
  // const { task } = useTasks()
  // console.log(task)
  return (
    <div className="flex flex-wrap"> 
      <div className={styles.videoWrapper}>
        <Video />
      </div>
      <div  className="w-screen h-16 text-5xl text-center my-4" >
        <h1>
          ESPECIALIZADOS EN EL RECICLAJE 
        </h1>
      </div>
      <div className="w-screen h-2/4 flex items-stretch flex-wrap justify-evenly" >
        {materials.map((material) => (
          <TarjetaMaterial material={material} />
        ))}
      </div>
    </div>
  );
}

export default page;
