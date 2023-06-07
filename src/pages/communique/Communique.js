import '../../style/Style.css';
import { Container, Row, Col} from 'react-bootstrap';
import { communiqueList} from '../../datas/communiqueList';

const Communique = () => {
    
    return <Container className='first_container'>
    <Row className='shadow-sm p-1 m-1 text-left text-light fw-bold fs-lg rounded-top headPBG-color'>
        <Row>
            <Col md={1} m={1}>#</Col>
            <Col md={2} m={1}>Titre</Col>
            <Col md={6} m={1}>Description</Col>
            <Col md={2} m={1}>Piece jointe</Col>
        </Row>
    </Row>
    
    <Row>
        <ul className='row'>
            {
        communiqueList.map(({id, title, description, file}) =>
            <Row className='shadow-sm p-1 m-1 text-left fs-lg rounded-top headSBG-color' key={id}>
                <Row>
                    <Col md={1} m={1}>{id}</Col>
                    <Col md={2} m={1}>{title}</Col>
                    <Col md={6} m={1}>{description}</Col>
                    <Col md={2} m={1}>{file}</Col>
                </Row>
            </Row>  
                )
            }
        </ul>
    </Row>
</Container>;
};

export default Communique;
