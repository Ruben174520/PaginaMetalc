import styles from "./Video.module.css";
import vid from '../img/Inicio.mp4';
const Video = () => {
  return (
    <video className={styles.video} controls={false} autoPlay loop muted>
      <source
        src={vid}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
