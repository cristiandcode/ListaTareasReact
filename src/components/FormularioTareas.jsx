import { Button, Form } from "react-bootstrap";
import Listatareas from "./Listatareas";
import { useEffect ,useState } from "react";

const FormularioTareas = () => {
  const [nombreTarea, setNombreTarea ] = useState('')
  const [tareas, setTareas] = useState( JSON.parse(localStorage.getItem('listaTareasKey')) || [] );



  //Aqui agrego el ciclo de vida de un componente useEffect
  useEffect(()=>{
    //aqui agregar el codigo que quiero ejecutar en el montaje y actualizacion del componente
    console.log('Estoy dentro del useEffect')
    localStorage.setItem('listaTareasKey', JSON.stringify(tareas))
  }, [tareas])

  const handleSubmit = (e)=> {
    e.preventDefault();
    setTareas([...tareas, nombreTarea]); // Operador spread
    //limpiar el input
    setNombreTarea('');
  }

  const borrarTarea = (nombre) =>{
    const tareasActualizadas = tareas.filter((itemTarea) => itemTarea !== nombre) 
    //Actualizar el state tareas. Siempre usando el SET
    setTareas(tareasActualizadas);
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ej: Añade tu nueva tarea"
            minLength={3}
            maxLength={50}
          onChange= {(e)=> setNombreTarea(e.target.value)}
          value = {nombreTarea}
          />
          <Button variant="primary" className="mx-2" type="submit">Enviar</Button>
        </Form.Group>
      </Form>
      <Listatareas tareasProps={tareas} borrarActividadProps={borrarTarea} ></Listatareas>
    </section>
  );
};

export default FormularioTareas;
