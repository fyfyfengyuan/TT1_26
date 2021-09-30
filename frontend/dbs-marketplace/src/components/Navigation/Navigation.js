import {
    AppBar,
    ListItem,
    Toolbar,
    IconButton,
    Typography,
  } from "@material-ui/core";
  import React, {useState} from "react";
  import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
  import List from "@material-ui/core/List";
  import ListItemIcon from "@material-ui/core/ListItemIcon";
  import ListItemText from "@material-ui/core/ListItemText";
  import MenuIcon from "@material-ui/icons/Menu";
  import { Link } from "react-router-dom";
  import NavigationJson from "./Navigation.json";
  import Logo from "./../../assets/dbs-logo.png";
  import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
  import HomeIcon from "@mui/icons-material/Home";
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

  const Navigation = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <React.Fragment>
        <AppBar position="static" style={{ backgroundColor: "red" }}>
          <Toolbar>
            <IconButton
              onClick={() => setOpen(true)}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
  
            <Typography className="no_deco" variant="h6">
              DBS Marketplace
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <div style={{ width: "100%", height:"auto" }}>
            <img src={Logo} alt="logo" className="nav_logo" />
            <List>
              {NavigationJson.navigation.map((jsonDirectories) => (
                <div key={jsonDirectories.name}>
                  <div
                    onClick={() => itemOnTap(jsonDirectories.name)}
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <ListItem button component={Link} to={jsonDirectories.url}>
                      <ListItemIcon>
                        {jsonDirectories.name === NavigationJson.navigation[0].name ? (
                          <HomeIcon />
                        ) : jsonDirectories.name === NavigationJson.navigation[1].name ? (
                          <AccountCircleIcon/>
                        ) : jsonDirectories.name === NavigationJson.navigation[2].name ? (
                          <ShoppingBasketIcon />
                        ) : (
                          <SwapHorizIcon />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={jsonDirectories.name} />
                    </ListItem>
                  </div>
                </div>
              ))}
            </List>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    );
  
    function itemOnTap(item) {
      setOpen(false);
    }
  };
  
  export default Navigation;