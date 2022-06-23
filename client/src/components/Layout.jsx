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
import { Logout } from "tabler-icons-react";
import { SessionContext } from "../contexts/SessionContext";

const Layout = ({ children }) => {
  const { isAuthenticated, logout } = useContext(SessionContext);

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 100 }} p="xs">
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
                to="/login"
                style={({ isActive }) =>
                  isActive ? { color: "tomato" } : undefined
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
                to="/bars"
                style={({ isActive }) =>
                  isActive ? { color: "tomato" } : undefined
                }
              >
                Bars
              </Anchor>
              <ActionIcon onClick={logout}>
                <Logout size={48} strokeWidth={2} color={"black"} />
              </ActionIcon>
            </>
          )}
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Box sx={{ display: "grid", gridTemplate: "1fr / 100px 1fr" }}>
            <Image />
            <Title order={3} align="center">
              Where can I get a drink ?
            </Title>
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
