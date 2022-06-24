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
      header={
        <Header height={60} p="xs">
          <Box sx={{ display: "grid", gridTemplate: "1fr / 100px 1fr" }}>
            <Anchor component={NavLink} to="/signup">
              Signup
            </Anchor>
            <Anchor
              component={NavLink}
              to="/login"
              style={({ isActive }) =>
                isActive ? { color: "blue" } : undefined
              }
            >
              <Anchor
                component={NavLink}
                to="/profile"
                style={({ isActive }) =>
                  isActive ? { color: "blue" } : undefined
                }
              ></Anchor>
              Login
            </Anchor>
          </Box>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default Layout;

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { SessionContext } from "../contexts/SessionContext";
// import { useContext } from "react";
// // import { NavLink } from "react-router-dom";
// function Layout({ children }) {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">Minijob App</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/signup">Signup</Nav.Link>
//             <Nav.Link href="/login">Login</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
// export default Layout;
