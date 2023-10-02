import { Warning } from "@mui/icons-material"
import { Box, CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", p: 4 }}
    >
      <Box
				display={'flex'}
        direction={'row'}
				justifyContent={'center'}
      >
      
				<CircularProgress color='secondary' />

			</Box>
    </Grid>
    
  )
}
