import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expensesTotal/100).format('$0,0.0');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expensesCount}</span> {expenseWord}{' '}
          totalling <span>{formattedExpenseTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
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
