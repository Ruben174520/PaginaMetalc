import Slider from "react-slick";
import Image from "next/image";
const SliderComponent = ({ materialSeleccionado }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(materialSeleccionado);
  return (
    <div className="flex flex-wrap">
      {
        materialSeleccionado.imagenes.map((image) => (
          <div>
            <Image src={image} height={25} width={25}/>
          </div>
        ))
      }
    </div>
  );
};

export default SliderComponent;
