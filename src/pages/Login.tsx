import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EmailValidation from '../services/EmailValidation';
import PasswordValidation from '../services/PasswordValidation';
import { login } from '../redux/actions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(email, password));
    navigate('/carteira');
  };

  const validation = (PasswordValidation(password) && EmailValidation(email));

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="email"
        data-testid="email-input"
        onChange={ handleEmail }
        value={ email }
        placeholder="exemplo@email.com"
      />
      <input
        type="password"
        data-testid="password-input"
        onChange={ handlePassword }
        value={ password }
      />
      <button
        type="submit"
        disabled={ !validation }
      >
        **Entrar**
      </button>
    </form>
  );
}

export default Login;
