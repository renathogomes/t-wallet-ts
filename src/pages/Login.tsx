import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EmailValidation from '../services/EmailValidation';
import PasswordValidation from '../services/PasswordValidation';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      <Link to="/carteira">
        <button
          disabled={ !validation }
        >
          **Entrar**
        </button>
      </Link>
    </form>
  );
}

export default Login;
