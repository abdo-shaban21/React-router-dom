// import { useNavigate } from "react-router-dom";

import {  Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Wrpperfiled from "../wrapperfiled/Wrpperfiled";
// import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    // const handleSubmit = () => {
    //     navigate("/home"); // Navigate to the Home Page
    // };
    // this is for validation 
    let validationSchema = Yup.object({
        email: Yup.string().email("must be email").required("this is important field"),
        password: Yup.string().required(),
    });
    let intionalvalues = {
        email: "",
        password: "",
    };
    let onSubmit = (values) => {
            navigate("/home"); // Navigate to the Home Page

        console.log(values);
    }
    return (
        <>
            <h2 className="title_form">login</h2>
            <section className="form_container">
                <Formik initialValues={intionalvalues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>
                        <p>email/phone number</p>
                        <Wrpperfiled name="email" isDefault="isDefault" />
                        <p>password</p>
                        <Wrpperfiled name="password" isPassword="isPassword" />
                        {/* <div className="filed_contener">
                                <p>email/phone number</p>
                                <Field type="email" name="email" className="filed" />
                                <p className="errors">{info.errors.email}</p>
                            </div>
                            <div className="filed_contener">
                                <p>password</p>
                                <Field type="password" name="password" className="filed" />

                                <RiEyeCloseLine className="icon_eye hiden" />
                                <RiEyeLine className="icon_eye " />
                                <p className="errors">{info.errors.password}</p>
                            </div> */}
                        <button type="submit"> login</button>
                    </Form>
                </Formik>
            </section>
        </>
    );
}

// const navigate = useNavigate();
//     const handleSubmit = (e) => {
//       e.preventDefault(); // Prevent page reload
//       navigate("/home");  // Navigate to the Home Page
//     }
//   return (
//     <section>
//        <div className="form-container">
//       <form className="simple-form" onSubmit={handleSubmit}>
//         <h2>Sign Up</h2>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" name="name" placeholder="Enter your name" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" placeholder="Enter your email" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name="password" placeholder="Enter your password" required />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//     </section>
//   )
// }
