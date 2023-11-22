import { useState } from 'react';
import { useAuth } from '../../redux/hooks';
import { Link } from 'react-router-dom';
import { MyButton } from '../home/styles';

const Login = () => {
  const { loginUser, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  if (isAuthenticated) {
    return <Link to="/" />;
  }

  return (
    <>
      <h1>Sign in</h1>
      <p>
        <i className="fas fa-user" /> Sign Into Your Account
      </p>

      <form>
        <input
          label="Email"
          id="login-email"
          type="email"
          value={email}
          name="email"
          onChange={(e) => onChange(e)}
          placeholder="Email Address"
          required
          autoComplete="off"
        />

        <input
          label="Password"
          id="login-password"
          type="password"
          value={password}
          name="password"
          onChange={(e) => onChange(e)}
          placeholder="Enter your password"
          autoComplete="off"
          minLength="6"
        />

        <MyButton
          variant="primary"
          text="Register"
          onClick={(e) => onSubmit(e)}
          color="white"
          type="submit"
          className={`float-right`}
          id="user-login-button"
        >
          Login
        </MyButton>

        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </>
  );
};

export default Login;
