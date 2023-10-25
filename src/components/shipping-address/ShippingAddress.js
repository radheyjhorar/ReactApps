import React, { useState } from 'react';

const ShippingAddress = () => {
  const [shippingInfo, setShippingInfo] = useState({
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
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Shipping Address</h2>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={shippingInfo.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={shippingInfo.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={shippingInfo.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={shippingInfo.postalCode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={shippingInfo.country}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
