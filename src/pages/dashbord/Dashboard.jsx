import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Style.css'
import { Container, Row, Col, Button, Card, Modal, Form} from 'react-bootstrap';
import { associationsList } from '../../datas/associationsList';
import { useState } from 'react';

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return <Container >
      <Row>
        <ul className="row">
        {associationsList.map(({id, name, town, chef, president, contact, caisse}) => (
          <Col md={3} className="p-1"> 
          <Card key={id} className="p-1 shadow-sm  pBG-color">
            <Card.Body>
              <Card.Title 
              className="text-uppercase text-center text-nowrap fw-bold" 
              style={{width: "1rem"}}>
                {name} - {town}
              </Card.Title>
              <div className='text-light' >{contact}</div>
              <div className='text-light'>{caisse}</div>
              <div className='text-light'><i className='bx bxs-group bx-xm bx-border-circle'> 23</i></div>
              <Button as="a" variant="dark" onClick={ handleShow }>Ajouter un membre</Button>
            </Card.Body>
          </Card>
          </Col>
          )
        )}   
      </ul>
     </Row>
     <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Ajouter un membre</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control as="textarea" rows={2} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
   </Container>;
};

export default Dashboard;
