import { Button, Form } from "react-bootstrap";
import Listatareas from "./Listatareas";
import { useState } from "react";

const FormularioTareas = () => {
  const [nombreTarea, setNombreTarea ] = useState('')
  const [tareas, setTareas] = useState([])

  const handleSubmit = (e)=> {
    e.preventDefault();
    setTareas([...tareas, nombreTarea]); // Operador spread
    //limpiar el input
    setNombreTarea('');
  }
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            minLength={3}
            maxLength={50}
          onChange= {(e)=> setNombreTarea(e.target.value)}
          value = {nombreTarea}
          />
          <Button variant="primary" className="mx-2" type="submit">Enviar</Button>
        </Form.Group>
      </Form>
      <Listatareas ></Listatareas>
    </section>
  );
};

export default FormularioTareas;
