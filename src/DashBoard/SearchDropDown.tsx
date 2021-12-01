import React from 'react';
import { Autocomplete, Button, Grid, styled, TextField, alpha, Typography, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import { ExpandMore } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

const clientNames = [
    { label: 'Client 1', value: '1' },
    { label: 'Client 2', value: '2' }]
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '8px',
    p: 0,
};

export default function SearchDropDown() {
    //for Modal
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    //  
    return (
        <div>
            <Grid container sx={{ mt: 5, mb: 3 }}
                justifyContent={'center'}>
                <Grid item xs={5} sx={{ mb: 1.5, ml: 1 }}>
                    Select the Client for which you would like to review/moderate data
                </Grid>
                <Grid
                    container
                    justifyContent={'center'}
                    alignItems={'center'}
                    columnSpacing={{ xs: 1 }}
                >
                    <Grid item xs={4}>
                        <Autocomplete
                            size='small'
                            options={clientNames}
                            renderTags={(params) => { return <SearchIcon sx={{ color: 'red' }} /> }}
                            renderInput={(params) =>
                                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                    <SearchIcon style={{ position: 'absolute' }} sx={{ ml: 1.5 }} />
                                    <TextField {...params} /></div>}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant={'contained'} onClick={handleOpenModal}>Next
                            <ArrowForwardIcon fontSize='small' sx={{ ml: 3 }} />
                        </Button>

                    </Grid>
                </Grid>
            </Grid>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card >
                        <CardHeader sx={{ pb: 0 }}
                            action={
                                <IconButton aria-label="settings">
                                    <CloseIcon />
                                </IconButton>
                            }
                        />
                        <Box sx={{ p: 2, pt: 0 }}>
                            <CardContent>
                                <Grid container sx={{ mb: 3 }}
                                    justifyContent={'start'}>
                                    <Grid item sx={{ mb: 1.5, ml: 1 }}>
                                        Select the Client for which you would like to review/moderate data
                                    </Grid>
                                    <Grid
                                        container sx={{ mb: 10 }}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                    >
                                        <Grid item xs={12}>
                                            <Autocomplete
                                                size='small'
                                                options={clientNames}
                                                renderTags={(params) => { return <SearchIcon sx={{ color: 'red' }} /> }}
                                                renderInput={(params) =>
                                                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                                        <SearchIcon style={{ position: 'absolute' }} sx={{ ml: 1.5 }} />
                                                        <TextField {...params} /></div>}
                                            />
                                        </Grid>

                                    </Grid>
                                </Grid>
                                <Grid container justifyContent={'end'}>
                                    <Button variant={'contained'} >Next
                                        <ArrowForwardIcon fontSize='small' sx={{ ml: 3 }} />
                                    </Button></Grid>
                            </CardContent>
                        </Box>
                    </Card>
                </Box>
            </Modal >
        </div >
    )
}
