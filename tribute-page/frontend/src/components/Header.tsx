import { Container, Navbar } from "react-bootstrap"

export const Header: React.FC = () => {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand href="#">
          Navbar
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}