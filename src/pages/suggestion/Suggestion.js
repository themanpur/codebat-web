import '../../style/Style.css';
import { Container, Row, Col} from 'react-bootstrap';
import { suggestionList} from '../../datas/suggestionList';

const Suggestion = () => {
    
    return <Container className='first_container'>
    <Row className='shadow-sm p-1 m-1 text-left text-light fw-bold fs-lg rounded-top headPBG-color'>
        <Row>
            <Col md={1} m={1}>#</Col>
            <Col md={4} m={1}>Noms</Col>
            <Col md={6} m={1}>Description</Col>
        </Row>
    </Row>
    
    <Row>
        <ul className='row'>
            {
        suggestionList.map(({id, name, description}) =>
            <Row className='shadow-sm p-1 m-1 text-left fs-lg rounded-top headSBG-color' key={id}>
                <Row>
                    <Col md={1} m={1}>{id}</Col>
                    <Col md={4} m={1}>{name}</Col>
                    <Col md={6} m={1}>{description}</Col>
                </Row>
            </Row>  
                )
            }
        </ul>
    </Row>
</Container>;
};

export default Suggestion;
