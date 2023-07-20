import React, { useState } from 'react';
import EmailValidation from '../services/EmailValidation';
import PasswordValidation from '../services/PasswordValidation';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    EmailValidation(email);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    PasswordValidation(password);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    return EmailValidation(email) && PasswordValidation(password);
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
        disabled={ !PasswordValidation(password) && EmailValidation(email) }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
