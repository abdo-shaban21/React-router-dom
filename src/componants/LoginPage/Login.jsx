import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent page reload
      navigate("/");  // Navigate to the Home Page
    }
  return (
    <section>
       <div className="form-container">
      <form className="simple-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </section>
  )
}
