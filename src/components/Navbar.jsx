import React from 'react';
import { NavLinks } from '../constants';
const Navbar = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="logo"/>
                <ul>
                    {NavLinks.map((link) => {
                        return(
                            <li key={link.label}>
                                <a href={link.label}>{link.label}</a>
                            </li>
                        )

                    })}
                </ul>
                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="Search"/>
                    </button>
                    <button>
                        <img src="/cart.svg" alt="cart"/>
                    </button>


                </div>
            </nav>
        </header>
    )
}

export default Navbar;