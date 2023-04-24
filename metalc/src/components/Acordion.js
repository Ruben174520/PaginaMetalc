import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import icono from "|/boxicons/svg/regular/bx-leaf.svg";
export const Acordion = ({ pregunta, respuesta }) => {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{pregunta}</Accordion.Header>
        <Accordion.Body>
          <div className="flex flex-wrap align-middle justify-between">
          <Image src={icono} height={50} width={50} />
            <p className="w-11/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Acordion;
