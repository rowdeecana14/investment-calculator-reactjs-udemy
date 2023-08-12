import { useState } from "react";
import InvestmentCalculatorHeader from "./header/InvestmentCalculatorHeader";
import InvestmentCalculatorForm from "./form/InvestmentCalculatorForm";
import InvestmentCalculatorTable from "./table/InvestmentCalculatorTable";

function InvestmentCalculator() {

  const [ isCalculate, setIsCalculate ] = useState(false);
  const [ yearlyData, setYearlyData ] = useState([]);

  const initial_investment = 100000;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  function calculate(form){
    setIsCalculate(true);
    
    let currentSavings = +form['current-savings']; 
    const yearlyContribution = +form['yearly-contribution']; 
    const expectedReturn = +form['expected-return'] / 100;
    const duration = +form['duration'];
    let yearly_data = [];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      
      yearly_data.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyData(yearly_data);
  };

  return (
    <div>
      <InvestmentCalculatorHeader />
      <InvestmentCalculatorForm calculate={calculate} initial_investment={initial_investment}/>
      { !isCalculate && <p>No investment calculated yet.</p>}
      { isCalculate && <InvestmentCalculatorTable formatter={formatter} yearly_data={yearlyData} initial_investment={initial_investment} />}
  </div>
  );
}


export default InvestmentCalculator;