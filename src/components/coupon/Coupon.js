import React, { useState } from 'react';

const CouponComponent = () => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const availableCoupons = {
    COUPON10: 10, // 10% discount
    COUPON20: 20, // 20% discount
    COUPON30: 30, // 30% discount
  };

  const applyCoupon = () => {
    if (availableCoupons[couponCode]) {
      setDiscount(availableCoupons[couponCode]);
      setAppliedCoupon(couponCode);
    } else {
      // Handle invalid coupon code
      alert('Invalid coupon code');
    }
  };

  return (
    <div>
      <h2>Apply Coupon</h2>
      <div>
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button onClick={applyCoupon}>Apply</button>
      </div>
      {appliedCoupon && (
        <p>
          Coupon <strong>{appliedCoupon}</strong> applied! You get a {discount}% discount.
        </p>
      )}
    </div>
  );
};

export default CouponComponent;
