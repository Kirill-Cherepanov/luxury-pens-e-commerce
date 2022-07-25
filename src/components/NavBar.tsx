import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import cartIcon from '../icons/cart.svg';

export default function NavBar() {
  let { pathname } = useLocation();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { openCart, cartItemsQuantity } = useShoppingCart();
  const toggleHamburger = () => setIsHamburgerOpen((isOpen) => !isOpen);

  return (
    <header
      className={'z-10 shadow-xl sticky top-0 bg-slate-400 h-14 text-slate-900'}
    >
      <div className="px-2 md:px-8 mx-auto flex justify-center items-center max-w-5xl h-full">
        <div
          className={
            'MOBILE-MENU basis-1/2 flex items-center p-2 h-12 md:hidden'
          }
        >
          <button
            className={'hamburger-menu-btn' + (isHamburgerOpen ? ' open' : '')}
            onClick={toggleHamburger}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul
            className={
              (!isHamburgerOpen ? '-translate-x-screen' : '') +
              ' border-t border-opacity-70 border-t-slate-500 absolute top-14 left-0 p-4 transition-transform flex flex-col gap-4 bg-slate-400 w-full sm:gap-6 sm:p-6'
            }
          >
            <li className="text-xl font-medium">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-xl font-medium">
              <NavLink to="/Store">Store</NavLink>
            </li>
            <li className="text-xl font-medium">
              <NavLink to="/About">About</NavLink>
            </li>
          </ul>
        </div>
        <ul className="DESKTOP-MENU hidden md:flex basis-1/2 gap-6 items-center">
          <li className="text-xl font-medium">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-xl font-medium">
            <NavLink to="/Store">Store</NavLink>
          </li>
          <li className="text-xl font-medium">
            <NavLink to="/About">About</NavLink>
          </li>
        </ul>
        <div className="basis-60 text-4xl text-slate-900 shrink-0 font-sansita select-none flex justify-center text-center">
          Luxury pens
        </div>
        <div className="basis-1/2 flex justify-end items-center gap-6">
          {pathname === '/Basket' ? null : (
            <button onClick={openCart} className="rounded-full relative">
              <img src={cartIcon} alt="Cart" className="w-8 h-8" />
              {cartItemsQuantity === 0 ? null : (
                <div className="rounded-full w-4 h-4 absolute right-[-2px] bottom-[-2px] text-white text-xs font-bold bg-slate-900">
                  {cartItemsQuantity}
                </div>
              )}
            </button>
          )}
          {pathname === '/Basket' || cartItemsQuantity === 0 ? null : (
            <div className="hidden md:block text-lg font-medium bg-slate-800 text-slate-50 px-4 py-1 rounded-full">
              <NavLink to="/Basket">Checkout</NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
