import React from "react";
import {AppBar, Box, Button, Toolbar} from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";


export const AnimatedDatabricks = ({color, scale, height, width} :
                                       {color?: string, scale?: number, height?: number, width?: number}) => {
    return <SvgIcon style={{height: height ?? 28, width: width ?? 28, color: color ?? "red"}}>
        <motion.path
            // fill="transparent"
            strokeWidth="1"
            transform={`scale(${scale ?? 1})`}
            stroke="rgba(255, 255, 255, 0.69)"
            strokeLinecap="round"
            color={color ?? "red"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
            d="M.95 14.184 12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974 2.647 6.681 12 1.388l7.76 4.368.668-.411v-.566L12 0 .95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52 1.516 9.56l-.565.308z"/>
    </SvgIcon>
}

export const Navbar = () => {
    // const transition =
    return <AppBar position="sticky"
    style={{backgroundColor: "#12262e"}}>
        <Toolbar variant="dense">
            <Link to={"/"} style={{ textDecoration: 'none'}}>
                <AnimatedDatabricks/>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, paddingLeft: 3 }}>
                <Link to={"/"} style={{ textDecoration: 'none', color: "white" }}>
                    <Button
                        key={"app"}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Home
                    </Button>
                </Link>
            </Box>
            {/*<Link to={"/"} style={{ textDecoration: 'none', color: "white" }}>*/}
            {/*    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>*/}
            {/*        Home*/}
            {/*    </Typography>*/}
            {/*</Link>*/}
        </Toolbar>
    </AppBar>
}