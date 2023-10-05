import { DeleteOutline, SaveOutlined, UploadFileOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useRef } from 'react';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

	const { active:note, messageSaved, isSaving } = useSelector(state => state.journal)

	const {body, title, date, onInputChange, formState} = useForm(note);

	const dispatch = useDispatch();

	const dateString = useMemo(() => {
		const newDate = new Date( date );

		return newDate.toUTCString();
	}, [date])


	const fileInputRef = useRef()


	useEffect(() => {
	  dispatch( setActiveNote(formState) )
	}, [formState])

	useEffect(() => {
	  if (messageSaved.length > 0) {
		Swal.fire('Nota actualizada', messageSaved, 'success')
	  }
	
	}, [messageSaved])
	

	const onSaveNote = () => {
		dispatch( startSaveNote() )
	}
	


	const onFileInputChange = ({ target }) => {
		if (target.files === 0 ) return;
		
		dispatch( startUploadingFiles( target.files ));

	
	}
	
	const onDelete = () => {
		dispatch( startDeletingNote() );
	}



  return (
    <Grid className="animate__animated animate__fadeIn animate__faster" container direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ mb: 1}}>
			<Grid item>
				<Typography  fontSize={ 39 } >{dateString}</Typography>
			</Grid>

			<Grid item>

				<input 
					type="file" 
					multiple
					ref={ fileInputRef }
					onChange={onFileInputChange}
					style={{ display: 'none'}}
				/>

				<IconButton
					color='primary'
					disabled={isSaving}
					onClick={() => fileInputRef.current.click()}
				>
					<UploadFileOutlined />
				</IconButton>

				<Button disabled={isSaving} onClick={onSaveNote} color='primary' sx={{ padding: 2 }}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1}} />
					Guardar
				</Button>
			</Grid>

			<Grid container>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					placeholder='Ingrese un titulo'
					label='Titulo'
					sx={{ border: 'none', mb: 1 }}
					onChange={onInputChange}
					name='title'
					value={title}
				/>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					multiline
					placeholder='¿Qué sucedio hoy?'
					minRows={5}
					onChange={onInputChange}
					name='body'
					value={body}
				/>
			</Grid>


			<Grid container justifyContent={'end'} alignItems={'cen'}>
				<Button
					onClick={ onDelete }
					sx={{mt: 2}}
					color='error'
				>
					<DeleteOutline />
					Borrar
				</Button>
			</Grid>

			<ImageGallery 
				images = {note.imageUrls}
			
			/>

    </Grid>
  )
}
