import React, {useRef} from 'react';
import Helmet from "../components/Helmet/Helmet" ;
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

const Register = () => {

  const signupNameRef = useRef()
  const signupEmailRef = useRef()
  const signupPasswordRef = useRef()

  const submitHandler = e=> {
    e.preventDefaul()
  }

  return <Helmet title="Signup">
    <CommonSection title="Crear cuenta"/>
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className='m-auto text-center'>
            <form action="" className='form mb-5' onSubmit={submitHandler}>
              <div className="form__group">
                <input type="text" placeholder='Nombre Completo'required ref={signupNameRef}/>
              </div>
              <div className="form__group">
                <input type="email" placeholder='Email'required ref={signupEmailRef}/>
              </div>
              <div className="form__group">
                <input type="password" placeholder='Clave'required ref={signupPasswordRef}/>
              </div>
              <button type="sunmit"className='addTOCart__btn'>Aceptar</button>
            </form>
            <Link to="/login">¿Ya tienes cuenta? Login</Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}



export default Register;