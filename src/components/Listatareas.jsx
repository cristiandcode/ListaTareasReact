import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const Listatareas = ({ tareasProps }) => {
    return (
        <ListGroup>
          {
            tareasProps.map((tarea, indice)=> <ItemTarea key={indice} itemTarea={tarea}></ItemTarea>)
          }
          
        </ListGroup>
    );
};

export default Listatareas;