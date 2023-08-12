import logo from '../../../assets/investment-calculator-logo.png';
import classes from "./InvestmentCalculatorHeader.module.css"

function InvestmentCalculatorHeader() {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    );
}

export default InvestmentCalculatorHeader;