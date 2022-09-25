import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../asset/imagenes/res-logo.png";

import "../../styles/footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg="3" md="4" sm="6">
        <div className=" footer__logo text-start">
          <img src={logo} alt="logo" />
          <h5>Tasty Food</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, est!
          </p>
        </div>
        </Col>

        <Col lg="3" md="4" sm="6">
          <h5 className='footer__title'>Delivery</h5>
          <ListGroup className='delivery__time-list'>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Lunes a Viernes</span>
              <p>10:00 - 15:00pm</p>
            </ListGroupItem>

            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Sábados y Domingos</span>
              <p>Todo el día</p>
            </ListGroupItem>

          </ListGroup>
        </Col>

        <Col lg="3" md="4" sm="6">
        <h5 className='footer__title'>Contacto</h5>
          <ListGroup className='delivery__time-list'>

          <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <p>Location: Córdoba, Sylhet-5000 Argentina</p>
            </ListGroupItem>

            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Teléfono: 0171234578</span>
            </ListGroupItem>

            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Email: exapmple@example.com</span>
              
            </ListGroupItem>

          </ListGroup>
        </Col>

        <Col lg="3" md="4" sm="6">
        <h5 className='footer__title'>Newsletter</h5>
        <p>Suscribite a nuestro newsletter</p>
        <div className="newsletter">
          <input type="email" placeholder='dirección de email' />
          <span><i class="ri-send-plane-line"></i></span>
        </div>
        </Col>
      </Row>

      <Row className='mt-5' >
        <Col lg="6" md="6">
          <p className='copyright__text'>Copyright Villalba - Argentina - @Nucba ✌ - 2022</p>
        </Col>
        <Col lg="6" md="6">
          <div className="social__links d-flex align-items-center gap-4 justify-content-end">
            <p className='m-0' >Seguinos: </p>
            <span> <Link to="https://www.instagram.com"><i class="ri-instagram-line"></i></Link></span>
            <span><Link to="https://www.facebook.com"><i class="ri-facebook-line"></i></Link></span>
            <span><Link to="https://www.youtube.com"><i class="ri-youtube-line"></i></Link></span>
            <span><Link to="https://www.linkedin.com"><i class="ri-linkedin-line"></i></Link></span>
          </div>
        </Col>
      </Row>
    </Container>

  </footer>
  
}

export default Footer;