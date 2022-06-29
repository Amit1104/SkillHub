import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"

function Addtodo({ handleAddTodo }) {
    const formik = useFormik({
        initialValues: {
            task: "Learn React",
            desc: "Learn React",
            // priority: "high"
        },
        validationSchema: yup.object({
            task: yup.string()
                .required("Please Enter Task")
                .min(8, "Enter at least 8 characters"),
            desc: yup.string()
                .required("Please Enter Task")
                .min(8, "Enter at least 8 characters"),
            priority: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            handleAddTodo(values)
            // console.log(resetForm)
        }
    })
    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <h4>Task :</h4>
                        <input type="text" name='task' onBlur={formik.handleBlur} onChange={formik.handleChange}
                            className={formik.touched.task && formik.errors.task ? 'form-control is-invalid' : 'form-control'} />
                        <span className="is-invalid">{formik.errors.task}</span>
                    </div>
                    <div>
                        <h4>Description :</h4>
                        <textarea name="desc" onBlur={formik.handleBlur} onChange={formik.handleChange} cols="50" rows="5"
                            className={formik.touched.desc && formik.errors.desc ? 'form-control is-invalid' : 'form-control'}></textarea>
                        <span className="is-invalid">{formik.errors.desc}</span>
                    </div>
                    <div>
                        <h4>Priority :</h4>
                        <select type="text" name='priority' onBlur={formik.handleBlur} onChange={formik.handleChange}
                            className={formik.touched.select && formik.errors.select ? 'form-control is-invalid' : 'form-control'} >
                            <option value="High" key="High">High</option>
                            <option value="Medium" key="Medi">Medium</option>
                            <option value="Low" key="Low">Low</option>
                        </select>
                        <span className="is-invalid">{formik.errors.task}</span>
                    </div><br />
                    <button onClick={handleAddTodo} className="btn btn-primary">Add todo</button>
                    <br /><br />
                </form>
            </div>
        </>
    )
}

export default Addtodo