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

// {
//   MONTH: 'month',
//   WEEK: 'week',
//   WORK_WEEK: 'work_week',
//   DAY: 'day',
//   AGENDA: 'agenda',
// }

function App() {

  const [ view , setView ] = React.useState("month")

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
    arrow[1].innerHTML = "<"
    arrow[2].innerHTML = ">"
  } , [])

  const events = [
    {
      title: "Vacation",
      start: new Date(2022, 9, 24, 10),
      end: new Date(2022,9,24, 11)
    },
    {
      title: "Conference",
      start: new Date(2022, 9, 17),
      end: new Date(2022, 9, 17)
    },
    {
      title: "Big Meeting",
      start: new Date(2022, 9, 2),
      end: new Date(2022, 9, 2)
    }
  ]

  return(
    <div className="container">
      <h1 className="heading">Your scheduled viewings</h1>
      <div className="main">
        <span className="dropdown">
          <select onChange={(e) => setView(e.target.value)}>
            <option default value="month">month</option>
            <option value="week">week</option>
            <option value="day">day</option>
          </select>
        </span>
        
        <Calendar
          view={view}
          defaultView="month"
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 800 }}
        />
      </div>
    </div>
  )

  
}

export default App;
