import React, { useState, useEffect } from 'react'
import { TextField } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import ReportIcon from '@mui/icons-material/Report';
import { Button } from '@mui/material';
import axios from 'axios';
import { ValidationError } from 'yup';


const layout = { TeamID: '', UserName: '', Password: '' }
export default function Log() {

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
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="card">
                    <div className="card-header">
                        Login
                    </div>
                    <div className="card-content">
                        <div className='mb' >
                            <TextField variant='outlined' focused={flag.TeamID && values.TeamID} style={{ position: 'relative' }}
                                size='small' name='TeamID'
                                label='TeamID'
                                value={values.TeamID}
                                onChange={handleChange}
                                error={flag.TeamID && !values.TeamID}
                                color={values.TeamID ? 'success' : 'primary'}
                                helperText={flag.TeamID && !values.TeamID && 'Required'} />
                            {fail()}
                            {success()}
                        </div>
                        <div className='mb' style={{ position: 'relative' }}>
                            <TextField variant='outlined' focused={flag.UserName} style={{ position: 'relative' }}
                                size='small' name='UserName'
                                label='UserName'
                                value={values.UserName}
                                onChange={handleChange}
                                color={values.UserName ? 'success' : 'primary'}
                                error={flag.UserName && !values.UserName}
                                helperText={flag.UserName && !values.UserName && 'Required'} />
                            {flag.UserName && !values.UserName && <ReportIcon style={{ color: '#f14668', position: 'absolute' }} />}
                            {flag.UserName && values.UserName && <CheckIcon style={{ position: 'absolute' }} color='success' />}
                        </div>
                        <div className='mb' >
                            <TextField variant='outlined' focused={flag.Password} style={{ position: 'relative' }}
                                size='small' name='Password'
                                label='Password'
                                value={values.Password}
                                onChange={handleChange}
                                error={flag.Password && !values.Password}
                                color={values.Password ? 'success' : 'primary'}
                                helperText={flag.Password && !values.Password && 'Required'} />
                            {flag.Password && !values.Password && <ReportIcon style={{ color: '#f14668', position: 'absolute' }} />}
                            {flag.Password && values.Password && <CheckIcon style={{ position: 'absolute' }} color='success' />}
                        </div>
                        <Button type='submit'
                            variant="contained" size='small' style={{ display: 'block' }}>Login</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
