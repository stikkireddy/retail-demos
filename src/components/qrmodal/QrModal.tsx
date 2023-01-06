import React from "react";
import {Box, Modal} from "@mui/material";
import Typography from "@mui/material/Typography";
import QRCode from "react-qr-code";


const style = {
    position: 'absolute' as 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const useQrModal = (qrValue?: string) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return [
        handleOpen
        ,<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            {/*<Typography id="modal-modal-title" variant="h6" component="h2">*/}
            {/*    Text in a modal*/}
            {/*</Typography>*/}
            <QRCode
                size={256}
                // style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={qrValue ?? "https://stikkireddy.github.io/retail-demos/#/"}
                viewBox={`0 0 256 256`}
            />
            {/*<Typography id="modal-modal-description" sx={{mt: 2}}>*/}
            {/*    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.*/}
            {/*</Typography>*/}
        </Box>
    </Modal>]
}
