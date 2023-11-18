const email = (email) => {

  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  return (
    regex.test(email)

  // let regex = {
  //   capital: /[A-Z]/,
  //   digit: /[0-9]/,
  //   specialChar: /[@#$]/,
  //   full: /^[A-Za-z0-9@#$]{8,16}$/,
  // };
  // return (
  //   regex.capital.test(email) &&
  //   regex.digit.test(email) &&
  //   regex.specialChar.test(email) &&
  //   regex.full.test(email)
  );
}   

export default email;