import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioTareas from "./components/FormularioTareas";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="my-4 mainPage">
        <h1 className="text-center display-3 text-light">Lista de tareas</h1>
        <FormularioTareas></FormularioTareas>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
