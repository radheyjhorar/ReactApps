import React, { useState } from 'react';

const BillingAddress = () => {
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({
      ...billingInfo,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Billing Address</h2>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={billingInfo.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={billingInfo.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={billingInfo.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={billingInfo.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={billingInfo.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={billingInfo.postalCode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={billingInfo.country}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default BillingAddress;
