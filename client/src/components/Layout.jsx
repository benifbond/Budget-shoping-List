import {
  ActionIcon,
  Anchor,
  AppShell,
  Box,
  Header,
  Image,
  Navbar,
  Title,
} from "@mantine/core";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ArrowAutofitContent, Logout } from "tabler-icons-react";
import { SessionContext } from "../contexts/SessionContext";

const Layout = ({ children }) => {
  const { isAuthenticated, logout } = useContext(SessionContext);

  return (
    <AppShell
      padding="md"
      // navbar={
      //   <Navbar width={{ base: ArrowAutofitContent }} p="xs">

      // }
      header={
        <Header height={80} p="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              flexWrap: "nowrap",
            }}
          >
            {!isAuthenticated ? (
              <>
                <Anchor
                  component={NavLink}
                  to="/signup"
                  style={({ isActive }) =>
                    isActive ? { color: "tomato" } : undefined
                  }
                >
                  Signup
                </Anchor>
                <Anchor
                  component={NavLink}
                  to="#"
                  style={({ isActive }) =>
                    isActive ? { color: "lightblue" } : undefined
                  }
                >
                  Login
                </Anchor>
              </>
            ) : (
              <>
                <Anchor
                  component={NavLink}
                  to="/beers"
                  style={({ isActive }) =>
                    isActive ? { color: "tomato" } : undefined
                  }
                >
                  Beers
                </Anchor>
                <Anchor
                  component={NavLink}
                  to="#"
                  style={({ isActive }) =>
                    isActive ? { color: "tomato" } : undefined
                  }
                >
                  Ba
                </Anchor>
                <ActionIcon onClick={logout}>
                  <Logout size={48} strokeWidth={2} color={"black"} />
                </ActionIcon>
              </>
            )}
            {/* </Navbar> */}
          </Box>
        </Header>
      }
      styles={{
        main: {
          backgroundColor: "#E8D3B9",
        },
      }}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
