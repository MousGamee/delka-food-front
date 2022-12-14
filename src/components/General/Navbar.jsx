import LogoDevIcon from "@mui/icons-material/LogoDev";
import { AppBar, Box, IconButton, Toolbar, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar
                variant="regular"
                sx={{
                    backgroundColor: "#e5fae1",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: { xs: "row", lg: "column" },
                    padding: "40px 0"
                }}
            >
                <img src="./images/logo-white.png" className="logo" />

                <Stack direction={"row"} spacing={2} sx={{
                    display: { xs: "none", lg: "block" }
                }} >
                    <Link>Acceuil</Link>
                    <Link>Notre cartes</Link>
                    <Link>Blog</Link>
                    <Link>A prospos</Link>
                    <Link>Contact</Link>
                </Stack>
                <Button variant="text" sx={{
                    display: { xs: "block", lg: "none" }
                }}>
                    <MenuIcon />
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
