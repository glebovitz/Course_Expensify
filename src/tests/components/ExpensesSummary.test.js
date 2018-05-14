import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test ('should render ExpensesSummary with 3 expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary 
      expensesTotal={114200}
      expensesCount={3}
    />);
  expect(wrapper).toMatchSnapshot();
});

test ('should render ExpensesSummary with multiple expense', () => {
  const wrapper = shallow(
    <ExpensesSummary 
      expensesTotal={109500}
      expensesCount={1}
    />);
  expect(wrapper).toMatchSnapshot();
});
