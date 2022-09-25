

import React, {useRef} from 'react';
import Helmet from "../components/Helmet/Helmet" ;
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

const Login = () => {

  const loginNameRef = useRef()
  const loginPasswordRef = useRef()

  const submitHandler = e=> {
    e.preventDefaul()
  }

  return <Helmet title="Login">
    <CommonSection title="Login"/>
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className='m-auto text-center'>
            <form action="" className='form mb-5' onSubmit={submitHandler}>
              <div className="form__group">
                <input type="email" placeholder='Email'required ref={loginNameRef}/>
              </div>
              <div className="form__group">
                <input type="password" placeholder='Clave'required ref={loginPasswordRef}/>
              </div>
              <button type="sunmit"className='addTOCart__btn'>Login</button>
            </form>
            <Link to="/register">¿No tienes cuenta? Crear una</Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login;