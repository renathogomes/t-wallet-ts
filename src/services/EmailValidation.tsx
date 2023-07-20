function EmailValidation(email: string): boolean {
  const expected = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return expected.test(email);
}

export default EmailValidation;
