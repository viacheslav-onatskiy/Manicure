import { useState } from 'react';
import { useAuth } from '../../redux/hooks';
import { toast } from 'react-toastify';
import { Link, Navigate } from 'react-router-dom';
import { MyButton } from '../home/styles';

const Register = () => {
  const { registerUser, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      registerUser({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>Sign Up</h1>
      <p>
        <i className="fas fa-user" /> Create Your Account
      </p>

      <form>
        <input
          label="Name"
          id="register-name"
          type="text"
          value={name}
          name="name"
          onChange={(e) => onChange(e)}
          placeholder="Enter your name"
          autoComplete="off"
        />

        <input
          label="Email"
          id="register-email"
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
          id="register-password"
          type="password"
          value={password}
          name="password"
          onChange={(e) => onChange(e)}
          placeholder="Create a password"
          autoComplete="off"
          minLength="6"
        />

        <input
          label="Password"
          id="register-password-2"
          type="password"
          value={password2}
          name="password2"
          onChange={(e) => onChange(e)}
          placeholder="Confirm Password"
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
          id="user-register-button"
        >
          Register
        </MyButton>

        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </>
  );
};

export default Register;
