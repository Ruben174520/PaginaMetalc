import {
  Form,
  FormGroup,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import axios from "axios";
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from "react";
const Formulario = ({ materialSelecto }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState('')
  const [state, handleSubmit] = useForm("xlekkpqg");
  const [material, setMaterial] = useState("")
  const [telefono, setTelefono] = useState("")
  const [cantidad, setCantidad] = useState(0)
  const [descripcion, setDescripcion] = useState("")
  console.log(materialSelecto);
  useEffect(() => {
    if (materialSelecto != null){
      setMaterial(materialSelecto.nombre)
      setDescripcion(materialSelecto.descripcion)
    }
  },[materialSelecto]);
  
  // setMessage("Nombre: " + name + " " + "Telefono: " + telefono + " "+
  // "Material que deseo vender: " + material + " " + "Cantidad: " + cantidad + " "+
  // "Descripcion: " + descripcion)
  const cambiaMaterial =(e) =>{
    setMaterial(e)
    setMessage(
        "Material que deseo vender: " + material + " " + "Cantidad: " + cantidad + " "+
        "Descripcion: " + descripcion)
  }
  const cambiaCantidad =(e) =>{
    setCantidad(e)
    setMessage(
        "Material que deseo vender: " + material + " " + "Cantidad: " + cantidad + " "+
        "Descripcion: " + descripcion)
  }
  const cambiaDescripcion =(e) =>{
    setDescripcion(e)
    setMessage(
        "Material que deseo vender: " + material + " " + "Cantidad: " + cantidad + " "+
        "Descripcion: " + descripcion)
  }
  const cambiaMensaje = (e) =>{
    setMessage(
    "Material que deseo vender: " + material + " " + "Cantidad: " + cantidad + " "+
    "Descripcion: " + descripcion + " " + "MAS: " + e)
    console.log(message)
  }
  if (state.succeeded) {
    return <p>FORMULARIO ENVIADO!</p>;
}
  return (
    <Form onSubmit={handleSubmit} className="p-6 border-2  shadow-2xl">
      <FormGroup controlId="formBasicEmail" className="flex flex-wrap   ">
        <Form.Label className="w-full">Nombre:</Form.Label>
        <FormControl
          type="text"
          placeholder="Ingresa Nombre"
          name= "name"
          onChange={(e) => setName(e.target.value)}
          className="border-2 w-full p-2"
        />
      </FormGroup>
      <FormGroup>
        <Form.Label className="w-full">Correo:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Ingresa Email"
          className="w-full border-2 p-2"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Text className="text-muted text-gray-300">
          Nunca compartiremos tu email con nadie más
        </Form.Text>
      </FormGroup>
      <FormGroup controlId="formBasicEmail" className="flex flex-wrap   ">
        <Form.Label className="w-full">Teléfono:</Form.Label>
        <FormControl
          type="phone"
          name="phone"
          placeholder="Ingresa teléfono"
          className="border-2 w-full p-2"
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup controlId="formBasicPhone" className="flex flex-wrap   ">
        <Form.Label className="w-full">Empresa:</Form.Label>
        <FormControl
          type="text"
          placeholder="Empresa proveniente (Solo si aplica)"
          className="border-2 w-full p-2"
          
        />
      </FormGroup>
      <FormGroup controlId="formBasicEmail" className="flex flex-wrap   ">
        <Form.Label className="w-full">Material:</Form.Label>
        <FormGroup className="w-full flex ">
          {materialSelecto == null ? (
            <FormControl
              type="text"
              placeholder="Tipo"
              onChange={(e) => cambiaMaterial(e.target.value)}
              className="border-2 w-full p-2"
            />
          ) : (
            <FormControl
              type="text"
              placeholder="Tipo"
              value={materialSelecto.nombre}
              onChange={(e) => cambiaMaterial(e.target.value)}
              className="border-2 w-full p-2"
            />
          )}
          <FormControl
            type="text"
            placeholder="Cantidad"
            required
            onChange={(e) => cambiaCantidad(e.target.value)}
            className="border-2 w-full p-2"
          />
        </FormGroup>
        <Form.Text className="text-muted text-gray-300">
          *La cantidad ingresada debe ser en kilos
        </Form.Text>
      </FormGroup>
      <FormGroup>
        <Form.Label className="w-full">Descripcion:</Form.Label>
        {materialSelecto == null ? (
          <Form.Control
            type="textarea"
            placeholder="Descripción"
            onChange={(e) => cambiaDescripcion(e.target.value)}
            className="w-full border-2 p-2"
            required
          />
        ) : (
          <Form.Control
            type="textarea"
            placeholder="Descripción"
            className="w-full border-2 p-2"
            value={materialSelecto.descripcion}
            onChange={(e) => cambiaDescripcion(e.target.value)}
            required
          />
        )}
        <Form.Text className="text-muted text-gray-300">*Opcional</Form.Text>
      </FormGroup>
      <FormGroup controlId="formBasicEmail" className="flex flex-wrap   hidden">
        <Form.Label className="w-full">Teléfono:</Form.Label>
        <FormControl
            type="text"
          name="message"
          value={message}
          className="border-2 w-full p-2"
          onChange={(e) => cambiaMensaje(e.target.value)}
          required
        />
      </FormGroup>
      <Button
        variant="primary"
        type="submit"
        disabled={state.submitting}
        className="bg-[#083552] p-1 rounded-md my-2 w-full hover:bg-[#8bba1f] animate-pulse border-none"
      >
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;
