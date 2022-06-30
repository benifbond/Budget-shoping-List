
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

<<<<<<< HEAD
=======
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Rob & Ben
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
      <AvatarGroup>
        <Avatar alt="Robert" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Beniah" src="/static/images/avatar/2.jpg" />
      </AvatarGroup>
    </Typography>
  );
}
>>>>>>> 32af7dc242c449160b3346f3ba96ccf195be90d1

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "90vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={12}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
<<<<<<< HEAD
        </Grid>
=======
      </Grid>
>>>>>>> 32af7dc242c449160b3346f3ba96ccf195be90d1
    </ThemeProvider>
  );
}
