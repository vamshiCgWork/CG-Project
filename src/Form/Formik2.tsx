import { Box, Button, Grid, Paper, styled, TextField } from '@mui/material'
import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import EnterInput from './EnterInput'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const initialValues = { name: '' }
const validate = Yup.object({
    name: Yup.string().max(10, 'should be less').required('Required')
})
export default function Formik2() {
    return (
        <Box sx={{
            flexGrow: 1, backgroundColor: 'red',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            minHeight: '100vh'
        }}>
            <Grid container spacing={2}
                justifyContent="center"
                alignItems="center">
                <Grid item xs={7}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={5}
                    justifyContent='center'
                    alignItems="center"
                    display='flex'
                    sx={{ backgroundColor: "yellow", height: '100vh', p: 1.5 }}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={values => { console.log('submit', values) }}
                        validationSchema={validate}
                    >

                        {formik => (
                            <div>
                                <h1> Login</h1>
                                <Form >
                                    {/* <TextField variant='outlined' fullWidth label='name'
                                        name='name'
                                        sx={{ backgroundColor: 'red' }}
                                    ></TextField> */}
                                    <EnterInput label="First Name" name="name" type="text" />
                                    <Button type='submit'>Submit</Button>
                                </Form>
                            </div>
                        )}

                    </Formik >
                </Grid>

            </Grid>
        </Box>

    )
}


