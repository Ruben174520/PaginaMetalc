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
    <div className="flex"> 
      <div className={styles.videoWrapper}>
        <Video />
      </div>
      <div className="w-screen h-2/4 mt-56">
        {materials.map((material) => (
          <TarjetaMaterial material={material} />
        ))}
      </div>
    </div>
  );
}

export default page;
