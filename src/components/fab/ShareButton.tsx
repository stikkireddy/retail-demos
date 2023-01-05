import {Fab} from "@mui/material";
import {MobileView} from "react-device-detect";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";

export default function MobileShareButton() {
    return (
        <MobileView>
            <Fab style={{
                margin: 0,
                top: 'auto',
                right: 20,
                bottom: 20,
                left: 'auto',
                position: 'fixed',
            }}>
                <ShareIcon/>
            </Fab>
        </MobileView>
    );
}