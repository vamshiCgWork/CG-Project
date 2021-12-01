import { Autocomplete, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Model = ['Honda', 'Maruthi', 'Tata']
export default function NewVehicle() {
    return (
        <div>
            <Container>
                <Grid container
                    justifyContent={'center'}
                    sx={{ backgroundColor: '#EAEEF3', borderRadius: '8px' }}

                >
                    <Grid item sx={{ m: 5 }} >
                        <Typography sx={{ fontWeight: 600, color: 'orange' }}>ADD NEW VEHICLE</Typography>
                    </Grid>
                    <Grid container
                        justifyContent={'space-around'}
                        sx={{ mb: 2 }}
                    >
                        <Grid item
                            xs={4}
                            display={'flex'} >
                            <Autocomplete
                                sx={{ flexGrow: 1 }}
                                options={Model}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        label='Select Make'
                                        required placeholder='HONDA_XZ'
                                    >select</TextField>}
                            />
                            <Button variant='outlined' sx={{ pl: 4, pr: 4, ml: 2 }}>ADD</Button>
                        </Grid>
                        <Grid item
                            xs={3}
                        >
                            <Autocomplete
                                sx={{ flexGrow: 1 }}
                                options={Model}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        label='Select Variant'
                                        required placeholder='HONDA_XZ'
                                    >select</TextField>}
                            />
                        </Grid>

                    </Grid>
                    <Grid container
                        justifyContent={'space-around'}
                        sx={{ mb: 2 }}
                    >
                        <Grid item
                            xs={4}
                            display={'flex'} >
                            <Autocomplete
                                sx={{ flexGrow: 1 }}
                                options={Model}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        label='Select Make'
                                        required placeholder='HONDA_XZ'
                                    >select</TextField>}
                            />
                            <Button variant='outlined' sx={{ pl: 4, pr: 4, ml: 2 }}>ADD</Button>
                        </Grid>
                        <Grid item
                            xs={3}
                        >
                            <Autocomplete
                                sx={{ flexGrow: 1 }}
                                options={Model}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        label='Select Variant'
                                        required placeholder='HONDA_XZ'
                                    >select</TextField>}
                            />
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
