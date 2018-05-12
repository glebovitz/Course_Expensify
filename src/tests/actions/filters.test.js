import moment from 'moment';
import { 
  setStartDate, 
  setEndDate,
  sortByDate, 
  sortByAmount,
  setTextFilter
} from '../../actions/filters';

test('should generate set start date action object', () => {
  expect(setStartDate(moment(0))).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should generate set end date action object', () => {
  expect(setEndDate(moment(0))).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate a set text filter action object with text provided', () => {
  expect(setTextFilter('rent')).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  });
});

test('should generate a set text filter action object with default provided', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate a sort by date action object', () => {
  expect(sortByDate()).toEqual({
    type:'SORT_BY_DATE'
  })
});

test('should generate a sort by amount action object', () => {
  expect(sortByAmount()).toEqual({
    type:'SORT_BY_AMOUNT'
  })
});
