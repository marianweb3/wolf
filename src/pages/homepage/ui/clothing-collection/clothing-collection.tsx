import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  createTransferInstruction,
  getAssociatedTokenAddress,
  getAccount,
  createAssociatedTokenAccountInstruction
} from "@solana/spl-token";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletNotConnectedError, SignerWalletAdapterProps } from '@solana/wallet-adapter-base';
import { Transaction, PublicKey, TransactionInstruction, Connection, SystemProgram, TransactionMessage, VersionedTransaction } from '@solana/web3.js';
import { config } from "../../../../config";

interface CarouselItem {
  title: string;
  price: string;
  image: string;
}

interface ClothingCollectionProps {
  title: string;
  items: CarouselItem[];
  backgroundImage?: string;
  buttonLabel?: string;
  buttonAction?: () => void;
}

const ClothingCollection: React.FC<ClothingCollectionProps> = ({
  title,
  items,
  backgroundImage = "/default-bg.webp",
  buttonLabel = "All clothes",
  buttonAction,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [busy, setBusy] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { connection } = useConnection();
  const { publicKey, sendTransaction, signTransaction } = useWallet();

  const onBuy = async (e: any) => {

    const amount =  parseInt(e.target.value) * 1000000;

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

        console.log(signature);

        await connection.confirmTransaction({
            blockhash: blockHash.blockhash,
            lastValidBlockHeight: blockHash.lastValidBlockHeight,
            signature
        });

        setBusy(false);

    } catch (err) {
        console.log(err);
        setBusy(false);
    }

};

  return (
    <div className="bg-black flex flex-col gap-12 justify-center items-center relative z-10">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute w-full h-[120%] z-0"
      />

      {/* Header */}
      <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between relative">
        <h2 className="font-saotorpes text-[48px] leading-[36.34px] text-white">
          {title}
        </h2>
        <div className="flex gap-3">
          <button
            onClick={scrollPrev}
            className={`w-[60px] h-[60px] bg-white rounded-full grid place-content-center ${
              !canScrollPrev ? "opacity-50" : ""
            }`}
          >
            <img src="/icons/arrow.svg" alt="Arrow Left" />
          </button>
          <button
            onClick={scrollNext}
            className={`w-[60px] h-[60px] bg-white rounded-full grid place-content-center ${
              !canScrollNext ? "opacity-50" : ""
            }`}
          >
            <img
              src="/icons/arrow.svg"
              alt="Arrow Right"
              className="scale-x-[-1]"
            />
          </button>
        </div>
      </div>

      {/* Embla Carousel */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex gap-4 mr-4">
          {items.map((item, index) => (
            <div key={index} className="shrink-0 grow-0 flex justify-center">
              <div className="flex flex-col gap-4 max-w-[520px]">
                <div className="bg-[#8CE6FF] h-[525px] px-[18px] py-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-none h-full w-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-saotorpes text-[24px] leading-[21.6px] text-white">
                      {item.title}
                    </h3>
                    <div className="size-10 rounded-full bg-white grid place-content-center">
                      <img src="/header/cart.svg" alt="Cart" />
                    </div>
                  </div>
                  <span className="font-maladroit text-white font-bold text-[18px] leading-[22.64px]">
                    {item.price} USDT
                  </span>
                  <button onClick={onBuy} value={item.price} className="font-maladroit text-white font-bold text-[18px] leading-[22.64px]">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <button
       disabled={busy}
        onClick={buttonAction}
        className="relative py-[12.5px] w-full max-w-[372px] border-[3px] border-black bg-white font-maladroit text-[18px] leading-[22.64px] font-bold"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default ClothingCollection;
