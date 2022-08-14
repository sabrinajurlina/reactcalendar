import './App.css';
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
import React, {useState} from 'react';
import moment from 'moment';


export default function App() {
  const [dateState, setDateState] = useState(new Date());
  
  //Change Date Method
  const changeDate = (e) => {
    setDateState(e)
  }

  return (
    <>
    <div className='app'>
      <h1 className='text-center'>React Calendar with Range</h1>
      <div className='calendar-container'>
          <Calendar
            value = {dateState}
            nextLabel='month >'
            nextAriaLabel='Go to next month'
            next2Label='year >>'
            next2AriaLabel='Go to next year'
            prevLabel='< month'
            prevAriaLabel='Go to previous month'
            prev2Label='<< year'
            prev2AriaLabel='Go to previous year'
            selectRange={true}
            onChange={changeDate}
          />
      </div>
      <>
      {dateState.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
            {dateState[0].toDateString()}
            &nbsp;|&nbsp;
          <span className='bold'>End:</span>{' '}
            {dateState[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {dateState.toDateString()}
        </p>
      )}
      </>
      </div>
    </>
  );
}