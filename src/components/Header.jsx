import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import { Menu } from '@components/Menu';
import { MyOrder } from '@containers/MyOrder';
import { AppContext } from '@context/AppContext';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import ShoppingCart from '@icons/icon_shopping_cart.svg';
import close from '@icons/icon_close.png';


const Header = () => {
  
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state, toggle, setToggle  } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav>
			<img src={menu} alt="menu" className="menu"  onClick={() => handleToggle(!toggle)}/>
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo"/>
				<ul className={`toggle-${toggle}`}>
			    <img src={close} alt="close" onClick={() => handleToggle(!toggle)}/>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={() => handleToggle(!toggle)}>
            platzi@example.com
          </li>
					<li 
            className="navbar-shopping-cart" 
            onClick={() => setToggleOrders(!toggleOrders)}
          >
						<img src={ShoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
      {toggle && <Menu /> }
      {toggleOrders && <MyOrder setToggleOrders={setToggleOrders} toggleOrders={toggleOrders}/>}
		</nav>
  )
}

export { Header };
