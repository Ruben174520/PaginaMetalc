import React from "react";
import styles from "./Video.module.css";

const Video = () => {
  return (
    <div className={styles.videoWrapper}>
      <video className="video-bg" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
