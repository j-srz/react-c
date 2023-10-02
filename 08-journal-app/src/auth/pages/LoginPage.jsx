import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"

import { useForm } from "../../hooks";
import { startGoogleSingIn, startLoginWithEmailPassword } from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";
import { useMemo } from "react";


export const LoginPage = () => {


  const dispatch = useDispatch();


  const { status, errorMessage } = useSelector(state => state.auth);

  const { email, password, onInputChange } = useForm({
    email: 'jesus@correo.com',
    password: '123456'
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status] )


  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch( startLoginWithEmailPassword({ email, password }) );

    console.log({email, password});
  }

  const onGoogleSignIn = () => {

    dispatch( startGoogleSingIn() );

    console.log({email, password});
    
  }



  return (
    
    <AuthLayout title="Login">

      

      <form onSubmit={onSubmit}>
    
        <Grid container className="animate__animated animate__fadeIn animate__faster" >
          <Grid item xs={ 12 } sx={{mt: 2}}>
            <TextField 
              label={'Correo'} 
              type="email" 
              placeholder="correo@correo.com" 
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              />
          </Grid>
          <Grid item xs={ 12 } sx={{mt: 2}}>
            <TextField 
              label={'Contraseña'} 
              type="password" 
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              />
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
              <Grid item xs={12} display={ !!errorMessage ? '' : 'none' }>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} variant="contained" fullWidth type="submit">Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} variant="contained" fullWidth onClick={onGoogleSignIn}>
                <Google/>
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={'row'} justifyContent={'end'}>
            
            <Link component={ RouterLink } color={"inherit"} to="/auth/register">
              Crear una cuenta
            </Link>
            
          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}