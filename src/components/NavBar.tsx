import {NavLink} from 'react-router-dom'

type Props = {}

export default function NavBar({}: Props) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Store">Store</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
      </ul>
      <button className='rounded-full'>
        Cart
        <div className="rounded-full">3</div>
      </button>
    </nav>
  )
}