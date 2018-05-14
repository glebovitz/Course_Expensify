import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expensesTotal/100).format('$0,0.0');
  return (
    <div>
      <h1>Viewing {expensesCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
    </div>)
};

const mapStateToProps = ({ expenses, filters }) => {
  const filteredExpenses = selectExpenses(expenses, filters);
  return {
    expensesTotal: selectExpensesTotal(filteredExpenses),
    expensesCount: filteredExpenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
