import { useRef } from "react";

export default function Header() {

    const handleToggle = () => {
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelector('.nav-links');

        nav.classList.toggle('show');
        navLinks.classList.toggle('show');
    }

    return <div id="app">
        <header>
            <div className="container">
                <div className="menu-toggle" onClick={handleToggle}>
                    X
                </div>
                <div className="logo">
                    VENIA
                </div>
                <nav className="nav">
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Jewellery</a></li>
                    </ul>
                </nav>
                <div className="cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">10</span>
                </div>
            </div>
        </header>
    </div>
}