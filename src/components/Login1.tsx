import React, { useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ReportIcon from '@mui/icons-material/Report';
import TextField from '@mui/material/TextField'
const layout = { teamID: '', Username: "", password: '' }
export default function Login1() {
    const [values, setValues] = useState(layout)
    const [flag, setFlag] = useState(layout)
    const [danger, setDanger] = useState(layout)
    const handleChange = (e: any) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        setFlag({ ...flag, [name]: true })
        setDanger({ ...danger, [name]: 'is-success' })
        console.log('change')

    }
    useEffect(() => {
        flag.teamID && !values.teamID && setDanger({ ...danger, teamID: 'is-danger' })
        flag.Username && !values.Username && setDanger({ ...danger, Username: 'is-danger' })
        flag.password && !values.password && setDanger({ ...danger, password: 'is-danger' })
    }, [values])
    const print = (e: any) => {
        console.log('test', e.target.value)
    }
    return (
        <div>
            <form>
                <div className="form-control">
                    <label htmlFor="teamID">Team ID</label>
                    <div className={`control has-icons-right`}
                        style={{ display: 'flex', alignItems: 'center', maxWidth: 'inherit', position: 'relative' }}>
                        <input type="text" id='teamID' name='teamID'
                            className={`input-padding has-right-icon ${danger.teamID}`}
                            style={{ width: '100%' }}
                            value={values.teamID}
                            onChange={handleChange}
                        />
                        {danger.teamID == 'is-success' && <CheckIcon style={{ position: 'absolute', width: '2.5em', right: '0' }} color='success' />}
                        {/* {flag.teamID && !values.teamID && <ReportIcon style={{ color: '#f14668', position: 'absolute', right: '10px' }} />} */}
                        {danger.teamID == 'is-danger' && <ReportIcon style={{ color: '#f14668', position: 'absolute', right: '10px' }} />}
                    </div>
                    {danger.teamID == 'is-danger' && <div className='error'>This is Required</div>}
                    {/* {flag.teamID && !values.teamID && <div className='error'>This is Required</div>} */}

                </div>
                <div className="form-control">
                    <label htmlFor="Username">Username</label>
                    <div className="control has-icons-right"
                        style={{ display: 'flex', alignItems: 'center', maxWidth: 'inherit', position: 'relative' }}>

                        <input type="text" id='Username' name='Username'
                            className={`input-padding has-right-icon ${danger.Username}`}
                            style={{ width: '100%' }}
                            value={values.Username}
                            onChange={handleChange}
                        />
                        {danger.Username == 'is-success' && <CheckIcon style={{ position: 'absolute', width: '2.5em', right: '0' }} color='success' />}
                        {danger.Username == 'is-danger' && <ReportIcon style={{ color: '#f14668', position: 'absolute', right: '10px' }} />}
                    </div>
                    {danger.Username == 'is-danger' && <div className='error'>This is Required</div>}
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <div className="control has-icons-right"
                        style={{ display: 'flex', alignItems: 'center', maxWidth: 'inherit', position: 'relative' }}>

                        <input type="password" id='password' name='password'
                            className={`input-padding has-right-icon ${danger.password}`}
                            style={{ width: '100%' }}
                            value={values.password}
                            onChange={handleChange}
                        />
                        {danger.password == 'is-success' && <CheckIcon style={{ position: 'absolute', width: '2.5em', right: '0' }} color='success' />}
                        {danger.password == 'is-danger' && <ReportIcon style={{ color: '#f14668', position: 'absolute', right: '10px' }} />}
                    </div>
                    {danger.password == 'is-danger' && <div className='error'>This is Required</div>}
                </div>
                <button className='login-btn button' type='submit'>Login</button>
            </form>
        </div>
    )
}
