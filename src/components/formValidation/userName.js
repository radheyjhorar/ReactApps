const userName = (userName) => {
  let regex = {
    // capital: /[A-Z]/,
    // digit: /[0-9]/,
    // specialChar: /[@#$]/,
    full: /^[a-z]([0-9a-z]){2,15}$/,
  };
  return (
    // regex.capital.test(password) &&
    // regex.digit.test(password) &&
    // regex.specialChar.test(password) &&
    regex.full.test(userName)
  );
}

export default userName;