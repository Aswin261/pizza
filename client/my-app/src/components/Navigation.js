import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from "../asset/Logo.png"
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter as Router,Routes, Route,Link} from "react-router-dom";

import BuildPizza from './BuildPizza';
import OrderPizza from './OrderPizza';
import Home from './Home';
import ShoppingCart from './ShoppingCart';

class Navigation extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navbar style={{ height:'40px' }} collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Pizzeria</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"}><img style={{ width: 35, height: 35 }} src={Logo} alt="/"/></Nav.Link>
            <Nav.Link as={Link} to={"/OrderPizza"}>Order Pizza</Nav.Link>
            <Nav.Link as={Link} to={"/BuildPizza"}>Build Ur Pizza</Nav.Link>
          </Nav>
          <Nav className="navbar-nav text-right">
          <Nav.Link as={Link} to={"/ShoppingCart"}> <Button variant="warning" size="md" style={{ color:"white" }}><FaShoppingCart/>Shopping cart</Button>
          </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
      </div>
      <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/" element={
                <>
                  <Navigation />
                  <Home />
                </>
              } /> */}
        <Route path="/BuildPizza" element={<BuildPizza/>} />
        <Route path="/OrderPizza" element={<OrderPizza/>} />
        <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
        </Routes>
      </div>
      </Router>
    );
  }
}

export default Navigation;