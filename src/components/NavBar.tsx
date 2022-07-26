import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import Icon from './Icon';

export default function NavBar() {
  let { pathname } = useLocation();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { openCart, cartItemsQuantity } = useShoppingCart();
  const toggleHamburger = () => setIsHamburgerOpen((isOpen) => !isOpen);

  return (
    <header
      className={
        'z-10 shadow-xl sticky top-0 bg-primary-400 h-14 text-secondary-900'
      }
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
              ' border-t border-opacity-70 border-t-primary-500 absolute top-14 left-0 transition-transform flex flex-col bg-primary-400 w-full'
            }
          >
            <li className="group text-xl font-medium transition-colors hover:bg-primary-600 hover:text-secondary-200 ">
              <NavLink
                onClick={toggleHamburger}
                to="/luxury-pens-e-commerce/"
                className="p-4 sm:p-5 block w-full h-full"
              >
                <span className="transition-all inline-block group-hover:scale-110 group-hover:translate-x-1 group-hover:font-bold group-hover:drop-shadow-[-4px_4px_1px_rgba(0,0,0,0.15)]">
                  Store
                </span>
              </NavLink>
            </li>
            <li className="group text-xl font-medium transition-colors hover:bg-primary-600 hover:text-secondary-200 ">
              <NavLink
                onClick={toggleHamburger}
                to="/luxury-pens-e-commerce/Store"
                className="p-4 sm:p-5 block w-full h-full"
              >
                <span className="transition-all inline-block group-hover:scale-110 group-hover:translate-x-1 group-hover:font-bold group-hover:drop-shadow-[-4px_4px_1px_rgba(0,0,0,0.15)]">
                  Home
                </span>
              </NavLink>
            </li>
            <li className="group text-xl font-medium transition-colors hover:bg-primary-600 hover:text-secondary-200 ">
              <NavLink
                onClick={toggleHamburger}
                to="/luxury-pens-e-commerce/About"
                className="p-4 sm:p-5 block w-full h-full"
              >
                <span className="transition-all inline-block group-hover:scale-110 group-hover:translate-x-1 group-hover:font-bold group-hover:drop-shadow-[-4px_4px_1px_rgba(0,0,0,0.15)]">
                  About
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="DESKTOP-MENU hidden md:block basis-1/2 h-full">
          <div className="w-52 h-full flex">
            <li className="flex-grow basis-1/2 flex items-center text-xl font-medium transition-all hover:scale-110 hover:font-bold hover:drop-shadow-[4px_4px_1px_rgba(0,0,0,0.15)]">
              <NavLink to="/luxury-pens-e-commerce/">Home</NavLink>
            </li>
            <li className="flex-shrink-0 flex items-center text-xl font-medium transition-all hover:scale-110 hover:font-bold hover:drop-shadow-[4px_4px_1px_rgba(0,0,0,0.15)]">
              <NavLink to="/luxury-pens-e-commerce/Store">Store</NavLink>
            </li>
            <li className="flex-grow basis-1/2 justify-end flex items-center text-xl font-medium transition-all hover:scale-110 hover:font-bold hover:drop-shadow-[4px_4px_1px_rgba(0,0,0,0.15)]">
              <NavLink to="/luxury-pens-e-commerce/About">About</NavLink>
            </li>
          </div>
        </ul>
        <div className="basis-60 text-4xl text-primary-900 shrink-0 font-sansita select-none flex justify-center text-center">
          Luxury pens
        </div>
        <div className="basis-1/2 flex justify-end items-center gap-6">
          {pathname.includes('/Basket') || cartItemsQuantity === 0 ? null : (
            <NavLink
              to="/luxury-pens-e-commerce/Basket"
              className="hidden md:block text-lg font-medium px-4 py-1 rounded-full transition-colors duration-300 hover:bg-primary-600 hover:text-secondary-50"
            >
              Checkout
            </NavLink>
          )}
          {pathname.includes('/Basket') ? null : (
            <button
              onClick={openCart}
              className="rounded-full relative transition-all hover:scale-110 hover:drop-shadow-[4px_4px_1px_rgba(0,0,0,0.15)]"
            >
              <Icon type="cart" className="group w-8 h-8 " />
              {cartItemsQuantity === 0 ? null : (
                <div className="rounded-full w-4 h-4 absolute right-[-2px] bottom-[-2px] text-white text-xs font-bold bg-primary-700 group:hover:scale-110 group:hover:drop-shadow-[4px_4px_1px_rgba(0,0,0,0.15)]">
                  {cartItemsQuantity}
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
