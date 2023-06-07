import '../../style/Style.css';
import { Container, Row, Col} from 'react-bootstrap';
import { membersList } from '../../datas/membersList';

const Members = () => {

    return <Container>
        <Row className='shadow-sm p-1 m-1 text-left text-light fw-bold fs-lg rounded-top headPBG-color'>
            <Col md={4}>
                <Row>
                    <Col md={2} m={1}>#</Col>
                    <Col md={9} m={1}>Noms</Col>
                </Row>
            </Col>
            <Col md={8}>
                <Row>
                    <Col md={3} m={1}>Contact</Col>
                    <Col md={3} m={1}>Association</Col>
                    <Col md={3} m={1}>Ville</Col>
                    <Col md={2} m={1}>Construction</Col>
                </Row>
            </Col>
        </Row>
        
        <Row>
            <ul className='row'>
                {
                    membersList.map(({id, name, contact, caisse}) =>
                <Row className='shadow-sm p-1 m-1 text-left fs-lg rounded-top headSBG-color' key={id}>
                    <Col md={4}>
                        <Row>
                            <Col md={2} m={1}>{id}</Col>
                            <Col md={9} m={1}>{name}</Col>
                        </Row>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={3} m={1}>{contact}</Col>
                            <Col md={3} m={1}>Association</Col>
                            <Col md={3} m={1}>Ville</Col>
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
