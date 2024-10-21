import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { MdDashboard } from "react-icons/md";
import { BsPlayBtnFill } from "react-icons/bs";
import { MdVideoLibrary, MdAdminPanelSettings } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../images/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
const drawerWidth = 272;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Dashboard() {
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");



  const logout = () => {
    if (token) {
      localStorage.removeItem("accessToken");
      navigate("/login");
    } else {
      navigate("/");
    }
  };



  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [activeIndex, setActiveIndex] = React.useState(null); // Track active item index

  const handleListItemClick = (index) => {
    setActiveIndex(index); // Update the active index
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: "#019BA7", // Replace #yourColor with the desired background color
          }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: "none" },
            ]}>
            <MenuIcon />
          </IconButton>

          <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
            {/* Video Tutorial */}
            <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
              <MdVideoLibrary size={20} style={{ marginRight: 5 }} />
              <Typography>Video Tutorial</Typography>
            </Box>

            {/* Admin */}
            <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
              <MdAdminPanelSettings size={20} style={{ marginRight: 5 }} />
              <Typography>Admin</Typography>
              <ArrowDropDownIcon />
            </Box>

            {/* Marcus Jovanovich */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BsPersonCircle size={20} style={{ marginRight: 5 }} />
              <Typography>Marcus Jovanovich</Typography>
              <ArrowDropDownIcon />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>

           <div onClick={logout} className="btn btn-danger logout">logout</div> 
              </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#00ADBB",
            color: "white", // Apply background color here
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <img src={logo} width="84%" />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
      
                  <ListItem disablePadding   sx={{
                backgroundColor:
                  activeIndex === 0 ? "#018292" : "transparent",
              }}
              onClick={() => handleListItemClick(0)}>
              <ListItemButton >
                <ListItemIcon sx={{ color: "white" }}>
                  <MdDashboard width={20} color="white" />
                </ListItemIcon>
                <Link to="/" style={{color:"white",textDecoration:"none"}}>

                  <ListItemText primary="Dashboard" />
                </Link>
              </ListItemButton>
                  </ListItem>


                  <ListItem disablePadding   sx={{
                backgroundColor:
                  activeIndex === 1 ? "#018292" : "transparent",
              }}
              onClick={() => handleListItemClick(1)}>
                      <ListItemButton >
                          

                <ListItemIcon sx={{ color: "white" }}>
                  <BsPlayBtnFill width={20} color="white" />
                </ListItemIcon>
                <Link to="/signup" style={{color:"white",textDecoration:"none"}}>

                  <ListItemText primary="Client Mortgage Data" />
                </Link>
              </ListItemButton>
            </ListItem>
        </List>

        {/* ======================================================= */}
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
