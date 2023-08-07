import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EmailValidation from '../services/EmailValidation';
import PasswordValidation from '../services/PasswordValidation';
import { login } from '../redux/actions';
import { Dispatch } from '../types';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch: Dispatch = useDispatch();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validation = (PasswordValidation(password) && EmailValidation(email));

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validation) dispatch(login(email));
    navigate('/carteira');
  };

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
        Entrar
      </button>
    </form>
  );
}

export default Login;
