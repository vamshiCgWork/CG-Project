import React from 'react'
import { ErrorMessage, FieldHookConfig, useField } from 'formik';

interface Props {
    label: string,
    name: string,
    type: string
}

export default function EnterInput({ label, ...props }: Props) {
    const [field, meta] = useField({ ...props })
    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            />
            <ErrorMessage component='div' name={field.name} className='error' />
        </div>
    )
}


