import '../../style/Style.css';
import { Container, Row, Col} from 'react-bootstrap';
import { associationsList } from '../../datas/associationsList';

const Members = () => {
    
    return <Container>
        {/*<Row>*/}
            <Row className='shadow-sm p-1 m-1 text-left text-light fw-bold fs-lg rounded-top headPBG-color'>
                <Col md={4}>
                    <Row>
                        <Col md={1} m={1}>#</Col>
                        <Col md={5} m={1}>Noms</Col>
                        <Col md={5} m={1}>Ville</Col>
                    </Row>
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={3} m={1}>Contact</Col>
                        <Col md={3} m={1}>Chef</Col>
                        <Col md={3} m={1}>President</Col>
                        <Col md={2} m={1}>Construction</Col>
                    </Row>
                </Col>
            </Row>
        {/*</Row>*/}
        
        <Row>
            <ul className='row'>
                {
                    associationsList.map(({id, name, town, chef, president, contact, caisse}) =>
                <Row className='shadow-sm p-1 m-1 text-left fs-lg rounded-top headSBG-color' key={id}>
                    <Col md={4}>
                        <Row>
                            <Col md={1} m={1}>{id}</Col>
                            <Col md={5} m={1}>{name}</Col>
                            <Col md={5} m={1}>{town}</Col>
                        </Row>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={3} m={1}>{contact}</Col>
                            <Col md={3} m={1}>{chef}</Col>
                            <Col md={3} m={1}>{president}</Col>
                            <Col md={2} m={1}>{caisse}</Col>
                        </Row>
                    </Col>
                </Row>  
                    )
                }
            </ul>
        </Row>
    </Container>;
};

export default Members;
