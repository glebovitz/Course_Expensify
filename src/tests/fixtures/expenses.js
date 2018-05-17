import moment from 'moment';

export default [{
  id: '1',
  description: 'Gum',
  amount: 195,
  note: '',
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  amount: 109500,
  note: '',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  amount: 4500,
  note: '',
  createdAt: moment(0).add(4, 'days').valueOf()
}];

export const altExpenses = [{
  id: '100',
  description: 'Beer',
  amount: 1000,
  note: '',
  createdAt: moment(0).add(60, 'days').valueOf()
}, {
  id: '200',
  description: 'Mortgage',
  amount: 225000,
  note: '',
  createdAt: moment(0).subtract(20, 'days').valueOf()
}, {
  id: '300',
  description: 'Phone Bill',
  amount: 2055,
  note: '',
  createdAt: moment(0).add(25, 'days').valueOf()
}];
