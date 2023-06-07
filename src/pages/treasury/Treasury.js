import '../../style/Style.css';
import { Container, Row, Col, Form} from 'react-bootstrap';
import { useState } from 'react';
import { associationsList } from '../../datas/associationsList';

const Members = () => {
    const [selected, setSelected] = useState(true)

    const onOptionChange = e => {
      setSelected(!selected)
    }
    return <Container className='first_container'>
         <Row className='m-1'>
            <Col md={6} className='text-start'>
                <Form>
                    <Form.Check
                    inline
                    label="Entrées"
                    name="traesury"
                    type="radio"
                    id="inline-radio-1"
                    defaultChecked
                    onChange={onOptionChange}
                    />
                    <Form.Check
                    inline
                    label="Sortie"
                    name="traesury"
                    type="radio"
                    id="inline-radio-2"
                    onChange={onOptionChange}
                    />
                </Form>
            </Col>
            <Col md={6} className='text-end total_contribution'>Total des contributions : 200000 Fcfa</Col>
         </Row>
    { selected ? ( <Row>
        <Row className='shadow-sm p-1 m-1 text-left text-light fw-bold fs-lg rounded-top headPBG-color'>
            <Col md={4}>
                <Row>
                    <Col md={2} m={1}>#</Col>
                    <Col md={9} m={1}>Association</Col>
                </Row>
            </Col>
            <Col md={8}>
                <Row>
                    <Col md={3} m={1}>Ville</Col>
                    <Col md={3} m={1}>Date versement</Col>
                    <Col md={3} m={1}>Montant</Col>
                    <Col md={2} m={1}>Construction</Col>
                </Row>
            </Col>
        </Row>
    
        <Row>
            <ul className='row'>
                {
                associationsList.map(({id, name, town, chef, president, contact, caisse}) =>
                <Row className='shadow-sm p-1 m-1 text-left fs-lg rounded-top headSBG-color' key={id}>
                    <Col md={4}>
                        <Row>
                            <Col md={2} m={1}>{id}</Col>
                            <Col md={9} m={1}>{name}</Col>
                        </Row>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={3} m={1}>{town}</Col>
                            <Col md={3} m={1}>07/06/2023</Col>
                            <Col md={3} m={1}>300000 Fcfa</Col>
                            <Col md={2} m={1}>{caisse}</Col>
                        </Row>
                    </Col>
                </Row>  
                    )
                }
            </ul>
        </Row>
    </Row> ) : 
        <Row>
            <Row className='shadow-sm p-1 m-1 text-left text-light fw-bold fs-lg rounded-top headPBG-color'>
                <Col md={1} m={1}>#</Col>
                <Col md={3} m={1}>Date retrait</Col>
                <Col md={5} m={1}>Motif</Col>
                <Col md={2} m={1}>Montant</Col>
            </Row>
            <ul className='row'>
                {
                    associationsList.map(({id, name, town, chef, president, contact, caisse}) =>
                    <Row className='shadow-sm p-1 m-1 text-left fs-lg rounded-top headSBG-color' key={id}>
                        <Col md={1} m={1}>{id}</Col>
                        <Col md={3} m={1}>Date retrait</Col>
                        <Col md={5} m={1} border={2} >Construction des sales de classe du lycée de Batsengla</Col>
                        <Col md={2} m={1}>{caisse} Fcfa</Col>
                    </Row>
                    )
                }
            </ul>
        </Row>
    }
</Container>;
};

export default Members;