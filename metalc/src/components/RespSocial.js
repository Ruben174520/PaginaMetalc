"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Image from "next/image";
import Foto from "../img/cobre.jpg";
import reciclar from "../img/reciclarM.png";
import reutilizar from "../img/filosofia.jpg";
import reducir from "../img/reducirM.jpg";
import recuperar from "../img/recuperarM.jpg";
import { motion } from "framer-motion";

function RespSocial() {
  return (
    <div className="h-[90%] block px-[50px] mt-5 mb-10">
      <div className="font-bmw  flex justify-center  mb-7 md:text-4xl ">
        <h1 className="border-b-8 border-[#083552] text-4xl">
          RESPONSABILIDAD SOCIAL
        </h1>
      </div>

      <motion.div
        className="flex flex-wrap justify-between h-[80%] md:flex-none"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        
      >
        <Card className="my-3 transition-transform duration-500 ease-out hover:-translate-y-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] md:w-72 xl:w-60 lg:w-60">
          <Image
            variant="top"
            src={reciclar}
            className="h-[180px] object-cover"
            alt="imagen"
          />
          <Card.Body>
            <Card.Title className="mb-4 border-b-4 border-[#8bba1f] ">
              Reciclar
            </Card.Title>
            <Card.Text className="font-bmw mb-4">
              En Metalce nos comprometemos a darle el tratamiento correcto a los
              materiales para reducir la emisión de gases y sustancias tóxicas.
            </Card.Text>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                href="#materialReciclado"
                size="sm"
                className="text-white font-bmw bg-[#083552] hover:bg-[#8bba1f] border-none"
              >
                Materiales que reciclamos
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="my-3 transition-transform duration-500 ease-out hover:-translate-y-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] md:w-72 xl:w-60 lg:w-60">
          <Image
            variant="top"
            src={reutilizar}
            className="h-[180px] object-cover"
            alt="imagen"
          />
          <Card.Body>
            <Card.Title className="mb-4 border-b-4 border-[#8bba1f]">
              Reutilizar
            </Card.Title>
            <Card.Text className="font-bmw mb-4">
              En Metalc nos comprometemos a canalizar correctamente tus
              materiales para poder darles una segunda vida y asi favorecer al
              medio ambiente.
            </Card.Text>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                href="/cotizador"
                size="sm"
                className="text-white font-bmw bg-[#083552] hover:bg-[#8bba1f] border-none"
              >
                Cotizador de material
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="my-3 transition-transform duration-500 ease-out hover:-translate-y-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] md:w-72 xl:w-60 lg:w-60">
          <Image
            variant="top"
            src={reducir}
            className="h-[180px] object-cover"
            alt="imagen"
          />
          <Card.Body>
            <Card.Title className="mb-4 border-b-4 border-[#8bba1f]">
              Reducir
            </Card.Title>
            <Card.Text className="font-bmw mb-4">
              Dentro de las instalaciones de Metalc, ayudamos a la reducción de
              los servicios básicos con los que cuenta la empresa.(Luz, Agua,
              Gas).
            </Card.Text>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                href="/mapa"
                size="sm"
                className="text-white font-bmw bg-[#083552] hover:bg-[#8bba1f] border-none"
              >
                Contáctanos
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="my-3 transition-transform duration-500 ease-out hover:-translate-y-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] md:w-72 xl:w-60 lg:w-60">
          <Image
            variant="top"
            src={recuperar}
            className="h-[180px] object-cover"
            alt="imagen"
          />
          <Card.Body>
            <Card.Title className="mb-4 border-b-4 border-[#8bba1f]">
              Recuperar
            </Card.Title>
            <Card.Text className="font-bmw mb-4">
              En nuestra empresa, estamos comprometidos con reducir nuestra
              huella ambiental y promover prácticas sostenibles en cada aspecto
              de nuestro negocio.
            </Card.Text>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                href="/servicios"
                size="sm"
                className="text-white font-bmw bg-[#083552] hover:bg-[#8bba1f] border-none"
              >
                Servicios
              </Button>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
}

export default RespSocial;
