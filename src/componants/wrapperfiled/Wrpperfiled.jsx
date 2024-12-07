// import React from 'react'
/* eslint-disable react/prop-types */

import { ErrorMessage, Field } from "formik";
import ErrorMessageField from "./ErrorMessageField";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useState } from "react";

export default function Wrpperfiled({ name, placeholder, isDefault, isPassword, isTextArea }) {
    let [show, setshow] = useState("text")
    // setshow()show+1
    const handelClick = () => {
        setshow(name = show) 
        ;
    }

    return (
        <div className="filed_contener">
            {isDefault && <Field name={name} className="filed" placeholder={placeholder} />}
            {isPassword && (
                <Field name={name} placeholder={placeholder}>
                    {({ field }) => (
                        <>
                            <input type={name} className="filed" {...field} />
                            {/* <p>{show}</p> */}
                            <RiEyeCloseLine className="icon_eye " />
                            <RiEyeLine className="icon_eye hiden" onClick={handelClick} />
                        </>
                    )}
                    {/* <p>test</p> */}
                </Field>
            )}
            {isTextArea && (
                <Field name={name} className="filed" placeholder={placeholder}>
                    {({ field }) => <textarea {...field} />}
                </Field>
            )}
            <ErrorMessage name={name} component={ErrorMessageField} />
            {/* <Field name={name} type="name" className="filed" /> */}
        </div>
    );
}
