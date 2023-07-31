import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    let isValid = true;
    if (email.trim() === '') {
      setEmailError('Please enter your email.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password.trim() === '') {
      setPasswordError('Please enter your password.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!isValid) {
      return;
    }

    // Make a POST request to the backend login endpoint
    fetch('http://localhost:8081/api/v1/auth/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Login successful, store the token in local storage
          localStorage.setItem('token', data.token);
          alert('Login successful.');
          // Redirect to home page when login is successful
          navigate('/'); // Replace '/' with the path of your home page route
        } else {
          // Login failed, set the error message
          setLoginError('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        // An error occurred during login, set the error message
        setLoginError('An error occurred during login.');
      });
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="/static/media/about_pic.f1d3942b20593b137c89.jpeg"
                    alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <center>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Log into your account</h5>
                      </center>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">Email</label>
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          // required
                        />
                        {emailError && <p className="text-danger">{emailError}</p>}
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example27">Password</label>
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          // required
                        />
                        {passwordError && <p className="text-danger">{passwordError}</p>}
                      </div>

                      {loginError && <p className="text-danger">{loginError}</p>}

                      <center>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                        </div>
                      </center>

                      <a className="small text-muted" href="#!">Forgot password?</a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account?
                        <a href="/signup" style={{ color: "#393f81" }}>Register here</a>
                      </p>
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

export default Login;