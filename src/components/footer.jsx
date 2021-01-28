import { Navbar, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default function Footer() {
  return (
    <Navbar
      variant="light"
      bg="light"
      style={{
        "align-items": "center",
        "height": "7vh",
        "min-height": "55px",
        "min-width": "100",
        "display": "flex",
      }}
    >
      <div style={{ "width": "50vw" }}>
        <Navbar.Brand href="#">inspiration homes</Navbar.Brand>
      </div>
      <div style={{ "width": "50vw" }}>
        <Button style={{ "float": "right", "margin-right": "5px" }}>Login</Button>
        <Button style={{ "float": "right", "margin-right": "5px" }}>
          Sign Up
        </Button>
      </div>
    </Navbar>
  );
}
