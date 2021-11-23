import React from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'

const initialValues = { teamID: '', username: '', password: '' }
const onSubmit = (values: any) => {
    console.log('formValues', values)
}
const validate = (values: any) => {
    let errors: any = {}
    if (!values.teamID) { errors.teamID = 'Required TeamID' }
    if (!values.username) { errors.username = "Username is required" }
    if (!values.password) { errors.password = "enter password" }
    return errors;
}

export default function LoginForm() {
    const formik = useFormik({ initialValues, onSubmit, validate })
    console.log("values", formik.values)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="teamID">Team ID</label>
                    <input type="text" id='teamID' name='teamID'
                        className={`${formik.touched.teamID && formik.values.teamID ? 'is-success' : 'is-danger'}`}
                        // className='input-padding has-right-icon'
                        onBlur={formik.handleBlur}
                        onChange={(e) => formik.handleChange(e)} value={formik.values.teamID} />
                    {formik.touched.teamID && formik.errors.teamID ? <div className='error'>{formik.errors.teamID}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="username">UserName</label>
                    <input type="text" id='username' name='username'
                        className={`${formik.touched.username && formik.values.username ? 'is-success' : 'is-danger'}`}
                        onBlur={formik.handleBlur}
                        onChange={(e) => formik.handleChange(e)} value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="passwrod">Password</label>
                    <input type="passwrod" id='password' name='password'
                        className={`${formik.touched.password && formik.values.password ? 'is-success' : 'is-danger'}`}
                        onBlur={formik.handleBlur}
                        onChange={(e) => formik.handleChange(e)} value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                </div>
                <button className='login-btn button' type='submit'>Login</button>
            </form>
        </div>
    )
}
