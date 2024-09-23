import {
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

const Header = () => {
  return (
    <header className="bg-black flex items-center relative z-50">
      <div className="container mx-auto flex justify-center items-center">
        <nav className="flex items-center gap-16 relative">
          <ul className="flex space-x-16">
            <li>
              <a
                href="/"
                className="font-saotorpes text-[20px] leading-[18.68px] text-white uppercase"
              >
                Apparel
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="font-saotorpes text-[20px] leading-[18.68px] text-white uppercase"
              >
                Accessories
              </a>
            </li>
          </ul>

          <div className="relative">
            <div
              className="absolute bg-contain bg-no-repeat left-1/2 top-full"
              style={{
                backgroundImage: "url('/logo-bg.png')",
                width: "344px",
                height: "135px",

                transform: "translate(-50%, -50%)",
              }}
            ></div>

            <img
              src="/wolfshop.webp"
              alt="Wolf Shop"
              className="relative z-10 max-w-[275px]"
            />
          </div>

          <ul className="flex space-x-16">
            <li>
              <a
                href="/"
                className="font-saotorpes text-[20px] leading-[18.68px] text-white uppercase"
              >
                Artwork
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="font-saotorpes text-[20px] leading-[18.68px] text-white uppercase"
              >
                Tech Gear
              </a>
            </li>
          </ul>
          <WalletMultiButton className="connect-button"></WalletMultiButton>
        </nav>
      </div>
      <div className="flex gap-3 absolute right-[160px]">
        <div className="size-[44px] rounded-full bg-white shrink-0 grid place-content-center">
          <img src="/header/search.svg" alt="Search" />
        </div>
        <div className="size-[44px] rounded-full bg-white shrink-0 grid place-content-center">
          <img src="/header/cart.svg" alt="Cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;
