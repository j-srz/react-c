import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({children, title = ''}) => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", p: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        sx={{ width: { md: '450px '}, backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {title}
        </Typography>

				{ children }



      </Grid>
    </Grid>
  );
};
