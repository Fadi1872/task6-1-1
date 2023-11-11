import './MainCalculator.css'
import { Col } from 'react-bootstrap'
import { FaDeleteLeft } from 'react-icons/fa6'

let Fnum = '';
let Snum = '';
let final ='';
let operation = '';
let isFnum = true;

const MainCalculator = ({ res, setRes }) => {
    const handleClear = () => {
        Fnum = '';
        Snum = '';
        setRes('');
        isFnum = true;
        operation = '';
        console.log({Fnum, isFnum, operation, Snum});
    }
    const handleDelete = () => {
        if (isFnum) {
            Fnum = Fnum.slice(0, -1);
        } else {
            if (res[res.length - 1] == '/' || res[res.length - 1] == '+' || res[res.length - 1] == '-' || res[res.length - 1] == 'X') {
                operation = '';
                isFnum = true
            } else {
                Snum = Snum.slice(0, -1);
            }
        }
        setRes(res.slice(0, -1));
        console.log({Fnum, isFnum, operation, Snum});
    }
    const handeOperation = (e) => {
        if (isFnum) {
            isFnum = false;
            operation = e.target.innerText;
            setRes(res + operation);
        }
        console.log({Fnum, isFnum, operation, Snum});
    }
    const handleAddNumber = (e) => {
        if (isFnum) {
            Fnum = Fnum + e.target.innerText
        } else {
            Snum = Snum + e.target.innerText
        }
        setRes(res + e.target.innerText);
        console.log({Fnum, isFnum, operation, Snum});
    }
    const handleEqual = () => {
        switch (operation) {
            case '/':
                final = Number(Fnum) / Number(Snum);
                setRes(final);
                Fnum = final;
                break;
            case 'x':
                final = Number(Fnum) * Number(Snum);
                setRes(final);
                Fnum = final;
                break;
            case '-':
                final = Number(Fnum) - Number(Snum);
                setRes(final);
                Fnum = final;
                break;
            case '+':
                final = Number(Fnum) + Number(Snum);
                setRes(final);
                Fnum = final;
                break;
        }
        Snum = '';
        isFnum = true;
        operation = '';
        console.log({Fnum, isFnum, operation, Snum});
    }

    return (
        <Col>
            <table className="w-100 text-white ">
                <tbody>
                    <tr className="bg-secondary text-center">
                        <td className="square border" onClick={handleClear}>C</td>
                        <td className="square border" onClick={handleDelete}><FaDeleteLeft /></td>
                        <td className="square border" onClick={e => handeOperation(e)}>/</td>
                        <td className="square border" onClick={e => handeOperation(e)}>x</td>
                    </tr>
                    <tr className="text-center bg-dark">
                        <td className="square border numberHover" onClick={e => handleAddNumber(e)}>7</td>
                        <td className="square border numberHover" onClick={e => handleAddNumber(e)}>8</td>
                        <td className="square border numberHover" onClick={e => handleAddNumber(e)}>9</td>
                        <td className="square bg-secondary border" onClick={e => handeOperation(e)}>-</td>
                    </tr>
                    <tr className="text-center bg-dark">
                        <td className="square border numberHover" onClick={e => handleAddNumber(e)} >4</td>
                        <td className="square border numberHover" onClick={e => handleAddNumber(e)} >5</td>
                        <td className="square border numberHover" onClick={e => handleAddNumber(e)} >6</td>
                        <td className="square bg-secondary border" onClick={e => handeOperation(e)}>+</td>
                    </tr>
                    <tr className="text-center bg-dark">
                        <td className="square border numberHover" onClick={e => handleAddNumber(e)}>1</td>
                        <td className="square border numberHover" onClick={e => handleAddNumber(e)}>2</td>
                        <td className="square border numberHover" onClick={e => handleAddNumber(e)}>3</td>
                        <td rowSpan="2" className="bg-warning border" onClick={handleEqual}>=</td>
                    </tr>
                    <tr className="text-center bg-dark">
                        <td colSpan="2" className="border numberHover" onClick={e => handleAddNumber(e)}>0</td>
                        <td className="square border numberHover" onClick={e => handleAddNumber(e)}>.</td>
                    </tr>
                </tbody>
            </table>
        </Col>
    )
}

export default MainCalculator