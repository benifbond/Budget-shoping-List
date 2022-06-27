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
    <Box sx={{ width: 500 }}>
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
