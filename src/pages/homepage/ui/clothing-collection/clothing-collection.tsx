import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductItem from "@/components/product/product-item";
import {
  createTransferInstruction,
  getAssociatedTokenAddress,
  getAccount,
  createAssociatedTokenAccountInstruction,
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  WalletNotConnectedError,
  SignerWalletAdapterProps,
} from "@solana/wallet-adapter-base";
import {
  Transaction,
  PublicKey,
  TransactionInstruction,
  Connection,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import { config } from "../../../../config";
import { Product } from "@/pages/product";

interface ClothingCollectionProps {
  title: string;
  items: Product[];
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
    const amount = parseInt(e.target.value) * 1000000;

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
      );

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
        signature,
      });

      setBusy(false);
    } catch (err) {
      console.log(err);
      setBusy(false);
    }
  };

  return (
    <section className="bg-black flex flex-col gap-12 justify-center items-center relative z-10">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute w-full h-[120%] z-0 md:object-fill object-cover"
      />

      {/* Header */}
      <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between relative px-4 lg:px-0">
        <h2 className="font-saotorpes text-[28px] sm:text-[36px] md:text-[48px] leading-[32px] md:leading-[36.34px] text-white">
          {title}
        </h2>
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={scrollPrev}
            className={`w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] bg-white rounded-full grid place-content-center ${
              !canScrollPrev ? "opacity-50" : ""
            }`}
          >
            <img src="/icons/arrow.svg" alt="Arrow Left" />
          </button>
          <button
            onClick={scrollNext}
            className={`w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] bg-white rounded-full grid place-content-center ${
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

      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-1 px-2" // Adjust width based on viewport size
            >
              <ProductItem
                title={item.name}
                price={parseFloat(item.price)}
                image={item.images?.at(0)}
                onBuy={onBuy}
              />
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
    </section>
  );
};

export default ClothingCollection;
