import React from 'react'
import { useForm, FieldValues } from "react-hook-form"

interface FormData {
    name: string;
    age: number;
}

const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = (data: FieldValues) => { console.log(data) }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form form-label">Name</label>
                <input {...register('name', { required: true, minLength: 5 })} id='name' className='form-control' type="text" />
                {errors.name?.type === 'required' && <p className="text-danger"> The name field is required.  </p>}
                {errors.name?.type === 'minLength' && <p className="text-danger"> The name must be 5 char  </p>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label"></label>
                <input {...register('age', { required: true })} id='age' type="number" className="form-control" />
                {errors.age?.type === 'required' && <p className="text-danger"> The Age field is required.  </p>}
            </div>
            <button className="btn btn-primary" type='submit'>Submit</button>
        </form>
    )
}
export default Form
