import React from 'react'
import { Field, Formik, FormikConsumer, useFormik } from 'formik'
import { TextField } from '@mui/material'

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

function validateUsername(value: string) {
    let error;
    if (value === 'admin') {
        error = 'Nice try!';
    }
    return error;
}
export default function Logg() {
    const formik = useFormik({ initialValues, onSubmit, validate })
    return (
        <div>
            <form >
                <Field label='TeamID' variant='outlined' name='teamID'
                    value={formik.values.teamID}
                    error={formik.touched.teamID && !formik.values.teamID}
                    helperText={'Required'}
                    onBlur={formik.handleBlur}
                    validate={validateUsername}
                />

            </form>
        </div>
    )
}
