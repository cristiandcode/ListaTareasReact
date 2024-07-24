import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({itemTarea}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">{itemTarea}<Button variant="danger">Borrar</Button>
        
        </ListGroup.Item>
    );
};

export default ItemTarea;