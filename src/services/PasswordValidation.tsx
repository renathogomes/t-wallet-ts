const PasswordValidation = (password:string): boolean => {
  return (
    password.length >= 6
  );
};

export default PasswordValidation;
