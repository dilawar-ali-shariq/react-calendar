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
import vector from './assets/vector.png'

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
  }, [])


  const events = [
    {
      title: "Vacation",
      start: new Date(2022, 9, 27, 10),
      end: new Date(2022, 9, 27, 11)
    },
    {
      title: "Conference",
      start: new Date(2022, 9, 17, 3),
      end: new Date(2022, 9, 17, 4)
    },
    {
      title: "Big Meeting",
      start: new Date(2022, 9, 18, 8),
      end: new Date(2022, 9, 18, 9)
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
              <option default value="month">Month</option>
              <option value="week">Week</option>
              <option value="day">Day</option>
              <option value="agenda">Events</option>
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
