import React from 'react';
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    header: {
       backgroundColor: "#282c34",
       color: "#FFF",
       paddingLeft: "60px",
       paddingRight: "60px",
       marginBottom: "50px"
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
        color: "#FFFFFF"
    },
    brand: {
        fontFamily: "Montserrat Alternates, sans-serif",
        fontWeight: 700,
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    }
 }));

const Header = () => {
    const { header, menuButton, brand, toolbar } = useStyles();
    return (
            <AppBar position="fixed" className={header}>
                <Toolbar className={toolbar}>
                   <h2 className={brand}>All Out Catering</h2> 
                    <div>
                        <Button className={menuButton}>Contact</Button>
                        <Button className={menuButton}>About</Button>
                        <Button className={menuButton}>Menu</Button>
                    </div>
                </Toolbar>
            </AppBar>
    )
}

export default Header;