import styles from "./InvestmentCalculatorForm.module.css";
import { useState } from "react";

function InvestmentCalculatorForm({calculate, initial_investment}) {

  const [ form, setForm ] = useState({
    "current-savings": initial_investment,
    "yearly-contribution": 1200,
    "expected-return": 7,
    "duration": 10
  });

  function onclickReset() {
    console.log('reset')
  }

  function onclickCalculate(event) {
    event.preventDefault()
    calculate(form);
  }

  function onchangeInput(input, value) {
    setForm((previusValues) => {
      return {
        ...previusValues, [input]: value
      };
    });
  }

  return (
      <form className={styles.form} onSubmit={onclickCalculate}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($) </label>
          <input 
            onChange={(event) => onchangeInput('current-savings', event.target.value) } 
            value={form['current-savings']}
            type="number" 
            id="current-savings" 
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input 
            onChange={(event) => onchangeInput('yearly-contribution', event.target.value) } 
            value={form['yearly-contribution']}
            type="number" 
            id="yearly-contribution" 
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input 
            onChange={(event) => onchangeInput('expected-return', event.target.value) }
            value={form['expected-return']}
            type="number" 
            id="expected-return" 
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input 
            onChange={(event) => onchangeInput('duration', event.target.value) } 
            value={form['duration']}
            type="number" 
            id="duration" 
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className={styles.buttonAlt} onClick={onclickReset}>
          Reset
        </button>
        <button type="submit" className={styles.button} >
          Calculate
        </button>
      </p>
    </form>
  );
}

export default InvestmentCalculatorForm;