import React from 'react'
import { Header } from '../components'
import {Agenda, Day, DragAndDrop, Inject, Month, Resize, ScheduleComponent, Week, WorkWeek} from '@syncfusion/ej2-react-schedule'
import { scheduleData } from '../data/dummy'

const Calendars = () => {
  return ( 
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Calendar' />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendars