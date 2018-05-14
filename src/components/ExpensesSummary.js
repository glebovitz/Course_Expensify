import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  return (
    <div>
      ExpenseTotal: {numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.0')}
      {' - '}
      ExpenseCount: {props.expenses.length}
    </div>)
};

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
