import { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  UnsafeBurnerWalletAdapter,
  CoinbaseWalletAdapter,
  TrustWalletAdapter,
  WalletConnectWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import * as w from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import HomePage from "./pages/homepage";
import "@solana/wallet-adapter-react-ui/styles.css";
import CategoryPage from "./pages/category";
import CheckoutPage from "./pages/checkout";
import OrderConfirmedPage from "./pages/order-confirmed";
import ProductPage from "./pages/product";

const App = () => {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = "https://api.devnet.solana.com";
  //"https://mainnet.helius-rpc.com/?api-key=b1ad9a3b-fdae-423a-8fcd-b1c2c03c3fcc"; //useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new UnsafeBurnerWalletAdapter(),
      new CoinbaseWalletAdapter(),
      new TrustWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/*<Route path="/category" element={<CategoryPage />} />*/}
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/products/:type" element={<CategoryPage />} />
              <Route path="/product/:title" element={<ProductPage />} />
              <Route
                path="/order-confirmed/:hash"
                element={<OrderConfirmedPage />}
              />
            </Routes>
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
