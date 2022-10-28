import React from "react";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import "react-big-calendar/lib/css/react-big-calendar.css"
import 'react-big-calendar/lib/sass/styles.scss'
import './App.css'
import right from './assets/right.png'
import left from './assets/left.png'
// import vector from './assets/vector.png'

// {
//   MONTH: 'month',
//   WEEK: 'week',
//   WORK_WEEK: 'work_week',
//   DAY: 'day',
//   AGENDA: 'agenda',
// }

function App() {

  const [view, setView] = React.useState("month")

  const locales = {
    'en-US': enUS,
  }

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })

  React.useEffect(() => {
    const arrow = document.querySelectorAll(".rbc-toolbar span:first-child button")
    const weekDay = document.querySelectorAll('.rbc-month-header .rbc-header span')
    arrow[1].innerHTML = `<img src='${left}'/>`
    arrow[2].innerHTML = `<img src='${right}'/>`
    for (let i = 0; i < weekDay.length; i++) {
      const first3 = weekDay[i].innerHTML.substring(0, 3)
        weekDay[i].innerHTML = first3     
    }

    const dot = document.querySelectorAll('.rbc-month-view .rbc-month-row .rbc-row-content .rbc-row:not(:first-child) .rbc-row-segment:not(:first-child) .rbc-event')
    const bgColor = document.querySelectorAll('.rbc-day-bg')
    console.log(dot[0])
    console.log(bgColor[0])
  }, [])


  const events = [
    {
      title: "Vacation",
      start: new Date(2022, 9, 28, 10),
      end: new Date(2022, 9, 28, 11)
    },
    {
      title: "Big Meeting",
      start: new Date(2022, 8, 25, 8),
      end: new Date(2022, 8, 25, 9)
    },
    {
      title: "Hello",
      start: new Date(2022, 9, 2, 8),
      end: new Date(2022, 9, 2, 9)
    }
  ]

  return (
    <div className="container-wrapper">
      <div className="container">
        <h1 className="heading">Your scheduled viewings</h1>
        <div className="main">
          <span className="dropdown flex">
            <label for='label' style={{ color: '#94A0C0', paddingRight: '10px' }}>Show:</label>
            <select id="label" style={{ border: 'none' }} onChange={(e) => setView(e.target.value)}>
              <option className="design" default value="month">Month</option>
              <option className="design" value="week">Week</option>
              <option className="design" value="day">Day</option>
            </select>
          </span>

          <Calendar
            view={view}
            defaultView="Month"
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 800 }}
          />
        </div>
      </div>
    </div>
  )


}

export default App;
