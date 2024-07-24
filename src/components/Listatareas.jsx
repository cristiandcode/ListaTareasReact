import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const Listatareas = ({ tareasProps, borrarActividadProps }) => {
    return (
        <ListGroup>
          {
            tareasProps.map((tarea, indice)=> <ItemTarea key={indice} itemTarea={tarea} borrarTareaProps={borrarActividadProps}></ItemTarea>)
          }
          
        </ListGroup>
    );
};

export default Listatareas;