import { NavLink, Link } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";

import UserAuthModal from "./modals/UserAuthModal.jsx";
import EmployerAuthModal from "./modals/EmployerAuthModal.jsx";

export default function Layout({ children }) {
  const [value, setValue] = React.useState(0);

  return (
<<<<<<< HEAD
    <Box
      sx={{
        width: "auto",
        margin: " 20px",
      }}
    >
=======
    <Box sx={{ width: 1000 }}>
>>>>>>> 0f3a379d6b8e30f36b710612c444d5214434b35e
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          component={NavLink}
          to="/"
          icon={<HomeIcon />}
        />
        <UserAuthModal />
        <EmployerAuthModal />
      </BottomNavigation>

      {children}
    </Box>
  );
}
