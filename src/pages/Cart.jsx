

import React from 'react';

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from  "../components/Helmet/Helmet";

import "../styles/car-page.css";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { cartActions} from "../routes/store/shopping-cart/cartSlice";
import { Link } from 'react-router-dom';


const Cart = () => {

  const cartItems = useSelector(state=> state.cart.cartItems);
  const totalAmount = useSelector(state=> state.cart.totalAmount)
  return (
    <Helmet title="Cart">
      <CommonSection title="Tu pedido"/>
    <section>
      <Container>
        <Row>
          <Col lg="12">
          {
            cartItems.length === 0 ? <h5 className='text-center'>Tu
            carrito está vacío</h5> : <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems.map((item) => (
                    <Tr item={item} key={item.id}/> 
                  ))
                }
                
              </tbody>
            </table>
          }

          <div className='mt-4'>
            <h6>Subtotal: $<span className='cart__subtotal'>{totalAmount}</span></h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, a dolorum!</p>
            <div className='cart__page-btn'>
              <button className='addTOCart__btn me-3'><Link to="/foods">Continuar comprando</Link></button>
              <button className='addTOCart__btn'><Link to="/checkout">Finalizar compra</Link></button>
            </div>
            </div>  
          </Col>
        </Row>
      </Container>
    </section>
    </Helmet>
  )
};

const Tr = (props) => {

  const {id, image01, title, price, quantity} = props.item;
  const dispatch= useDispatch()

  const deleteItem = ()=>{
    dispatch(cartActions.deleteItem(id))
  }
  return <tr>
    <td >
      <img src={image01} alt="" className='cart__img-box '/>
      </td>
    <td>{title}</td>
    <td>${price}</td>
    <td>{quantity}px</td>
    <td className='cart__item-del'><i class="ri-delete-bin-line"onClick={deleteItem}></i>
    </td>
  </tr>
}

export default Cart;