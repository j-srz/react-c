import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onDeleteEvent, onResetActiveEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    }
    const resetActiveEvent = () => {
        dispatch( onResetActiveEvent() );
    }

    const startSavingEvent = async( calendarEvent ) => {
        //TODO: llegar al back-end



        // Todo bn
        if ( calendarEvent._id ) {
            // Actualizando
            dispatch( onUpdateEvent( {...calendarEvent} ) )
        } else {
            dispatch( onAddNewEvent( {...calendarEvent, _id: new Date().getTime()} ) );
        }


    }

    const startDeletingEvent = () => {

        //TODO: llegar al back-end
        dispatch( onDeleteEvent() );
    }





    return {
        // Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,


        // Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        resetActiveEvent,

    }
}
