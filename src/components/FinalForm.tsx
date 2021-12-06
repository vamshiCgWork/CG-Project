import { ExpandMore } from '@mui/icons-material'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, TextField, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import CheckIcon from '@mui/icons-material/Check';
import ReportIcon from '@mui/icons-material/Report';
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface Props {
    submittedValues: any,
    setsubmittedValues: any
}

const layout = { TeamID: '', UserName: '', Password: '' }
export default function FinalForm({ submittedValues, setsubmittedValues }: Props) {

    const [values, setValues] = useState(layout)
    const [flag, setFlag]: any = useState(layout)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleChange = (e: any) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        setFlag({ ...flag, [name]: true })
        console.log('change')
    }
    function success() {
        console.log('success')
        return flag.TeamID && values.TeamID && <CheckIcon style={{ position: 'absolute' }} color='success' />
    }
    function fail() {
        console.log('fail')
        return flag.TeamID && !values.TeamID && <ReportIcon style={{ color: '#f14668', position: 'absolute' }} />
    }
    const validation = () => {
        !values.TeamID && setFlag({ ...flag, TeamID: true })
        !values.UserName && setFlag({ ...flag, UserName: true })
        !values.Password && setFlag({ ...flag, Password: true })
        if (!values.TeamID && !values.UserName) {
            setFlag({ ...flag, TeamID: true, UserName: true })
        }
        if (!values.TeamID && !values.Password) {
            setFlag({ ...flag, TeamID: true, Password: true })
        }
        if (!values.UserName && !values.Password) {
            setFlag({ ...flag, UserName: true, Password: true })
        }
        if (!values.TeamID && !values.UserName && !values.Password) {
            setFlag({ ...flag, TeamID: true, UserName: true, Password: true })
        }
    }
    useEffect(() => {
        isSubmitted && validation()
    }, [isSubmitted])


    function handleSubmit(e: any) {
        e.preventDefault();
        setIsSubmitted(true)
        setsubmittedValues(values)
        success();
        fail()

        values.TeamID && values.UserName && values.Password &&
            axios.post('https://localhost:3000', values).then(
                res => {
                    console.log('call', res)
                }
            ).catch(err => console.log('error', err))
    }
    return (
        <Box>
            <Grid container>
                <Grid item xs={7}
                    display={'flex'}
                    justifyContent={'center'}
                    sx={{ backgroundColor: '#425bc2' }}
                >
                    <Grid container justifyContent={'space-evenly'} alignItems={'center'}
                        sx={{ backgroundColor: '#252b9c', height: '10vh', width: '50%', mt: 10, color: 'white' }}>
                        <Grid item >LABEL</Grid>
                        <Grid item >PDAS MANAGMENT TOOL</Grid>
                    </Grid>

                </Grid>
                <Grid item xs={5}
                //sx={{ backgroundColor: '#252b9c' }}
                >
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <Card
                            sx={{ maxWidth: '100%', height: '100vh' }}
                        //sx={{ maxWidth: '100%', height: '100vh', backgroundColor: '#252b9c', color: 'white' }} 
                        >
                            <CardHeader sx={{ m: 10 }}
                                title={<Typography>Login</Typography>}
                            />
                            <CardContent sx={{ m: 10, pr: 16 }}>
                                <TextField name='TeamID'
                                    error={flag.TeamID && !values.TeamID}
                                    color={values.TeamID ? 'success' : 'primary'}
                                    helperText={flag.TeamID && !values.TeamID && 'Required'}
                                    value={values.TeamID} onChange={handleChange} sx={{ mb: 2, color: 'white' }} fullWidth label='TeamID'>TeamID</TextField>
                                {fail()}
                                {success()}
                                <TextField name='UserName'
                                    error={flag.UserName && !values.UserName}
                                    color={values.UserName ? 'success' : 'primary'}
                                    helperText={flag.UserName && !values.UserName && 'Required'}
                                    value={values.UserName} onChange={handleChange} sx={{ mb: 2 }} fullWidth label='UserName'>UserName</TextField>
                                {flag.UserName && !values.UserName && <ReportIcon style={{ color: '#f14668', position: 'absolute' }} />}
                                {flag.UserName && values.UserName && <CheckIcon style={{ position: 'absolute' }} color='success' />}

                                <TextField name='Password'
                                    error={flag.Password && !values.Password}
                                    color={values.Password ? 'success' : 'primary'}
                                    helperText={flag.Password && !values.Password && 'Required'}
                                    value={values.Password} onChange={handleChange} sx={{ mb: 2 }} fullWidth label='Password' type='password'>Password</TextField>
                                {flag.Password && !values.Password && <ReportIcon style={{ color: '#f14668', position: 'absolute' }} />}
                                {flag.Password && values.Password && <CheckIcon style={{ position: 'absolute' }} color='success' />}



                                <Typography>Forgot Password ?</Typography>
                                <Grid container sx={{ m: 10, mt: 0 }}></Grid>
                                <Grid item sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography >
                                        <a href="#">Don't have an account ?</a>
                                    </Typography>
                                    <Button
                                    //sx={{ color: 'white' }}
                                    >SIGN UP</Button></Grid>
                                <Grid item xs={12}><Button variant='contained' fullWidth type='submit'> SIGN IN</Button></Grid>
                            </CardContent>
                        </Card></form>
                </Grid >
            </Grid >
        </Box >
    )
}
