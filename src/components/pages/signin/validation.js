/**
 * Ensures that user inputs when signing up are correct.
 * @param {Object} inputs The user inputs
 * @returns {Object} All the errors identified
 */
const validateSigninInputs = inputs => {
  const { email, password } = inputs;
  const errors = {};

  // Validating email field
  if (!email) errors.email = "Medical center email is required";
  else if (!/^.+?@.+?\..+$/.test(email))
    errors.email = "Email format is not valid";

  // Validating password field
  if (!password) errors.password = "Password field is required";
  else if (
    !(
      /\d/.test(password) &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      password.length > 7
    )
  )
    errors.password =
      "Password must be at least 7 character mix of capital, small letters with numbers";

  return errors;
};

export default validateSigninInputs;
