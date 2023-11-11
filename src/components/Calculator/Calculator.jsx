import { Col, Row } from 'react-bootstrap'
import './Calculator.css'
import { useState } from 'react'
import ResultPannel from '../ResultPannel/ResultPannel';
import MainCalculator from '../MainCalculator/MainCalculator';

const Calculator = () => {
    const [result, setResult] = useState('');

    return (
        <Row className='justify-content-center align-items-center min-vh-100'>
            <Col lg={6} md={8} sm={10} xs={12}>
                <Row>
                    <ResultPannel res={result} />
                    <MainCalculator res={result} setRes={setResult} />
                </Row>
            </Col>
        </Row>
    )
}

export default Calculator