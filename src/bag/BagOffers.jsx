import React from 'react'

const BagOffers = () => {
  let offerMeassages = [
    '10% Instant Discount on Kotak Bank Credit and Debit Cards and Credit Card EMI on a min spend of ₹3,500. TCA',
    '10% Instant Discount on Kotak Credit and Debit Cards on a min spend of ₹5,000. TCA',
    '10% Instant Discount on HSBC Credit Cards on a min spend of ₹5,000. TCA',
    '10% Instant Discount on HDFC Bank Credit Card EMI on a min spend of ₹3,500. TCA',
    '12.5% Instant Discount up to ₹750 on every spend with Myntra Kotak Credit Card. TCA',
    'Assured Cashback Up To ₹20-₹200 on Paytm UPI transaction on a min spend of ₹750. TCA',
    'Flat ₹50 Cashback On Simpl Pay Later On Orders Of ₹1499 &amp; More. TCA',
    'Flat ₹40 and ₹50 Cashback on BAJAJ UPI &amp; RuPay Credit Card on UPI Transactions on a min spend of ₹999. TCA',
    'Flat ₹75 Cashback on transaction with PayZapp on a min spend of ₹1,500. TCA',
    '10% Cashback on BHIM App &amp; RuPay Credit Card on UPI Transactions. TCA',
    'Upto ₹500 Cashback on RuPay Credit card via PhonePe UPI on Myntra on a min spend of ₹1,000. TCA',
    'Get ₹50-₹500 Assured Cashback on minimum transaction of ₹1000 on RuPay Credit Card with Paytm UPI. TCA',
    'Flat ₹100 cashback on a minimum order value of Rs.999, valid only on first ever Simpl transaction.TCA',
    'Get up to ₹399 Cashback on CRED UPI on a min spend of ₹500. TCA',
    'Get up to ₹500 Cashback on RuPay Credit Card transaction via CRED UPI on a min spend of ₹1000. TCA',
    'Upto ₹500 Cashback on Mobikwik Wallet transaction on Myntra on a min spend of ₹1, 500.TCA',

    // Flat ₹150 Cashback on Mobikwik Wallet transaction on Myntra on a
    // min spend of ₹2,000.TCA

    // Get up to ₹250 Cashback on Mobikwik UPI on a min spend of ₹999.
    // TCA

    // Flat ₹30 Cashback on Freecharge UPI (Android Devices only) on a
    // minimum spend of ₹1,999. TCA

    // Flat ₹50 on Airtel Payments Bank transactions on a min spend of
    // ₹1,000. TCA
  ];

  return (
    <div className="offers border md:rounded mt-3 p-4 rounded-3xl">
      <h2 className='text-xl font-bold pb-2 md:hidden'>Offers</h2>
      <div className="flex pb-1">
        <img src="/offer.svg" alt="offer" />
        <h2 className="px-2 font-bold text-sm">
          <span className='md:inline hidden'>
            Available Offers
          </span>
          <span className='md:hidden'>
            Bank Offers
          </span>
        </h2>
      </div>
      <div className="text-xs px-2 md:py-2">
        <li className="offer-message list-none md:list-disc">
          10% Instant Discount on Axis Bank Credit Card and Credit Card EMI
          on a min spend of ₹3,500. TCA
        </li>
      </div>
      <div className="show-more-offers px-7 items-center cursor-pointer md:flex hidden">
        <span className="text-red-500 text-sm" >Show More</span>
        <div style={{ color: "ff3e6c" }} className="pl-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" className="offersV2-base-arrowIcon" style={{ transform: "rotate(90deg)", color: "#ff3e6c" }}><path fillRule="evenodd" d="M6.797 5.529a.824.824 0 0 0-.042-.036L1.19.193a.724.724 0 0 0-.986 0 .643.643 0 0 0 0 .94L5.316 6 .203 10.868a.643.643 0 0 0 0 .938.724.724 0 0 0 .986 0l5.566-5.299a.644.644 0 0 0 .041-.978"></path></svg>
        </div>
      </div>
      <span className="text-red-500 text-sm font-bold md:hidden inline pl-2">More Bank Offers</span>
    </div>
  )
}

export default BagOffers
