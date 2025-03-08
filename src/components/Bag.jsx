import React from "react";
import { useOutletContext } from "react-router-dom";
import BagRightSide from "./BagRightSide";
import BagOffers from "./BagOffers";
import BagItem from "./BagItem";

const Bag = () => {
  const { bagItems } = useOutletContext();
  return (
    <div className="bag-container p-3 mt-12">
      <div className="bag-left-block pt-10 p-5">
      <div className="flex px-4 py-4 items-center justify-between border rounded bg-[#fff6f4] text-sm text-bold">
        <h2 className="font-bold">Check Delivery Time & Services</h2>
        <button className="text-red-500 border border-red-500 rounded px-5 py-2 text-center text-xs font-bold uppercase">
          Enter pin code
        </button>
      </div>
      <BagOffers/>
      <div className="bulk-action flex justify-between p-5 items-center">
        <div className="flex items-center">
          <input type="checkbox" name="item" id="item" className="w-4 h-4" />
          <span className="uppercase font-bold text-md px-2">2/2 Items selected</span>
        </div>
        <div>
          <button className="uppercase px-6 font-bold text-xs text-gray-500 border-r-2">Remove</button>
          <button className="uppercase px-6 font-bold text-xs text-gray-500">Move to wishlist</button>
        </div>
      </div>
      <div>
        {
          bagItems.map((bagItem) =>
            <div className="my-3">
              <BagItem bagItem={bagItem} />
            </div>
          )
        }
      </div>
    </div>
      <BagRightSide/>
    </div>
  );
};

export default Bag;
