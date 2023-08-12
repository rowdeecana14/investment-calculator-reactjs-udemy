import styles  from "./InvestmentCalculatorTable.module.css"
import InvestmentCalculatorTableRow from "./InvestmentCalculatorTableRow";

function InvestmentCalculatorTable({yearly_data, initial_investment, formatter}) {
    return (
        <table className={styles.result}>
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
                {
                  yearly_data.map((data, index) => (
                        <InvestmentCalculatorTableRow key={index} formatter={formatter} data={data} initial_investment={initial_investment}/>
                    ))
                }
            </tbody>
      </table>
    );
}

export default InvestmentCalculatorTable;