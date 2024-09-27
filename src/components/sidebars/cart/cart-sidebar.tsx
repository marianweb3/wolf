import { motion } from "framer-motion";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useState } from "react";
import useCartStore from "@/store/cartStore";
import CartItem from "./cart-item";

const CartSideBar = () => {
  const { isOpen, toggleCart } = useCartStore();
  const [items, setItems] = useState([
    {
      name: "THE REAL LANWOLF",
      size: "M",
      price: 78,
      salePrice: 54,
      imageUrl: "/images/tshirt1.png",
      isOutOfStock: false,
      quantity: 1,
    },
    {
      name: "THE REAL LANWOLF",
      size: "M",
      price: 78,
      imageUrl: "/images/tshirt2.png",
      isOutOfStock: true,
      quantity: 0,
    },
  ]);

  const handleIncrease = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += 1;
    setItems(updatedItems);
  };

  const handleDecrease = (index: number) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      setItems(updatedItems);
    }
  };

  const handleRemove = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <motion.div
      className="fixed top-0 right-0 border-l-2 border-black w-full h-full bg-white z-50 max-w-[549px] flex flex-col justify-between"
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <div className="flex flex-col gap-[50px]  p-8">
        <div className="flex justify-between items-center">
          <h2 className="font-saotorpes text-[40px] leading-[30.28px]">cart</h2>
          <button onClick={toggleCart} className="text-2xl">
            <IoCloseCircleSharp size={40} />
          </button>
        </div>
        <div className="flex flex-col">
          {items.map((item, index) => (
            <CartItem
              key={index}
              {...item}
              onIncrease={() => handleIncrease(index)}
              onDecrease={() => handleDecrease(index)}
              onRemove={() => handleRemove(index)}
            />
          ))}
        </div>
      </div>
      <div className="w-full border-t border-black px-8 pb-8">
        <div className="py-4 flex items-center justify-between">
          <span className="font-maladroit text-[18px] font-bold text-black">
            total
          </span>
          <span className="font-maladroit text-[18px] font-bold text-black">
            $156
          </span>
        </div>
        <button className="w-full bg-black text-white py-3 text-[18px] leading-[22.64px] font-maladroit ">
          SET ITEMS
        </button>
      </div>
    </motion.div>
  );
};

export default CartSideBar;
