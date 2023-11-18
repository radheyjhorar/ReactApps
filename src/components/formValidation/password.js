const password = (password) => {
  let regex = {
    capital: /[A-Z]/,
    digit: /[0-9]/,
    specialChar: /[@#$]/,
    full: /^[A-Za-z0-9@#$]{8,16}$/,
  };
  return (
    regex.capital.test(password) &&
    regex.digit.test(password) &&
    regex.specialChar.test(password) &&
    regex.full.test(password)
  );
}

export default password;