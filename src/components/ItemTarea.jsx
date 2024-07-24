import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({itemTarea, borrarTareaProps}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">{itemTarea}<Button variant="danger" onClick={()=>borrarTareaProps(itemTarea)}>Borrar</Button>
        
        </ListGroup.Item>
    );
};

export default ItemTarea;