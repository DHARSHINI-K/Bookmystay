import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [signupError, setSignupError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const navigate=useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Perform form validation
    let isValid = true;
    if (username.trim() === '') {
      setUsernameError('Enter username');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (email.trim() === '') {
      setEmailError('Enter email');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password.trim() === '') {
      setPasswordError('Enter password');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // If the form is valid, proceed with signup
    if (isValid) {
      const requestData = {
        name: username,
        email,
        password,
      };

      fetch('http://localhost:8081/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            // Signup successful, redirect to login page
            navigate('/login');
          } else {
            setSignupError(data.message);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setSignupError('An error occurred during signup.');
        });
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    // Password strength validation criteria
    const strongRegex = new RegExp(
      '^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])'
    );
    const isStrongPassword = strongRegex.test(passwordValue);

    setPasswordStrength(isStrongPassword ? 'Strong Password' : 'Weak Password');
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="/static/media/about_pic.f1d3942b20593b137c89.jpeg"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSignup}>
                      <center>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Create an account</h5>
                      </center>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Username">Username</label>
                        <input
                          type="text"
                          id="form2Username"
                          className="form-control form-control-lg"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                        {usernameError && <p className="text-danger">{usernameError}</p>}
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Email">Email address</label>
                        <input
                          type="email"
                          id="form2Email"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        {emailError && <p className="text-danger">{emailError}</p>}
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Password">Password</label>
                        <input
                          type="password"
                          id="form2Password"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={handlePasswordChange}
                          required
                        />
                        {passwordError && <p>{passwordError}</p>}
                        {passwordStrength && <p style={{color:'red'}}>{passwordStrength}</p>}
                      </div>

                      {signupError && <p className="text-danger">{signupError}</p>}

                      <center>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">Signup</button>
                        </div>
                        <p className="mb-0">Already have an account? <a href="/login">Login</a></p>
                      </center>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupForm;