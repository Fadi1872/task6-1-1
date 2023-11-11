import { Col } from 'react-bootstrap'
import './ResultPannel.css'

const ResultPannel = ({ res }) => {
    
    return (
        <Col xs={12}>
            <div className='overflow-x-scroll bg-dark text-white fs-2 result-pannel px-3'>
                {res}
            </div>
        </Col>
    )
}

export default ResultPannel