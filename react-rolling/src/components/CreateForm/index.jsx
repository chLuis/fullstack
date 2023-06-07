import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const CreateForm = () => {
  const [dataPokemon, setDataPokemon] = useState(
    // es obligatorio que cuando envie el formulario envie el nombre y el poder
    {
      nombre: "",
      poder: "",
      entrenador: "",
    }
  );
  const [errors, setErrors] = useState({
    message: "",
  });

  const cargarData = (event) => {
    event.preventDefault();
    setDataPokemon({ ...dataPokemon, [event.target.name]: event.target.value });
  };
  const validator = () => {
    const dataRequired = ["nombre", "poder"];

    const mensaje = "carga los datoossss";

    const values = dataRequired.map((item) => dataPokemon[item]);

    const error = values.find((item) => item.length === 0);
    return error !== undefined
      ? setErrors({ message: mensaje })
      : setErrors({ message: "" });
  };

  useEffect(() => {
    validator();
  }, [dataPokemon]);

  return (
    <div>
      <Form className="ps-5">
        <Form.Group className="mb-3">
          <Form.Label>Nombre Pokemon</Form.Label>
          <Form.Control
            name="nombre"
            placeholder="pikachu"
            onChange={() => cargarData(event)}
          />
          <Form.Text className="text-muted">
            ingresa el nombre de tu pokemon
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>poder</Form.Label>
          <Form.Control
            name="poder"
            placeholder="inpact trueno"
            onChange={() => cargarData(event)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </Form>
      <Button
        className=""
        variant="primary"
        disabled={errors.message === "" ? false : true}
      >
        Submit
      </Button>
    </div>
  );
};
