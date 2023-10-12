import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';


import { CalendarEventBox, CalendarModal, FabAddNew, FabDelete, Navbar } from "../";
import { localizer, getMessagesES } from '../../helpers';
import { useEffect, useState } from 'react';
import { useAuthStore, useCalendarStore, useUiStore } from '../../hooks';







export const CalendarPage = (  ) => {


  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();


  const { openDateModal } = useUiStore()
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');


  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const { user } = useAuthStore();

    const isMyEvent = ( user.uid === event.user._id) || ( user.uid === event.user.uid);

    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#455660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }

  }


  const onDobleClick = (  ) => {
    openDateModal()
  }

  const onSelect = ( event ) => {
    setActiveEvent( event );
  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event);
  }


  useEffect(() => {
    startLoadingEvents();
  }, [])
  



  return (
    <>
      <Navbar />


      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEventBox,
        }}
        onDoubleClickEvent={onDobleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal />


      <FabAddNew />

      <FabDelete />
    
    </>
  )
}
