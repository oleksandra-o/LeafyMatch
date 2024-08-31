import React, { useState } from 'react';
import '../styles.css';


const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between sign in and sign up

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            {
              isSignIn ? (
                <>
                  <h2>Sign In</h2>
                  <form>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                  </form>
                  <p className="mt-3">Don't have an account? <span className="text-primary" style={{ cursor: 'pointer' }} onClick={toggleForm}>Sign Up</span></p>
                </>
              ) : (
                <>
                  <h2>Sign Up</h2>
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                  </form>
                  <p className="mt-3">Already have an account? <span className="text-primary" style={{ cursor: 'pointer' }} onClick={toggleForm}>Log In</span></p>
                </>
              )
            }
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SignIn;
