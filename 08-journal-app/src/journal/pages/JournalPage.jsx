import { IconButton, colors } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"


export const JournalPage = () => {

  const { isSaving, active } = useSelector(state => state.journal)


  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }


  return (
    <JournalLayout className="animate__animated animate__fadeIn animate__faster">


      {
        ( !active )
        ? <NothingSelectedView />
        : <NoteView />
      }



      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    
    </JournalLayout>
  )
}
