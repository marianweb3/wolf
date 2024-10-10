import React, { useState } from "react";
import CustomCheckbox from "@/components/common/custom-checkbox";
import CustomRadio from "@/components/common/custom-radio";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import useOrderStore from "@/store/orderStore";
import useCartStore from "@/store/cartStore";
import {
  createTransferInstruction,
  getAssociatedTokenAddress,
  getAccount,
  createAssociatedTokenAccountInstruction
} from "@solana/spl-token";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletNotConnectedError, SignerWalletAdapterProps } from '@solana/wallet-adapter-base';
import { Transaction, PublicKey, TransactionInstruction, Connection, SystemProgram, TransactionMessage, VersionedTransaction } from '@solana/web3.js';
import { config } from "../../../../../../../config";

interface PaymentMethod {
  id: string;
  label: string;
  icon?: string;
}

export const paymentMethods: PaymentMethod[] = [
  // { id: "paypal", label: "PayPal", icon: "/icons/paypal.svg" },
  // { id: "googlepay", label: "Google Pay", icon: "/icons/googlepay.svg" },
  // { id: "applepay", label: "Apple Pay", icon: "/icons/applepay.svg" },
  // { id: "metamask", label: "MetaMask", icon: "/icons/metamask.svg" },
  { id: "сrypto", label: "Crypto", icon: "/icons/crypto.png" },
];

const PaymentSection = () => {
  const navigate = useNavigate();
  const { setOrder, order } = useOrderStore();
  const { cartItems } = useCartStore();
  const [busy, setBusy] = useState(false);
  const { connection } = useConnection();
  const { publicKey, sendTransaction, signTransaction } = useWallet();
  // const [billingMatchesShipping, setBillingMatchesShipping] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");

  const handlePaymentMethodChange = (id: string) => {
    setSelectedPaymentMethod((prevId) => (prevId === id ? "" : id));
  };

  // const handleSubmit = () => {
  //   // Handle payment submission logic here
  //   // Navigate to /order-confirmed page
  //   setOrder({ paymentType: selectedPaymentMethod, cartItems: cartItems });
  //   // navigate("/order-confirmed");
  //   console.log("Pay Now clicked");
  // };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  const handleSubmit = async (e: any) => {

    if(!publicKey){
      alert("Pleas connect wallet");
      return;
    }

    const amount = parseInt(totalPrice * 1000000);

    try {

      if (!publicKey || !signTransaction) throw new WalletNotConnectedError();

      setBusy(true);

      const recipientAddress = new PublicKey(config.contract);

      const mintToken = new PublicKey(config.token);

      const associatedTokenFrom = await getAssociatedTokenAddress(
        mintToken,
        publicKey
      );

      const fromAccount = await getAccount(connection, associatedTokenFrom);

      const associatedTokenTo = await getAssociatedTokenAddress(
        mintToken,
        recipientAddress
      );

      const ins = createTransferInstruction(
        fromAccount.address,
        associatedTokenTo,
        publicKey,
        amount
      )

      const blockHash = await connection.getLatestBlockhash("processed");

      const messageV0 = new TransactionMessage({
        payerKey: publicKey,
        recentBlockhash: blockHash.blockhash,
        instructions: [ins],
      }).compileToV0Message();

      const versionedTransaction = new VersionedTransaction(messageV0);
      const signature = await sendTransaction(versionedTransaction, connection);

      await connection.confirmTransaction({
        blockhash: blockHash.blockhash,
        lastValidBlockHeight: blockHash.lastValidBlockHeight,
        signature
      });

      const data = {
        items: cartItems,
        shipping: order.formValues,
        total: totalPrice,
        hash: signature
      }

      /// save 

      setBusy(false);

    } catch (err) {
      console.log(err);
      setBusy(false);
    }

  };


  console.log(order);
  return (
    <div className="w-full flex flex-col gap-[36px] md:gap-[42px] border-y border-[#C0C0C0] py-[24px]">
      {/* Payment Title & Billing matches shipping address checkbox */}
      <div className={"flex flex-col gap-[16px] md:gap-[24px]"}>
        {/* Payment Title */}
        <h1 className="font-saotorpes text-[30px] md:text-[40px] font-[400] text-black leading-[100%]">
          PAYMENT
        </h1>

        {/*/!* Billing matches shipping address checkbox *!/*/}
        {/*<label className="flex items-center text-black text-[12px] md:text-[16px] font-[700] leading-[160%] font-maladroit">*/}
        {/*  <CustomCheckbox*/}
        {/*    checked={billingMatchesShipping}*/}
        {/*    setChecked={setBillingMatchesShipping}*/}
        {/*    className={"cursor-pointer mr-[8px]"}*/}
        {/*  />*/}
        {/*  BILLING MATCHES SHIPPING ADDRESS*/}
        {/*</label>*/}
      </div>

      {/* Payment Method Selection */}
      <h2 className="text-black text-[16px] md:text-[20px] font-[400] font-saotorpes">
        SELECT PAYMENT METHOD
      </h2>

      <div className="flex flex-col gap-[16px]">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className="flex items-center gap-[4px] md:gap-[6px] cursor-pointer"
          >
            <CustomRadio
              value={method.id}
              checked={selectedPaymentMethod === method.id}
              name="paymentMethod"
              setChecked={handlePaymentMethodChange}
              className={"size-4 md:size-5"}
            />
            {method.icon && (
              <img
                src={method.icon}
                alt={`${method.label} icon`}
                className={"w-fit h-[28px] md:h-[32px]"}
              />
            )}
            <h3 className={"font-maladroit"}>{method.label}</h3>
          </label>
        ))}
      </div>

      {/* Pay Now Button */}
      <div className={"w-full flex justify-end"}>
        <button
          onClick={handleSubmit}
          disabled={!selectedPaymentMethod || busy} // Disable if no payment method selected
          className={clsx(
            `w-full md:max-w-[248px] py-[8px] md:py-[12px] px-[16px] md:px-[20px] bg-black text-white text-[14px] font-[700] font-maladroit transition-all`,
            "disabled:cursor-not-allowed disabled:bg-[rgba(0,0,0,0.20)] disabled:text-[#909090]"
          )}
        >
          PAY NOW
        </button>
      </div>
    </div>
  );
};

export default PaymentSection;
