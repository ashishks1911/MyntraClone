import React, { useEffect, useState } from "react";
import BagOffers from "../bag/BagOffers";
import BagItem from "../bag/BagItem";
import EmptyBag from "../bag/EmptyBag";
import BagRightSide from "../bag/BagRightSide";
import { useSelector } from "react-redux";
import PincodeDialog from "../bag/PincodeDialog";
import Loader from "../components/Loader";
import RemoveSelectedItemDialog from "../bag/RemoveSelectedItemDialog";
import { toast } from "react-toastify";

const Bag = () => {
  // const { bagItems } = useOutletContext();

  const bagItems = useSelector((store) => store.bag);
  const checkoutItems = useSelector((store) => store.checkoutItems);
  const [isLoading, setIsLoading] = useState(false);

  const [pincodeDialog, setPincodeDialog] = useState();
  const [removeSelectedDialog, setRemoveSelectedDialog] = useState(false);
  if (bagItems.length == 0) {
    return <EmptyBag />
  }

  const handleShowRemoveSelectedDialog = () => {
    const selectedItems = bagItems.filter((item) => item.checked);
    if (selectedItems.length === 0)
      toast.dark('Select any item to remove from bag.', { autoClose: 1000, customProgressBar: false, position: "top-center" })
    else
      setRemoveSelectedDialog(true)

  }

  if (isLoading) {
    return <Loader />
  }

  return (

    !isLoading && <div className="bag-container md:grid md:p-3 mt-12 md:w-[70%]">
      <div className="bag-left-block pt-10 p-5">
        <div className="flex px-4 py-4 items-center justify-between border rounded bg-[#fff6f4] text-sm text-bold">
          <h2 className="font-bold">Check Delivery Time & Services</h2>
          <button className="text-red-500 border border-red-500 roundeyd md:px-5 px-3 py-2 text-center text-xs font-bold uppercase" onClick={() => setPincodeDialog(true)}>
            Enter pin code
          </button>
        </div>
        {pincodeDialog && <PincodeDialog setPincodeDialog={setPincodeDialog} />}
        <BagOffers />
        <div className="bulk-action flex justify-between md:p-5 pt-4 items-center">
          <div className="flex items-center">
            <input type="checkbox" name="item" id="item" className="w-4 h-4" defaultChecked />
            <span className="uppercase font-bold md:text-md text-sm px-2"> {checkoutItems.length} /{bagItems.length} Items selected</span>
          </div>
          <div>
            <button className="uppercase font-bold text-xs text-gray-500" onClick={handleShowRemoveSelectedDialog} >Remove</button>
            <span className="md:px-7 px-2 text-gray-400 ">|</span>
            <button className="uppercase font-bold text-xs text-gray-500">Move to wishlist</button>
          </div>
          {removeSelectedDialog && <RemoveSelectedItemDialog setRemoveSelectedDialog={setRemoveSelectedDialog} />}
        </div>
        <div>
          {
            bagItems.map((bagItem, index) =>
              <div key={index} className="my-3">
                <BagItem bagItem={bagItem} />
              </div>
            )
          }
        </div>
      </div>
      <BagRightSide bagItems={bagItems} />
    </div>
  );
};

export default Bag;
