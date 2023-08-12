function InvestmentCalculatorTableRow({data, initial_investment, formatter}) {
    function getTotalInterest() {
        return data.savingsEndOfYear - initial_investment - data.yearlyContribution * data.year;
    }

    function getInvestedCapital() {
        return initial_investment + data.yearlyContribution * data.year;
    }

    return (
        <tr>
            <td>{ data.year }</td>
            <td>{ formatter.format(data.yearlyInterest) }</td>
            <td>{ formatter.format(data.savingsEndOfYear) }</td>
            <td>{ formatter.format(getTotalInterest()) }</td>
            <td>{ formatter.format(getInvestedCapital()) }</td>
        </tr>
    );
}

export default InvestmentCalculatorTableRow;