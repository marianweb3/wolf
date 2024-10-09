import { motion } from "framer-motion";
import { IoCloseCircleSharp } from "react-icons/io5";
import useCartStore from "@/store/cartStore";
import CartItem from "./cart-item";

const CartSideBar = () => {
  const { isOpen, toggleCart, cartItems, removeFromCart, updateItemQuantity } =
    useCartStore();

  const handleIncrease = (index: number) => {
    updateItemQuantity(index, cartItems[index].quantity + 1);
  };

  const handleDecrease = (index: number) => {
    if (cartItems[index].quantity > 1) {
      updateItemQuantity(index, cartItems[index].quantity - 1);
    }
  };

  const handleRemove = (index: number) => {
    removeFromCart(index);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <motion.div
      className="fixed top-0 right-0 border-l-2 border-black w-full h-full bg-white z-50 max-w-[637px] flex flex-col justify-between"
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <div className="flex flex-col gap-[50px] p-8">
        <div className="flex justify-between items-center">
          <h2 className="font-saotorpes text-[40px] leading-[30.28px]">cart</h2>
          <button onClick={toggleCart} className="text-2xl">
            <IoCloseCircleSharp size={40} />
          </button>
        </div>
        <div className="flex flex-col">
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              {...item}
              onIncrease={() => updateItemQuantity(index, item.quantity + 1)}
              onDecrease={() =>
                updateItemQuantity(index, Math.max(1, item.quantity - 1))
              }
              onRemove={() => removeFromCart(index)}
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
            ${totalPrice.toFixed(2)}
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
