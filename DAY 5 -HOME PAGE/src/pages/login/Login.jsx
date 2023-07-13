import axios from 'axios';
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Login.css';
import Navbar from '../../components/navbar/Navbar';


const Login = () => {
   
   const usernameInput = useRef();
   const passwordInput = useRef();

   const { loading, error, dispatch } = useContext(AuthContext);

   const navigate = useNavigate();

   const handleClick = async (e) => {
      e.preventDefault();
      // dispatch({ type: 'LOGIN_START' });
      // try {
      //    const res = await axios.post(
      //       'http://192.168.0.117:8800/api/auth/login',
      //       {
      //          username: usernameInput.current.value,
      //          password: passwordInput.current.value,
      //       }
      //    );
      //    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      //    navigate('/');
      // } catch (error) {
      //    dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
      // }
      if(true){
         navigate("/")
      }
      
   };

   return (
      <div>
         <Navbar/>
      <div className="login">
         <div className="lContainer">
            <h1>Welcome Back</h1>
            <input
               type="text"
               className="lInput"
               placeholder="username"
               id="username"
               ref={usernameInput}
            />
            <input
               type="password"
               className="lInput"
               placeholder="password"
               id="password"
               ref={passwordInput}
            />
            <button
               className="lButton"
               onClick={handleClick}
               disabled={loading}
            >
               Login
            </button>
            {error && <span>{error.message}</span>}
         </div>
      </div>
      </div>
   );
};

export default Login;
