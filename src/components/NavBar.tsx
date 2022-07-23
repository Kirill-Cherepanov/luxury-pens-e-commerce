import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export default function NavBar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { openCart, cartItemsQuantity } = useShoppingCart();
  const toggleHamburger = () => setIsHamburgerOpen((isOpen) => !isOpen);

  return (
    <header className="flex justify-between sticky top-0 bg-slate-400">
      <div className={'MOBILE-MENU flex items-center p-2 h-12 lg:hidden'}>
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
            ' absolute top-12 left-0 p-4 transition-transform flex flex-col gap-4 bg-slate-400 w-screen'
          }
        >
          <li className="nav-li">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/Store">Store</NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/About">About</NavLink>
          </li>
        </ul>
      </div>
      <ul className="DESKTOP-MENU hidden lg:flex">
        <li className="nav-li">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/Store">Store</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
      {cartItemsQuantity === 0 ? null : (
        <button onClick={openCart} className="rounded-full">
          Cart
          <div className="rounded-full">{cartItemsQuantity}</div>
        </button>
      )}
    </header>
  );
}
