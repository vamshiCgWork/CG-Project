import React, { useState } from 'react'
import { TextField } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import ReportIcon from '@mui/icons-material/Report';
import { Button } from '@mui/material';


const layout = { teamID: '', Username: '', password: '' }
export default function Log() {

    const [values, setValues] = useState(layout)
    const [flag, setFlag]: any = useState(layout)

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        setFlag({ ...flag, [name]: true })
        console.log('change')
    }

    return (
        <div>
            <form>
                <div className="card">
                    <div className="card-header">
                        Login
                    </div>
                    <div className="card-content">
                        <div className='mb' >
                            <TextField variant='outlined' focused={flag.teamID && values.teamID} style={{ position: 'relative' }}
                                size='small' name='teamID'
                                label='TeamID'
                                value={values.teamID}
                                onChange={handleChange}
                                error={flag.teamID && !values.teamID}
                                color={values.teamID ? 'success' : 'primary'}
                                helperText={flag.teamID && !values.teamID && 'Required'} />
                            {flag.teamID && !values.teamID && <ReportIcon style={{ color: '#f14668', position: 'absolute' }} />}
                            {flag.teamID && values.teamID && <CheckIcon style={{ position: 'absolute' }} color='success' />}
                        </div>
                        <div className='mb' style={{ position: 'relative' }}>
                            <TextField variant='outlined' focused={flag.Username} style={{ position: 'relative' }}
                                size='small' name='Username'
                                label='UserName'
                                value={values.Username}
                                onChange={handleChange}
                                color={values.Username ? 'success' : 'primary'}
                                error={flag.Username && !values.Username}
                                helperText={flag.Username && !values.Username && 'Required'} />
                            {flag.Username && !values.Username && <ReportIcon style={{ color: '#f14668', position: 'absolute' }} />}
                            {flag.Username && values.Username && <CheckIcon style={{ position: 'absolute' }} color='success' />}
                        </div>
                        <div className='mb' >
                            <TextField variant='outlined' focused={flag.password} style={{ position: 'relative' }}
                                size='small' name='password'
                                label='Password'
                                value={values.password}
                                onChange={handleChange}
                                error={flag.password && !values.password}
                                color={values.password ? 'success' : 'primary'}
                                helperText={flag.password && !values.password && 'Required'} />
                            {flag.password && !values.password && <ReportIcon style={{ color: '#f14668', position: 'absolute' }} />}
                            {flag.password && values.password && <CheckIcon style={{ position: 'absolute' }} color='success' />}
                        </div>
                        <Button variant="contained" size='small' style={{ display: 'block' }}>Login</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
