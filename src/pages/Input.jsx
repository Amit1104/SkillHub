import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"

const Input = () => {
    const formik = useFormik({
        initialValues: {
            task: "john",
            desc: "doe"
        },
        validationSchema: yup.object({
            task: yup.string().required().min(8, "Enter minimum 8 characters").max(20, "Enter max 20 characters"),
            desc: yup.string().required().min(8, "Enter minimum 8 characters").max(20, "Enter max 20 characters")
        }),
        onSubmit: e => { console.log("Clicked"); }
    })
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 offset-sm-3">

                        <label for="name" class="form-label">Task</label>
                        <input type="text" class={formik.errors.task && formik.touched.task ? "form-control is-invalid" : "form-control"}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            name='task' placeholder="Enter Task Name" />
                        <div class="invalid-feedback">{formik.errors.task}</div>

                        <label for="name" class="form-label">Description</label>
                        <input type="text" class={formik.errors.desc && formik.touched.desc ? "form-control is-invalid" : "form-control"}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            name='desc' placeholder="Enter Task Description" />
                        <div class="invalid-feedback">{formik.errors.desc}</div>
                        {/* {JSON.stringify(formik.errors)} */}
                        <button className='btn btn-outline-info w-100'>Submit</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Input