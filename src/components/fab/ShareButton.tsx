import {Fab} from "@mui/material";
import {MobileView} from "react-device-detect";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";
import {useQrModal} from "../qrmodal/QrModal";

export default function MobileShareButton() {
    const [handleOpen, modal] = useQrModal()
    return (
        <MobileView>
            <>
                <Fab
                    onClick={() => {
                        // @ts-ignore
                        handleOpen();
                    }}
                    style={{
                        margin: 0,
                        top: 'auto',
                        right: 20,
                        bottom: 20,
                        left: 'auto',
                        position: 'fixed',
                    }}>
                    <ShareIcon/>
                </Fab>
                {modal}
            </>
        </MobileView>
    );
}