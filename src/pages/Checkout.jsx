

import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from '../components/Helmet/Helmet';

import "../styles/checkout.css"

const Checkout = () => {

  const [enterName, setEnterName ] = useState("")
  const [enterEmail, setEnterEmail] = useState("")
  const [enterNumber, setEnterNumber] = useState("")
  const [enterCountry, setEnterCountry] = useState("")
  const [enterCity, setEnterCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  
  
  const shippingInfo = []
  const cartTotalAmount = useSelector(state=> state.cart.totalAmount)
  const shippingCost = 30;
  
  const totalAmount = cartTotalAmount + Number(shippingCost)

  const submitHandler = (e)=> {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return <Helmet title="Checkout">
    <CommonSection title="Chechout"/>
    <section>
      <Container>
        <Row>
          <Col lg="8" md="6">
            <h6 className='mb-4'>Completa Formulario de Compra</h6>
            <form className='checkout__form'onSubmit={submitHandler}>
              <div className='form__group'>
                <input type="text" placeholder='Ingresa tu nombre' required OnChange={e=> setEnterName(e.target.value) }/>
              </div>
              <div className='form__group'>
                <input type="email" placeholder='Ingresa tu mail' required OnChange={e=> setEnterEmail(e.target.value) } />
              </div>
              <div className='form__group'>
                <input type="number" placeholder='Teléfono de contacto' required OnChange={e=> setEnterNumber(e.target.value) } />
              </div>
              <div className='form__group'>
                <input type="text" placeholder='Localidad' required OnChange={e=> setEnterCountry(e.target.value) } />
              </div>
              <div className='form__group'>
                <input type="text" placeholder='Ciudad' required OnChange={e=> setEnterCity(e.target.value) } />
              </div>
              <div className='form__group'>
                <input type="number" placeholder='Código Postal' required OnChange={e=> setPostalCode(e.target.value) } />
              </div>
              <button type="submit" className='addTOCart__btn'>Pagar</button>
            </form>
            
          </Col>

          <Col lg="4" md="6">
            <div className='checkout__bill'>
              <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal: <span>$ {cartTotalAmount}</span></h6>
              <h6 className='d-flex align-items-center justify-content-between mb-3'>Envío: <span>$ {shippingCost}</span></h6>
              <div className='checkout__total'><h5 className='d-flex align-items-center justify-content-between'>Total: <span>${totalAmount}</span> </h5></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
   
}

export default Checkout;