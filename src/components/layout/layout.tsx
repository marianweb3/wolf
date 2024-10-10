import { ReactNode } from "react";
import Footer from "./footer";
import CartSideBar from "../sidebars/cart/cart-sidebar";
import Header from "@/components/layout/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CartSideBar />
    </div>
  );
};

export default Layout;
