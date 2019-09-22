/**
 * Ensures that user inputs when signing up are correct.
 * @param {Object} inputs The user inputs
 * @returns {Object} All the errors identified
 */
const validateSignupInputs = (inputs) => {
  const {
    name, email, country, state, address, password, confirmPassword, agreement,
  } = inputs;
  const errors = {};

  // Validating name field
  if (!name) errors.name = "Medical center name is required";
  else if (name.trim().length < 3) errors.name = "Medical center name must be at least 3 characters";

    // Validating email field
  if (!email) errors.email = "Medical center email is required";
  else if (!/^.+?@.+?\..+$/.test(email)) errors.email = "Email format is not valid";

  // Validating password field
  if (!password) errors.password = "Password field is required";
  else if (!(/\d/.test(password) && /[A-Z]/.test(password) && /[a-z]/.test(password) && password.length > 7))
    errors.password = "Password must be at least 7 character mix of capital, small letters with numbers";
  
  if (!confirmPassword) errors.confirmPassword = "Confirm password field is required";
  else if (password !== confirmPassword) 
    errors.confirmPassword = "Confirm password field must match the password field";

  // Validating location fields
  if(!country) errors.country = "Country field is required";
  if(!state) errors.state = "State field is required";
  if(!address) errors.address = "Address field is required";

  if(!agreement) errors.agreement = "You need to accept this before you can be able to sign up for an account"

  return errors;
};

export default validateSignupInputs;
