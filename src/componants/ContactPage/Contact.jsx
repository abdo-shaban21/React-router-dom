import { NavLink, Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <section className="contact">
      <div className="side_bar">
        <ul>
        <NavLink to="" end>Contact Us Form</NavLink>
        <NavLink to="email">Emails</NavLink>
        <NavLink to="location">Locations</NavLink>
        <NavLink to="phone">Phone Number</NavLink>
          
        </ul>
      </div>
      {/* <h1>Welcome To contact us Page</h1> */}
      <Outlet/>
    </section>
  );
}
