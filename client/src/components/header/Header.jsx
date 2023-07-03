import './header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({title,author}) => {
    return (
    <Navbar className="navbar1" >
      <Container>
        <Navbar.Brand href="#home" >{title}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Author: <a href="https://www.linkedin.com/in/manupaiva73/" target='_blank'>Manuel Paiva</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header